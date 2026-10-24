import type { IPlan, IPlanFeature } from '@app/types'

export const PLANS: IPlan[] = [
  {
    id: 'monthly',
    price: '$3.99',
    name: 'На месяц',
    period: 'Оплата каждый месяц'
  },
  {
    id: 'yearly',
    price: '$29.99',
    name: 'На год',
    period: 'Оплата раз в год',
    badge: 'Экономия 37%'
  }
]

export const PLAN_FEATURES: IPlanFeature[] = [
  { label: 'Фильмы, сериалы, аниме, книги и игры', isPremium: false },
  { label: 'Оценки и отзывы', isPremium: false },
  { label: 'Коллекции', isPremium: false },
  { label: 'Подбор с помощью ИИ', isPremium: true },
  { label: 'Описания от ИИ без спойлеров', isPremium: true },
  { label: 'Полный профиль ваших вкусов', isPremium: true }
]
