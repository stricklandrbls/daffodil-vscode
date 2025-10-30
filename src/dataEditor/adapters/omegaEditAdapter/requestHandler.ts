import {
  ServiceRequestKeys,
  RequestMap,
  ResponseMap,
  ServiceRequestTypes,
  ServiceResponseTypes,
} from 'dataEditor/service/requestHandler'

export interface OmegaEditRequests extends ServiceRequestTypes {
  Profile: { offset: number; length: number }
  DestroySession: { id: string }
}
export interface OmegaEditResponses extends ServiceResponseTypes {
  Profile: { request: { offset: number }; response: { data: number[] } }
  DestroySession: never
}

export function handleRequest<
  K extends ServiceRequestKeys | keyof OmegaEditRequests,
>(
  type: K,
  request: RequestMap<OmegaEditRequests>[K]
): K extends ServiceRequestKeys | keyof OmegaEditResponses
  ? Promise<ResponseMap<OmegaEditResponses>[K]>
  : never {
  throw new Error('Method not implemented.')
}
