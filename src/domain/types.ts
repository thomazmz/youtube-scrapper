export  type Identifiable = {
  uuid: string
}

export type Occurrence = Identifiable & {
  uuid: string,
  term: string,
  link: string,
  termStatus: TermStatus
  searchDate: Date,
  searchTerm: string,
  platformName: string,
  platformHost: string,
}

export type TermStatus =
  | 'owned'
  | 'licensed'
  | 'full violation'
  | 'partial violation'
  | 'uncategorized'