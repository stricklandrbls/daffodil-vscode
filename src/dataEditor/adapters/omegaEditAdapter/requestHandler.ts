import {
  ServiceRequestTypes,
  ServiceResponseTypes,
  IServiceRequestHandler,
} from 'dataEditor/service/requestHandler'

export interface OmegaEditRequests extends ServiceRequestTypes {
  Profile: { offset: number; length: number }
  DestroySession: { id: string }
}
export interface OmegaEditResponses extends ServiceResponseTypes {
  Profile: { request: { offset: number }; response: { data: number[] } }
  DestroySession: never
}
