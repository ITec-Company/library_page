import { FC, useEffect } from 'react'

import { useSelector } from 'react-redux'

import style from './DirectionNavigation.module.scss'

import { NavigationSelect } from 'components/commonComponents/NavigationSelect'
import { setDirectionAC } from 'store/reducers/directions_reducer'
import { selectActiveDirection, selectDirections } from 'store/selectors/directions'
import { useAppDispatch } from 'store/store'
import { getDirectionsTC } from 'store/thunks/directions_thunks'

export const DirectionNavigation: FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getDirectionsTC())
  }, [])

  const directions = useSelector(selectDirections)
  const activeDirectionId = useSelector(selectActiveDirection)

  const setDirection = (directionId: string): void => {
    dispatch(setDirectionAC(directionId))
  }

  return (
    <div className={style.container}>
      <h3>Разделы \ directions</h3>
      <div>
        <NavigationSelect
          sections={directions}
          activeSectionId={activeDirectionId}
          handleCurrentSection={setDirection}
        />
      </div>
    </div>
  )
}
