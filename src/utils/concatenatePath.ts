export const concatenatePath = (...fragments: string[]) => {
  const url =  fragments.reduce((acc, url, index) => {
    const trimmedUrl = url.replace(/^\/|\/$/g, '')
    if(index !== 0) return acc + '/' + trimmedUrl
    return trimmedUrl
  }, '')

  return decodeURI(url);
}
