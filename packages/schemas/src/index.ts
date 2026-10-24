import { z } from 'zod'
import { ru } from 'zod/locales'

z.config(ru())

export * from './auth'
export * from './review'
