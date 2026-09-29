import { Image } from 'expo-image'
import { Play, Plus } from 'lucide-react-native'
import { StyleSheet, Text, View } from 'react-native'
import Animated, {
  Extrapolation,
  type SharedValue,
  interpolate,
  useAnimatedStyle
} from 'react-native-reanimated'

import { colors, fontSize, fontWeight, radius, space } from '@app/tokens'

import type { TitleListItemResponse } from '@app/api'

import { Button } from '@/components/ui/Button'

interface Props {
  item: TitleListItemResponse
  index: number
  width: number
  scrollX: SharedValue<number>
}

export function HomeHeroSlide({ item, index, width, scrollX }: Props) {
  const imageStyle = useAnimatedStyle(() => {
    const inputRange = [(index - 1) * width, index * width, (index + 1) * width]

    return {
      transform: [
        {
          translateX: interpolate(
            scrollX.get(),
            inputRange,
            [-24, 0, 24],
            Extrapolation.CLAMP
          )
        },
        {
          scale: 1.06
        }
      ]
    }
  })

  return (
    <View
      style={{
        width
      }}
    >
      <View style={styles.hero}>
        <Animated.View style={[styles.imageContainer, imageStyle]}>
          <Image
            source={{ uri: item.coverUrl || '' }}
            contentFit='cover'
            style={styles.image}
          />
        </Animated.View>

        <View style={styles.gradientTop} />

        <View style={styles.gradientBottom} />

        <View style={styles.content}>
          <Text
            style={styles.title}
            numberOfLines={2}
          >
            {item.name}
          </Text>

          <Text style={styles.meta}>Thrillers · Dramas · Action · Crime</Text>

          <Text
            style={styles.description}
            numberOfLines={2}
          >
            When an overachieving college senior makes a wrong turn, her road
            trip becomes a life-changing adventure.
          </Text>

          <View style={styles.actions}>
            <Button onPress={() => {}}>
              <View style={styles.watchContent}>
                <Play
                  size={18}
                  color='#000'
                />

                <Text style={styles.watchText}>Watch Movie</Text>
              </View>
            </Button>

            <View style={styles.addButton}>
              <Plus
                size={25}
                color={colors.text.primary}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  hero: {
    height: 720,
    overflow: 'hidden',
    borderBottomLeftRadius: radius.lg,
    borderBottomRightRadius: radius.lg,
    backgroundColor: colors.bg.base
  },

  imageContainer: {
    position: 'absolute',
    top: 0,
    left: -24,
    right: -24,
    bottom: 0
  },

  image: {
    width: '100%',
    height: '100%'
  },

  gradientTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 180,
    backgroundColor: 'rgba(0, 0, 0, 0.05)'
  },

  gradientBottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 330,
    backgroundColor: 'rgba(0, 0, 0, 0.55)'
  },

  content: {
    position: 'absolute',
    left: space[4],
    right: space[4],
    bottom: 36
  },

  title: {
    color: colors.text.primary,
    fontSize: fontSize['3xl'],
    fontWeight: fontWeight.bold
  },

  meta: {
    marginTop: space[2],
    color: colors.text.primary,
    fontSize: fontSize.base
  },

  description: {
    marginTop: space[2],
    color: colors.text.secondary,
    fontSize: fontSize.base,
    lineHeight: 22
  },

  actions: {
    marginTop: space[4],
    flexDirection: 'row',
    alignItems: 'center',
    gap: space[3]
  },

  watchContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: space[2]
  },

  watchText: {
    color: '#000',
    fontSize: fontSize.base,
    fontWeight: fontWeight.semibold
  },

  addButton: {
    width: 52,
    height: 52,
    borderRadius: radius.full,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.13)'
  }
})
