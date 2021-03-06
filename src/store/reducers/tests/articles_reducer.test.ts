import { FIRST_ARRAY_ITEM } from 'constants/constants'
import { articlesReducer, setCurrentArticleAC } from 'store/reducers/articles_reducer'
import { getArticlesTC } from 'store/thunks/articles_thunks'
import { ArticlesInitialStateType } from 'store/types/ArticlesInitialStateType'
import { ArticleType } from 'store/types/ArticleType'

let initialState: ArticlesInitialStateType
let newArticles: ArticleType[]
const currentArticleId: string = '10'

beforeEach(() => {
  initialState = {
    articles: [
      {
        uuid: currentArticleId,
        title: 'article_three',
        direction: {
          uuid: '36',
          name: 'JS',
        },
        difficulty: 'middle',
        author: {
          uuid: '1',
          full_name: 'BOB',
        },
        edition_date: '2022-06-10T00:00:00Z',
        description: 'very usefull ',
        local_url: '/file/article?file=author(1)-title(article_three).docx&uuid=3',
        image_url: '/image/article?format=original&uuid=3',
        language: 'rus',
        tags: [
          {
            uuid: '1',
            name: 'newbies',
          },
          {
            uuid: '2',
            name: 'newbies2',
          },
        ],
      },
    ],
    currentArticle: {
      uuid: '',
      title: '',
      direction: {
        uuid: '',
        name: '',
      },
      difficulty: '',
      author: {
        uuid: '',
        full_name: '',
      },
      edition_date: '',
      description: '',
      local_url: '',
      image_url: '',
      language: '',
      tags: [{ uuid: '', name: '' }],
    },
    file: null,
  }

  newArticles = [
    {
      uuid: '1',
      title: 'article_three',
      direction: {
        uuid: '36',
        name: 'JS',
      },
      difficulty: 'middle',
      author: {
        uuid: '1',
        full_name: 'BOB',
      },
      edition_date: '2022-06-10T00:00:00Z',
      description: 'very usefull ',
      local_url: '/file/article?file=author(1)-title(article_three).docx&uuid=1',
      image_url: '/image/article?format=original&uuid=1',
      language: 'rus',
      tags: [
        {
          uuid: '1',
          name: 'newbies',
        },
        {
          uuid: '2',
          name: 'newbies2',
        },
      ],
    },
    {
      uuid: '2',
      title: 'article_three',
      direction: {
        uuid: '36',
        name: 'JS',
      },
      difficulty: 'middle',
      author: {
        uuid: '1',
        full_name: 'BOB',
      },
      edition_date: '2022-06-10T00:00:00Z',
      description: 'very usefull ',
      local_url: '/file/article?file=author(1)-title(article_three).docx&uuid=2',
      image_url: '/image/article?format=original&uuid=2',
      language: 'rus',
      tags: [
        {
          uuid: '1',
          name: 'newbies',
        },
        {
          uuid: '2',
          name: 'newbies2',
        },
      ],
    },
    {
      uuid: '3',
      title: 'article_three',
      direction: {
        uuid: '36',
        name: 'JS',
      },
      difficulty: 'middle',
      author: {
        uuid: '1',
        full_name: 'BOB',
      },
      edition_date: '2022-06-10T00:00:00Z',
      description: 'very usefull ',
      local_url: '/file/article?file=author(1)-title(article_three).docx&uuid=3',
      image_url: '/image/article?format=original&uuid=3',
      language: 'rus',
      tags: [
        {
          uuid: '1',
          name: 'newbies',
        },
        {
          uuid: '2',
          name: 'newbies2',
        },
      ],
    },
  ]
})

describe('articles reducer', () => {
  test('should set new articles', () => {
    const action = getArticlesTC.fulfilled(newArticles, '')

    const endState = articlesReducer(initialState, action)

    expect(endState.articles).toBe(newArticles)
  })

  test('should set current article', () => {
    const action = setCurrentArticleAC(currentArticleId)

    const endState = articlesReducer(initialState, action)

    expect(endState.currentArticle).toBe(initialState.articles[FIRST_ARRAY_ITEM])
  })
})
