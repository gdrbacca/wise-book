export const fetcher = async ([url, params]: [
  string,
  { param: string; value: string }[],
]) => {
  const paramsConcat = params
    .map((param) => {
      return String(param.param + '=' + param.value)
    })
    .join('&')
  const res = await fetch(`${url}?${paramsConcat}`)
  return res.json()
}
