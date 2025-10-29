import {
  ServiceRequestKeys,
  RequestMap,
  ResponseMap,
} from 'dataEditor/service/requestHandler'

export type OmegaEditRequests = {
  Profile: { offset: number; length: number }
  DestroySession: { id: string }
}
export type OmegaEditResponses = {
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
