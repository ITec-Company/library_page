import {
  appReducer,
  changeIsAdminModeAC,
  setErrorFalseAC,
  setErrorTrueAC,
  setIsLoadingStatusAC,
} from 'store/reducers/index'
import { getContactsTC, getCoursesTC } from 'store/thunks/app_thunks'
import { InitialAppStateType } from 'store/types'
import { ContactsType } from 'store/types/ContactsType'
import { CoursesType } from 'store/types/CoursesType'

let appInitialState: InitialAppStateType
let errorMessage: string
let isAdmin: boolean
let newCourses: CoursesType[]
let newContacts: ContactsType

beforeEach(() => {
  appInitialState = {
    isError: false,
    errorMessage: '',
    isAdmin: true,
    courses: [],
    contacts: {
      address: '',
      number_phone: '',
      socialFacebook: '',
      socialInstagram: '',
      socialSkype: '',
      socialTG: '',
      socialTikTok: '',
      socialViber: '',
      socialVK: '',
    },
    isLoading: false,
  }

  isAdmin = true

  errorMessage = 'some error'

  newCourses = [
    { name_course: 'qwe', description_course: 'qwe' },
    { name_course: 'qwe', description_course: 'qwe' },
  ]

  newContacts = {
    address: 'test',
    number_phone: 'test',
    socialFacebook: 'test',
    socialInstagram: 'test',
    socialSkype: 'test',
    socialTG: 'test',
    socialTikTok: 'test',
    socialViber: 'test',
    socialVK: 'test',
  }
})

describe('app reducer', () => {
  test('should set error message', () => {
    const action = setErrorTrueAC(errorMessage)

    const endState = appReducer(appInitialState, action)

    expect(endState.isError).toBeTruthy()
    expect(endState.errorMessage).toBe(errorMessage)
  })

  test('should set default error message', () => {
    const action = setErrorTrueAC('')

    const endState = appReducer(appInitialState, action)

    expect(endState.isError).toBeTruthy()
  })

  test('should set error false', () => {
    const action = setErrorFalseAC()

    const endState = appReducer(appInitialState, action)

    expect(endState.isError).toBeFalsy()
    expect(endState.errorMessage).toBe(appInitialState.errorMessage)
  })

  test('should set admin mod', () => {
    const action = changeIsAdminModeAC(isAdmin)

    const endState = appReducer(appInitialState, action)

    expect(endState.isAdmin).toBe(isAdmin)
  })

  test('should set courses', () => {
    const action = getCoursesTC.fulfilled(newCourses, '')

    const endState = appReducer(appInitialState, action)

    expect(endState.courses).toBe(newCourses)
  })

  test('should set contacts', () => {
    const action = getContactsTC.fulfilled(newContacts, '')

    const endState = appReducer(appInitialState, action)

    expect(endState.contacts).toBe(newContacts)
  })

  test('should set loading status', () => {
    const action = setIsLoadingStatusAC(true)

    const endState = appReducer(appInitialState, action)

    expect(endState.isLoading).toBeTruthy()
  })
})
