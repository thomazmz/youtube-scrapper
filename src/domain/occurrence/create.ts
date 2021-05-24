import { Occurrence } from '../types'
import * as utils from '../../utils'
import { verify as verifyTerm } from '../term'

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
  const term = utils.align(props.term)
  const termStatus = verifyTerm(term)
  const searchDate = new Date()
  
  return {
    uuid,
    term,
    termStatus,
    platformName,
    platformHost,
    link,
    searchDate,
    searchTerm,
  }
}
