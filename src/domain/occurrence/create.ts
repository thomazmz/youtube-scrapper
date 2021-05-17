import { Occurrence } from '../types'
import * as utils from '../../utils'

type Properties = {
  platformName: string,
  platformHost: string,
  searchTerm: string,
  term: string,
  link: string,
}

export const createOccurrence = (props: Properties): Occurrence => {

  const { 
    platformName,
    platformHost,
    searchTerm,
    link,
  } = props

  const uuid = utils.generateUuid()
  const term = utils.clearString(props.term)
  const searchDate = new Date()
  
  return {
    uuid,
    term,
    platformName,
    platformHost,
    link,
    searchDate,
    searchTerm,
  }
}
