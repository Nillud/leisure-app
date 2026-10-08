export const AUTH_FORM_CONTENT = {
  login: {
    title: 'С возвращением!',
    submit: 'Войти',
    pending: 'Вход...',
    footerText: "Нет аккаунта?",
    footerAction: 'Зарегистрироваться',
    footerHref: '/register'
  },
  register: {
    title: 'Создать аккаунт',
    submit: 'Регистрация',
    pending: 'Регистрация...',
    footerText: 'Уже есть аккаунт?',
    footerAction: 'Войти',
    footerHref: '/login'
  }
} as const
