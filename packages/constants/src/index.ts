import type {
	LibraryEntryResponseStatus,
	TitleListItemResponseType
} from '@app/api'

export const STATUS_LABELS: Record<LibraryEntryResponseStatus, string> = {
	PLANNED: 'Планирую',
	IN_PROGRESS: 'В процессе',
	COMPLETED: 'Выполнено',
	DROPPED: 'Брошено',
	ON_HOLD: 'Ожидает'
}

export const TYPE_LABELS: Record<TitleListItemResponseType, string> = {
	MOVIE: 'Фильм',
	GAME: 'Игра',
	BOOK: 'Книга',
	ANIME: 'Аниме',
	TV_SHOW: 'Сериал'
}
