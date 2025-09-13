import * as assert from 'assert'
import * as hb from '../include/server/heartbeat'
import { IHeartbeatReceiver, IServerHeartbeat } from '@omega-edit/client'
class MockHeartbeatRxer implements IHeartbeatReceiver {
  readonly id: string = 'mockRxer'
  constructor(public process: (heartbeat: IServerHeartbeat) => any) {}
}
describe('Data Editor Extension Heartbeat Behavior', () => {
  it('Should allow registration of heartbeat receivers', () => {})
})
