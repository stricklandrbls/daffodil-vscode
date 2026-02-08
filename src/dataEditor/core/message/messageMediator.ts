import { Extension } from 'vscode'
import { MessageBus } from './messageBus'
import {
  ExtensionMsgCommands,
  ExtensionMsgResponses,
  RequestArgs,
} from './messages'

export abstract class AbstractMediator<
  Base extends { [k in keyof ExtensionMsgCommands]: any },
  Responses extends { [K in keyof Base]: any },
> {
  /** Must be implemented by subclasses — every Base key must be handled. */
  abstract process<K extends keyof Base>(...args: RequestArgs<Base, K>): any
  abstract onProcessed<K extends keyof Base>(
    type: K,
    data: Responses[K] extends any ? Responses[K] : never
  ): any
  /** Optional convenience entrypoint for base routes. */
  route<K extends keyof Base>(...args: RequestArgs<Base, K>): void {
    this.process(...args)
  }
}

export interface MessageHandler<Messages> {
  canHandle<K extends keyof Messages>(type: K): boolean
  handle<K extends keyof Messages>(type: K, data: Messages[K]): Promise<any>
}
