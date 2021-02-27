import { Controller, Inject } from '@nestjs/common'

import { AppService } from './app.service'

import { Alert } from '@simobase/interfaces'

import { EventPattern, ClientProxy } from '@nestjs/microservices'

@Controller()
export class AppController {
    constructor(private readonly appService: AppService, @Inject('ALERTER') private readonly client: ClientProxy) { }

    @EventPattern('data_l1')
    createAlert(data: { timestamp: number, measurement: string, fields: { [key: string]: number }[], tags: { [key: string]: string }[] }) {
        if (data.fields[0]['value'] > 0.3) {
            this.client.emit<string, Alert>('alert_l1', { id: data.tags[0]['id'], level: 'mid', value: data.fields[0]['value'] })
        }
    }
}
