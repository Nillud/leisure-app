import type {
  LibraryEntryResponseStatus,
  TitleListItemResponseType
} from '../../api/src/generated/models'

export const STATUS_LABELS: Record<LibraryEntryResponseStatus, string> = {
  PLANNED: 'В планах',
  IN_PROGRESS: 'В процессе',
  COMPLETED: 'Завершено',
  ON_HOLD: 'На паузе',
  DROPPED: 'Брошено'
}

export const TYPE_LABELS: Record<TitleListItemResponseType, string> = {
  MOVIE: 'Фильм',
  TV_SHOW: 'Сериал',
  GAME: 'Игра',
  BOOK: 'Книга',
  ANIME: 'Аниме'
}

export const ACCESS_TOKEN = 'accessToken'
export const REFRESH_TOKEN = 'refreshToken'

export * from './auth-form'
export * from './library'
export * from './reviews'
export * from './role'
export * from './title'
