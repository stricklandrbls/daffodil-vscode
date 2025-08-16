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
import { DataEditorCommands, DataEditorManager } from './manager'
import { extractConfigurationVariables } from './config'
import { getServerInterface } from './include/server'

let Manager: DataEditorManager

export function activate(ctx: vscode.ExtensionContext) {
  if (!Manager) {
    Manager = new DataEditorManager(
      ctx,
      getServerInterface(),
      extractConfigurationVariables()
    )
    vscode.commands.registerCommand(
      'extension.data.edit.standalone',
      async (args: DataEditorCommands['standalone']['args']) => {
        const init = await Manager.getInitializer('standalone')

        const editor = await init.run(() => {
          return Manager.InitEditorClient()
        }, args)
        init.onComplete(editor)
        return editor
      }
    )
    vscode.commands.registerCommand(
      'extension.data.edit.dfdl-editor',
      async (args: DataEditorCommands['dfdl']['args']) => {
        const init = Manager.getInitializer('dfdl')
      }
    )
  }

  // registerAllEditorCommands(ctx)
  // ctx.subscriptions.push(OmegaEditServerManager.disposeAllServers())
}

// const omegaEditPort = extConfig.port
// // only start up the server if one is not already running
// if (!(await checkServerListening(omegaEditPort, OMEGA_EDIT_HOST))) {
//   // await setupLogging(launchConfigVars)
//   await serverStart()
//   client = await getClient(omegaEditPort, OMEGA_EDIT_HOST)
//   assert(
//     await checkServerListening(omegaEditPort, OMEGA_EDIT_HOST),
//     'server not listening'
//   )
// }
