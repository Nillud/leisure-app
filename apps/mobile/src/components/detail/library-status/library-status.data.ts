import { Check, type LucideIcon, Play, Plus } from 'lucide-react-native'

import type { TNextLibraryStatus } from '@app/types'

export const LIBRARY_ACTION_ICONS: Record<TNextLibraryStatus, LucideIcon> = {
  PLANNED: Plus,
  IN_PROGRESS: Play,
  COMPLETED: Check
}
