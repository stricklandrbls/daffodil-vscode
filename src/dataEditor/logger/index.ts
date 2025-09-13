import { createSimpleFileLogger, Logger, setLogger } from '@omega-edit/client'
import { APP_DATA_PATH } from 'dataEditor/config'

let ManagerLogger: Logger | undefined = undefined

export function initLogger() {
  if (!ManagerLogger) {
    ManagerLogger = createSimpleFileLogger(
      APP_DATA_PATH + '/dataEditorMgr.log',
      'debug'
    )
    setLogger(ManagerLogger)
  }
}
