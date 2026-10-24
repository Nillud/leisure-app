import type { TActiveLibraryStatus, TLibraryStatusAction } from '@app/types'

export const ADD_TO_LIBRARY_ACTION: TLibraryStatusAction = {
  label: 'Добавить в библиотеку',
  nextStatus: 'PLANNED'
}

const RESUME_ACTION: TLibraryStatusAction = {
  label: 'Продолжить',
  nextStatus: 'IN_PROGRESS'
}

export const LIBRARY_STATUS_ACTIONS: Record<
  TActiveLibraryStatus,
  TLibraryStatusAction
> = {
  PLANNED: { label: 'Начать', nextStatus: 'IN_PROGRESS' },
  IN_PROGRESS: { label: 'Отметить завершённым', nextStatus: 'COMPLETED' },
  ON_HOLD: RESUME_ACTION,
  DROPPED: RESUME_ACTION
}
