import type { CreatorRole } from '@app/api'

export const CREATOR_ROLE_LABEL: Record<CreatorRole, string> = {
  DIRECTOR: 'Режиссёр',
  CREATOR: 'Создатель',
  STUDIO: 'Студия',
  AUTHOR: 'Автор'
}
