import { isPlaninObject } from './util'

export function transfprmRequest(data: any): any {
  if (isPlaninObject(data)) {
    return JSON.stringify(data)
  }
  return data
}

export function transformResponse(data: any): any {
  if (typeof data === 'string') {
    try {
      data = JSON.parse(data)
    } catch (e) {}
  }
  return data
}
