import * as vscode from 'vscode'
import { DataEditorConfig, DataEditorConfigProvider } from 'dataEditor/config'
import { MessageBus } from 'dataEditor/message/messageBus'
import { Notification } from 'dataEditor/message/messages'
import { UiToEditor, EditorToUi } from 'dataEditor/message/messages'
import { DataEditorService } from 'dataEditor/service/editorService'
import { EditorUI } from 'dataEditor/ui/editorUI'

export interface DataEditorDeps {
  configProvider: DataEditorConfigProvider
  service: DataEditorService
  ui: EditorUI
  bus: MessageBus<UiToEditor, EditorToUi>
}

export class DataEditor {
  private unsub?: () => void
  private disposed = false
  constructor(
    private readonly opts: {
      config: DataEditorConfig
      service: DataEditorService
      ui: EditorUI
      bus: MessageBus<UiToEditor, EditorToUi>
    }
  ) {}
  async open(): Promise<void> {
    const { config, service, ui, bus } = this.opts
    let statusBarIntervalId: NodeJS.Timeout | undefined = undefined
    const statusBarItem = vscode.window.createStatusBarItem(
      vscode.StatusBarAlignment.Left
    )
    service.on('status', (msg) => {
      clearInterval(statusBarIntervalId)

      statusBarIntervalId = showServiceStatus(msg, statusBarItem)
    })
    service.on('connected', (info) => {
      clearInterval(statusBarIntervalId)
    })
    service.on('error', (err) => {
      clearInterval(statusBarIntervalId)
    })
    await service.connect()

    service.onHeartbeat((ts) => {
      this.toUI({ type: 'Notify', kind: Notification.Heartbeat, payload: ts })
    })

    ui.attach(bus)
    this.unsub = bus.onMessage((m) => this.handleUiMessage(m))

    this.toUI({ type: 'Notify', kind: Notification.ServiceConnected })
  }

  async close(): Promise<void> {
    if (this.disposed) return
    this.disposed = true
    this.unsub?.()
    await this.opts.service.disconnect()
  }

  private async handleUiMessage(msg: UiToEditor) {
    try{
      switch(msg.type){
        
      }
    }
    // try {
    //   switch (msg.type) {
    //     case 'OpenFile': {
    //       // optional: reopen with different file
    //       // (you could inject a reconfigurable adapter or recreate service)
    //       this.toUI({ type: 'Ack' })
    //       break
    //     }
    //     case 'RequestBytes': {
    //       const data = await this.d.service.read(msg.offset, msg.length)
    //       this.toUI({ type: 'Bytes', offset: msg.offset, data })
    //       break
    //     }
    //     case 'WriteBytes': {
    //       await this.d.service.write(msg.offset, msg.data)
    //       this.toUI({
    //         type: 'Notify',
    //         kind: Notification.DataUpdated,
    //         payload: { offset: msg.offset, len: msg.data.length },
    //       })
    //       break
    //     }
    //     case 'Ping': {
    //       this.toUI({ type: 'Ack' })
    //       break
    //     }
    //   }
    // } catch (err) {
    //   this.toUI({
    //     type: 'Error',
    //     message: (err as Error)?.message ?? 'Unknown error',
    //     details: err,
    //   })
    // }
  }

  private toUI(message: EditorToUi) {
    this.opts.ui.notify(message)
  }
}

function showServiceStatus(
  msg: string,
  statusBarItem: vscode.StatusBarItem
): NodeJS.Timeout {
  statusBarItem.text = msg
  statusBarItem.show()
  let animationFrame = 0
  const animationInterval = 400 // ms per frame
  const animationFrames = ['', '.', '..', '...']
  const animationIntervalId = setInterval(() => {
    statusBarItem.text = `${msg} ${
      animationFrames[++animationFrame % animationFrames.length]
    }`
  }, animationInterval)
  return animationIntervalId
}
