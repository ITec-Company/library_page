export enum Path {
  DEFAULT = '/',
  MAIN = '/main',
}

export enum RequestSource {
  DIRECTIONS = '/directions',
  AUTHORS = '/authors',
  TAGS = '/tags',
  BOOKS = '/books',
  VIDEO = '/videos',
}

export enum RequestCommonData {
  COURSE = 'course/',
  CONTACT = 'contact/',
}

export enum StatusCode {
  GET_DIRECTIONS_SUCCESS = 200,
  GET_AUTHORS_SUCCESS = 200,
  GET_TAGS_SUCCESS = 200,
  GET_VIDEOS_SUCCESS = 200,

  GET_COURSES_SUCCESS = 200,
  GET_CONTACTS_SUCCESS = 200,
}

export enum DeBounceTimer {
  SEARCH_DELAY = 1500,
  CLOSE_ERROR = 3000,
}

export enum ImageSize {
  ORIGINAL = 'original',
  LARGE = 'HD720',
  MIDDLE = 'VGA',
  SMALL = 'QVGA',
}
