import { StyleSheet, View } from 'react-native'

import { CREATOR_ROLE_LABEL } from '@app/constants'

import { space } from '@app/tokens'

import { formatTitleMeta, joinNames } from '@app/utils'

import type { DiscoverDetailsResponse } from '@app/api'

import { TitleInfo } from '../elements'

import { CreditLine } from './CreditLine'
import { LibraryStatusButton } from './library-status/LibraryStatusButton'

interface Props {
  title: Pick<
    DiscoverDetailsResponse,
    | 'key'
    | 'creators'
    | 'cast'
    | 'name'
    | 'description'
    | 'releaseDate'
    | 'genres'
  >
}

export function TitleContent({ title }: Props) {
  const [firstCreator] = title.creators

  return (
    <View style={styles.content}>
      <TitleInfo
        name={title.name}
        meta={formatTitleMeta(title)}
        description={title.description}
        descriptionLines={4}
      />

      <LibraryStatusButton titleKey={title.key} />

      {!!title.cast.length && (
        <CreditLine
          label='В ролях'
          names={joinNames(title.cast)}
        />
      )}

      {!!firstCreator && (
        <CreditLine
          label={CREATOR_ROLE_LABEL[firstCreator.role]}
          names={joinNames(title.creators)}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: space['layout-horizontal'],
    gap: space[4]
  }
})
