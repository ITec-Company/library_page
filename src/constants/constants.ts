// base url for image
import { DifficultyItemType, LanguageType } from 'store/types/BookPostType'

export const BASE_IMAGE_URL = 'http://localhost:1500'
// export const BASE_VIDEO_URL = 'http://localhost:1000'

export const COURSES_URL = 'https://itec.pythonanywhere.com/#upcoming__title'

export const FIRST_ARRAY_ITEM = 0
export const SECOND_ARRAY_ITEM = 1
export const THIRD_ARRAY_ITEM = 2

// preview item
export const FIRST_PREVIEW_ITEM = 0
export const PREVIEW_ITEMS_COUNT = 3

export const difficultyItems: DifficultyItemType[] = [
  { label: 'junior', value: 'junior' },
  { label: 'middle', value: 'middle' },
  { label: 'senior', value: 'senior' },
]
export const languageItems: LanguageType[] = ['eng', 'rus']
