import { z } from 'zod'

import type { RegisterDto } from '@app/api'

export const authSchema = z.object({
    email: z.email('Введите корректный email'),
    password: z.string().min(6, 'Пароль должен быть от 6 символов')
}) satisfies z.ZodType<RegisterDto>

export type TAuthForm = z.infer<typeof authSchema>