import { MessageBus } from 'dataEditor/message/messageBus'
import { UiToEditor, EditorToUi } from 'dataEditor/message/messages'
import { DataEditorService } from 'dataEditor/service/editorService'
import { EditorUI } from 'dataEditor/ui/editorUI'
import { BaseHandler, IDataEditor } from './AbstractEditor'
import { EditorType } from '.'
import { DataEditorArgMap } from './editorRegistry'

export class StandaloneDataEditor extends IDataEditor {
  protected processUICommand(cmd: UiToEditor) {
    throw new Error('Method not implemented.')
  }
  constructor(
    config: DataEditorArgMap[EditorType.Standalone],
    service: DataEditorService,
    ui: EditorUI,
    bus: MessageBus<UiToEditor, EditorToUi>
  ) {
    super({
      config,
      service,
      ui,
      bus,
    })
  }
  open(): Promise<void> {
    throw new Error('Method not implemented.')
  }
  close(): Promise<void> {
    throw new Error('Method not implemented.')
  }
}

class StandaloneMessageHandlers extends BaseHandler {
  handle<K extends keyof UiToEditor>(msg: UiToEditor[K]) {}
}
