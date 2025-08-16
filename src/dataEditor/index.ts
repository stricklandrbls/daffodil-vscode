/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
export * from './dataEditorClient'

import * as vscode from 'vscode'
import * as editor from './editor'

let Manager: DataEditorManager
const DataEditorCommands = {
  standalone: 'extension.data.editor.standalone',
  debugger: 'extension.data.editor.dfdl',
}

function RegisterEditorCommands(ctx: vscode.ExtensionContext) {
  ctx.subscriptions.push(vscode.commands.registerCommand())
}

export function activate(ctx: vscode.ExtensionContext) {
  if (Manager.isInitialized()) Manager = new DataEditorManager(ctx)

  // registerAllEditorCommands(ctx)
  // ctx.subscriptions.push(OmegaEditServerManager.disposeAllServers())
}

class DataEditorManager implements vscode.Disposable {
  private editors: editor.DataEditor[] = []
  private disposables: vscode.Disposable[] = []
  private initialized: boolean = false

  constructor(readonly ctx: vscode.ExtensionContext) {
    ctx.subscriptions.push(this)

    RegisterEditor(DefaultEditorCommand)
    this.initialized = true
  }
  dispose(): void {
    this.editors = []
    this.disposables.forEach((item) => {
      item.dispose()
    })
  }

  isInitialized(): boolean {
    return this.initialized
  }

  async Run<D extends editor.DataEditor>(
    initializer: editor.DataEditorInitializer<D>
  ): Promise<void> {
    return new Promise(async (resolve, reject) => {
      const editor = await initializer.Initialize(this.ctx)
      this.editors.push(editor)
      resolve()
    })
  }
}
