import { Controller, Inject } from '@nestjs/common'
import { Alert, PUB_SUB } from '@simobase/interfaces'
import { EventPattern } from '@nestjs/microservices'

import { PubSub } from 'graphql-subscriptions'

@Controller()
export class AppController {
    constructor(@Inject(PUB_SUB) private readonly pubSub: PubSub) { }

    @EventPattern('data_l1')
    getValue(data: { timestamp: number, measurement: string, fields: { [key: string]: number }[], tags: { [key: string]: string }[] }) {
        console.log(data)
        this.pubSub.publish('value', { value: { value: data.fields[0]['value'] } })
    }

    @EventPattern('alert_l1')
    getAlert(alert: Alert) {
        this.pubSub.publish('alert', { alert })
    }
}
