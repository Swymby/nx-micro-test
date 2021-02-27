import { Body, Controller, Inject, Post } from '@nestjs/common'

import { AppService } from './app.service'

import * as Influx from 'influx-line-protocol-parser'

import { ClientProxy } from '@nestjs/microservices'

@Controller()
export class AppController {
    constructor(private readonly appService: AppService, @Inject('DATAAPI') private readonly client: ClientProxy) { }

    @Post('data')
    acceptData(@Body() influxData: { data: string }) {
        console.log(influxData)
        const result = Influx(influxData.data)
        console.log(result)

        this.client.emit('data_l1', result)

        return 'OK'
    }
}
