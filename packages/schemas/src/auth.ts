import { z } from 'zod'

import type { RegisterDto } from '@app/api'

export const authSchema = z.object({
  email: z.email('Введите корректный адрес электронной почты'),
  password: z.string().min(6, 'Пароль должен содержать не менее 6 символов')
}) satisfies z.ZodType<RegisterDto>

export type TAuthForm = z.infer<typeof authSchema>

export const authTokenSchema = z.object({
  accessToken: z.string(),
  refreshToken: z.string()
})
