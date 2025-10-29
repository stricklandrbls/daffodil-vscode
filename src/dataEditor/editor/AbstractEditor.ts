import { DataEditorConfig, DataEditorConfigProvider } from 'dataEditor/config'
import { MessageBus } from 'dataEditor/message/messageBus'
import { UiToEditor, EditorToUi } from 'dataEditor/message/messages'
import { DataEditorService } from 'dataEditor/service/editorService'
import { EditorUI } from 'dataEditor/ui/editorUI'

export interface DataEditorDeps {
  configProvider: DataEditorConfigProvider
  service: DataEditorService
  ui: EditorUI
  bus: MessageBus<UiToEditor, EditorToUi>
}

export abstract class IDataEditor {
  constructor(
    private readonly opts: {
      config: DataEditorConfig
      service: DataEditorService
      ui: EditorUI
      bus: MessageBus<UiToEditor, EditorToUi>
    }
  ) {}
  async open(): Promise<void> {
    const { service, ui, bus } = this.opts
    ui.attach(bus)
    bus.onMessage((msg) => this.messageHandleTemplate(msg))
    // this.tbus.onMessage(this.uiMsgHandler.handle)
  }
  async close(): Promise<void> {
    throw ''
  }
  private async messageHandleTemplate(msg: UiToEditor) {}

  protected abstract processUICommand(cmd: UiToEditor)
  protected abstract uiMsgHandler: BaseHandler
  protected tbus: TestBus<ToEditor> = {
    onMessage: function <K extends keyof ToEditor>(
      handler: (type: K, msg: ToEditor[K]) => any
    ) {
      throw new Error('Function not implemented.')
    },
  }
}

interface TestBus<M extends ToEditor> {
  onMessage<K extends keyof M>(handler: (type: K, msg: M[K]) => any)
}
export interface ToEditor {
  bytes: { offset: number; length: number }
  reset: { id: string }
  ping: never
}
interface ToEditorExt extends ToEditor {
  debug: { package: { count: number; data: Uint8Array } }
}
interface UiMsgHandler<M extends UiToEditor> {
  handle<K extends keyof M>(msg: M[K]): any
}

export abstract class BaseHandler implements UiMsgHandler<UiToEditor> {
  abstract handle<K extends keyof UiToEditor>(msg: UiToEditor[K])
}
class ExtendedHandler extends BaseHandler {
  handle<K extends keyof ToEditorExt>(type: K, msg: ToEditorExt[K]) {
    throw new Error('Method not implemented.')
  }
}

function useHandler(handler: BaseHandler) {}
useHandler(new ExtendedHandler())
