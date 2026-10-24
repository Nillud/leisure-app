import { z } from 'zod'

import { REVIEW_RATING, REVIEW_TEXT } from '@app/constants'

export const reviewSchema = z.object({
  rating: z
    .number({ message: 'Поставьте оценку' })
    .int()
    .min(REVIEW_RATING.min)
    .max(REVIEW_RATING.max),
  text: z
    .string()
    .trim()
    .max(REVIEW_TEXT.max, {
      message: `Не более ${REVIEW_TEXT.max} символов`
    })
    .refine(text => !text || text.length >= REVIEW_TEXT.min, {
      message: `Не менее ${REVIEW_TEXT.min} символов или оставьте поле пустым`
    })
})

export type TReviewSchema = z.infer<typeof reviewSchema>
