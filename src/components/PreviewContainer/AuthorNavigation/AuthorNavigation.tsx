import { FC, useEffect } from 'react'

import { useSelector } from 'react-redux'

import style from './AuthorNavigation.module.scss'

import { SectionButton } from 'components/SectionButton'
import { selectAuthors } from 'store/selectors/authors'
import { useAppDispatch } from 'store/store'
import { getAuthorsTC } from 'store/thunks/authors_thunks'

export const AuthorNavigation: FC = () => {
  const dispatch = useAppDispatch()
  const authors = useSelector(selectAuthors)

  useEffect(() => {
    dispatch(getAuthorsTC())
  }, [])

  return (
    <div className={style.container}>
      <h3>Авторы</h3>
      <div>
        {authors.map(({ uuid, full_name }) => (
          <SectionButton key={uuid} name={full_name} isActive={false} />
        ))}
      </div>
    </div>
  )
}
