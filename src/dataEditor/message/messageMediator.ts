import { RequestArgs } from './messages'

export abstract class AbstractMediator<
  Base extends Record<string, any>,
  Responses extends Record<keyof Base, any>,
> {
  /** Must be implemented by subclasses — every Base key must be handled. */
  abstract handle<K extends keyof Base>(
    ...args: RequestArgs<Base, K>
  ): Promise<Responses[K]>

  /** Optional convenience entrypoint for base routes. */
  route<K extends keyof Base>(...args: RequestArgs<Base, K>): void {
    this.handle(...args)
  }
}

export interface MessageHandler<Messages> {
  canHandle<K extends keyof Messages>(type: K): boolean
  handle<K extends keyof Messages>(type: K, data: Messages[K]): Promise<any>
}
