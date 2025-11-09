import { EditorUI } from 'dataEditor/ui/editorUI'

type RequestArgs<R, K extends keyof R> = [R[K]] extends [never]
  ? [type: K]
  : [type: K, payload: R[K]]

interface MessageHandler<In, Out> {
  post<K extends keyof Out>(type: K, message: Out[K]): void
  onMessageRx(
    handler: <K extends keyof In>(...args: RequestArgs<In, K>) => Promise<void>
  ): () => void // unsubscribe
}

abstract class AbstractMediator<Base extends Record<string, any>> {
  /** Must be implemented by subclasses — every Base key must be handled. */
  abstract handleBase<K extends keyof Base>(
    ...args: RequestArgs<Base, K>
  ): Promise<void>

  /** Optional convenience entrypoint for base routes. */
  route<K extends keyof Base>(...args: RequestArgs<Base, K>): void {
    this.handleBase(...args)
  }
}

interface UI {
  attach(bus: MessageHandler<BaseRequests, BaseResponses>): void
  //   detach(): void
  notify<K extends keyof BaseResponses>(type: K, msg: BaseResponses[K]): void // Editor -> UI push
  //   getDisplayState(): DisplayState
}
interface BaseRequests {
  ping: never
  log: { msg: string }
}
interface BaseResponses {
  ping: never
  log: { msg: string }
}
interface ServiceRequests {
  userInfo: { id: number }
  updateUser: { id: number; name: string }
}

class BaseHandler {
  handle<K extends keyof BaseRequests>(
    type: K,
    payload: BaseRequests[K]
  ): Promise<void> {
    return new Promise((res, rej) => {})
    switch (type) {
      case 'ping':
        console.log('Ping handled locally')
        break
      case 'log':
        console.log('Log:', payload.msg)
        break
    }
  }
}

class ServiceHandler {
  handle<K extends keyof ServiceRequests>(
    type: K,
    payload: ServiceRequests[K]
  ): Promise<void> {
    return new Promise((res, rej) => {})
    switch (type) {
      case 'userInfo':
        console.log('Fetch user', payload.id)
        break
      case 'updateUser':
        const { id, name } = payload as ServiceRequests['updateUser']
        console.log(id, name)
        break
    }
  }
}

abstract class Editor {
  abstract bus: MessageHandler<BaseRequests, BaseResponses>
  abstract ui: UI
  abstract msgMediator: AbstractMediator<BaseRequests>
  open() {
    this.ui.attach(this.bus)
    this.bus.onMessageRx(this.msgMediator.handleBase)
  }
}
class CombinedMediator extends AbstractMediator<BaseRequests> {
  private base = new BaseHandler()
  private service = new ServiceHandler()

  handleBase<K extends keyof BaseRequests>(
    ...args: RequestArgs<BaseRequests, K>
  ): Promise<void> {
    const [type, data] = args as [K, BaseRequests[K]]
    return this.shouldDelegateToService(type)
      ? this.delegateToService(type, args)
      : this.base.handle(type, data)

    if (this.shouldDelegateToService(type)) {
      this.delegateToService(type, args)
    } else {
      return this.base.handle(type, data)
    }
  }

  /** Service-only requests */
  handleService<K extends keyof ServiceRequests>(
    ...args: RequestArgs<ServiceRequests, K>
  ): void {
    const [type, data] = args as [K, ServiceRequests[K]]
    this.service.handle(type, data)
  }

  /** Central decision-maker */
  private shouldDelegateToService(_type: keyof BaseRequests): boolean {
    return false
  }

  /**
   * 🚀 Cleanly typed delegator
   * Only runs when you’ve decided to forward.
   * Keeps args strongly typed without tuple issues.
   */
  private delegateToService<K extends keyof BaseRequests>(
    type: K,
    args: RequestArgs<BaseRequests, K>
  ): Promise<void> {
    return new Promise((res, rej) => {})
    // Translate if needed, or drop if not compatible.
    // For demo: convert BaseRequests to some ServiceRequests logic
    if (type === 'log') {
      this.service.handle('updateUser', { id: 1, name: 'LOG:' })
    } else {
      console.log('Cannot delegate base request:', type)
    }
  }
}

function testiimpl() {
  const cm = new CombinedMediator()
}
