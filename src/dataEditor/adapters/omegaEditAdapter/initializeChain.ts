import { OmegaEditServiceConfig } from './omegaEditAdapter'

export interface ServiceHandler<Request = any, Result = any> {
  handle(request: Request): Promise<Result>
  setNextHandler(
    handler: ServiceHandler<Request, Result>
  ): ServiceHandler<Request, Result>
}

export abstract class AbstractServiceHandler<Request, Result>
  implements ServiceHandler<Request, Result>
{
  private nextHandler: ServiceHandler | undefined = undefined
  handle(request: Request): Promise<Result> {
    return new Promise(async (res, rej) => {
      if (this.nextHandler) {
        this.nextHandler.handle(request).then()
      }
    })
  }
  setNextHandler(
    handler: ServiceHandler<Request, Result>
  ): ServiceHandler<Request, Result> {
    this.nextHandler = handler
    return handler
  }
}

class ServerStartHandler extends AbstractServiceHandler<
  OmegaEditServiceConfig,
  number
> {
  public handle(request: OmegaEditServiceConfig): Promise<number> {
    return super.handle(request)
  }
}

/*
  => (handler: ServiceHandler)

  steps = ['start', 'init']
  for( startStep in steps )
    result = handler.handle(startStep)


  
*/
