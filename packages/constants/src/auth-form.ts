export const AUTH_FORM_CONTENT = {
  login: {
    title: 'С возвращением!',
    submit: 'Войти',
    pending: 'Входим…',
    footerText: 'Нет аккаунта?',
    footerAction: 'Зарегистрироваться',
    footerHref: '/register'
  },
  register: {
    title: 'Создать аккаунт',
    submit: 'Создать аккаунт',
    pending: 'Создаём…',
    footerText: 'Уже есть аккаунт?',
    footerAction: 'Войти',
    footerHref: '/login'
  }
} as const
