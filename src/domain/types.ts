export  type Identifiable = {
  uuid: string
}

export type Occurrence = Identifiable & {
  uuid: string,
  term: string,
  link: string,
  searchDate: Date,
  searchTerm: string,
  platformName: string,
  platformHost: string,
}