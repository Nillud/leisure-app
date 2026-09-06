import type { TMediaType, TStatus } from "@app/types";

export const STATUS_LABELS: Record<TStatus, string> = {
  want: "Планирую",
  progress: "В процессе",
  done: "Выполнено",
};

export const TYPE_LABELS: Record<TMediaType, string> = {
  movie: "Фильм",
  series: "Сериал",
  game: "Игра",
  book: "Книга",
  anime: "Аниме",
};
