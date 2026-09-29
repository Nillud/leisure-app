import { LinearGradient } from 'expo-linear-gradient'
import { Play, Plus } from 'lucide-react-native'
import { useMemo, useState } from 'react'
import { PanResponder, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import Animated, {
  FadeIn,
  FadeOut,
  cancelAnimation,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated'

import { colors, fontSize, fontWeight, space } from '@app/tokens'

import type { TitleListItemResponse } from '@app/api'

import { Button } from '../ui/Button'

import { HomeHeroSlide } from './HomeHeroSlide'
import { PaginationDot } from './PaginationDot'

interface Props {
  items: TitleListItemResponse[]
}

export function HomeHeroSlider({ items }: Props) {
  const { width: windowWidth } = useWindowDimensions()
  const [width, setWidth] = useState(windowWidth)
  const [index, setIndex] = useState(0)

  const height = windowWidth * 1.35
  const current = items[index]

  const scrollX = useSharedValue(0)
  const gestureStartX = useSharedValue(0)
  const trackStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: -scrollX.get() }]
  }))
  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onMoveShouldSetPanResponderCapture: (_, gesture) =>
          Math.abs(gesture.dx) > 10 &&
          Math.abs(gesture.dx) > Math.abs(gesture.dy) * 1.2,
        onPanResponderGrant: () => {
          cancelAnimation(scrollX)
          gestureStartX.set(scrollX.get())
        },
        onPanResponderMove: (_, gesture) => {
          scrollX.set(
            Math.max(
              0,
              Math.min(
                (items.length - 1) * width,
                gestureStartX.get() - gesture.dx
              )
            )
          )
        },
        onPanResponderRelease: (_, gesture) => {
          const shouldTurn =
            Math.abs(gesture.dx) > width * 0.2 || Math.abs(gesture.vx) > 0.35
          const nextIndex = shouldTurn
            ? Math.max(
                0,
                Math.min(items.length - 1, index + (gesture.dx < 0 ? 1 : -1))
              )
            : index
          setIndex(nextIndex)
          scrollX.set(withTiming(nextIndex * width, { duration: 260 }))
        },
        onPanResponderTerminate: () => {
          scrollX.set(withTiming(index * width, { duration: 260 }))
        }
      }),
    [gestureStartX, index, items.length, scrollX, width]
  )

  return (
    <View
      style={{ height }}
      onLayout={event => {
        const layoutWidth = event.nativeEvent.layout.width
        if (layoutWidth !== width) {
          setWidth(layoutWidth)
          scrollX.set(index * layoutWidth)
        }
      }}
      {...panResponder.panHandlers}
    >
      <View style={styles.slideViewport}>
        <Animated.View style={[styles.slideTrack, trackStyle]}>
          {items.map((item, slideIndex) => (
            <HomeHeroSlide
              key={item.id}
              item={item}
              index={slideIndex}
              width={width}
              scrollX={scrollX}
            />
          ))}
        </Animated.View>
      </View>

      <LinearGradient
        colors={[
          'rgba(2,0,3,0.7)',
          'transparent',
          'rgba(2,0,3,0.9)',
          colors.bg.base
        ]}
        locations={[0, 0.35, 0.75, 1]}
        style={StyleSheet.absoluteFill}
        pointerEvents='none'
      />

      <View
        style={styles.content}
        pointerEvents='box-none'
      >
        <Animated.View
          key={current?.id}
          entering={FadeIn.duration(400)}
          exiting={FadeOut.duration(200)}
          style={{ gap: space[2] }}
        >
          <Text
            style={styles.name}
            numberOfLines={2}
          >
            {current?.name}
          </Text>

          <Text style={styles.genres}>Thrillers · Dramas · Action · Chime</Text>

          <Text
            style={styles.description}
            numberOfLines={2}
          >
            When an overachieving college senior makes a wrong turn...
          </Text>
        </Animated.View>

        <View style={styles.bottom}>
          <View style={styles.actions}>
            <Button
              icon={Play}
              onPress={() => {}}
            >
              Watch Movie
            </Button>

            <Button
              variant='secondary'
              icon={Plus}
              onPress={() => {}}
            />
          </View>

          <View style={styles.dots}>
            {items.map((item, index) => (
              <PaginationDot
                key={item.id}
                index={index}
                width={width}
                scrollX={scrollX}
              />
            ))}
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  slideViewport: {
    flex: 1,
    overflow: 'hidden'
  },
  slideTrack: {
    flexDirection: 'row'
  },
  content: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: space['layout-horizontal'],
    paddingBottom: space[4],
    gap: space[2]
  },
  genres: {
    color: colors.text.primary,
    fontSize: fontSize.sm
  },
  name: {
    color: colors.text.primary,
    fontSize: fontSize['3xl'],
    fontWeight: fontWeight.bold
  },
  description: {
    color: colors.text['little-muted'],
    fontSize: fontSize.sm,
    lineHeight: 20
  },
  bottom: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginTop: space[3]
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: space[3]
  },
  dots: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: space[2]
  },
  dot: {
    backgroundColor: colors.text.muted
  },
  dotActive: {
    backgroundColor: colors.text.primary
  }
})
