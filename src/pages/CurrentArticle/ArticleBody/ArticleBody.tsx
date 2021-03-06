import { FC } from 'react'

import style from './ArticleBody.module.scss'

import { NavLinkComponent } from 'components'
import { BASE_IMAGE_URL } from 'constants/constants'
import { Path } from 'enums'
import { ArticleBodyPropsType } from 'store/types/ArticleBodyPropsType'
import { convertTitle } from 'utils/convert_title'

export const ArticleBody: FC<ArticleBodyPropsType> = ({
  article: { title, edition_date, image_url, description },
  isAdmin,
}) => (
  <div className={style.container}>
    <div className={style.header}>
      <NavLinkComponent nameButton="на главную" path={Path.MAIN} />
      {isAdmin && <NavLinkComponent nameButton="редактировать" path={Path.MAIN} />}
      <div>
        <h1>{convertTitle(title)}</h1>
      </div>
      <div className={style.date}>{edition_date}</div>
    </div>
    <div className={style.body}>
      <img alt="logo" src={BASE_IMAGE_URL + image_url} />
      <div className={style.description}>{description}</div>
    </div>
  </div>
)
