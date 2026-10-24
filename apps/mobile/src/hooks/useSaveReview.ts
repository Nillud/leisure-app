import { useQueryClient } from '@tanstack/react-query'

import type { TReviewSchema } from '@app/schemas'

import {
  getApiErrorMessage,
  getDiscoverFindMyStateQueryKey,
  getReviewFindByDiscoverKeyQueryKey,
  useReviewCreateByDiscoverKey,
  useReviewUpdate
} from '@app/api'

export function useSaveReview(key: string, reviewId: string | null) {
  const queryClient = useQueryClient()

  const onSuccess = () =>
    Promise.all([
      queryClient.invalidateQueries({
        queryKey: getDiscoverFindMyStateQueryKey(key)
      }),
      queryClient.invalidateQueries({
        queryKey: getReviewFindByDiscoverKeyQueryKey(key)
      })
    ])

  const create = useReviewCreateByDiscoverKey({
    mutation: {
      onSuccess
    }
  })
  const update = useReviewUpdate({
    mutation: {
      onSuccess
    }
  })

  const saveReview = (
    { rating, text }: TReviewSchema,
    onSaved: () => void,
    onFailed: (messsage: string | null) => void
  ) => {
    const callbacks = {
      onSuccess: onSaved,
      onError: (error: unknown) => onFailed(getApiErrorMessage(error))
    }

    if (reviewId) {
      update.mutate(
        { id: reviewId, data: { rating, text: text || undefined } },
        callbacks
      )

      return
    }

    create.mutate({ key, data: { rating, text: text || undefined } }, callbacks)
  }

  return {
    saveReview,
    isSaving: create.isPending || update.isPending
  }
}
