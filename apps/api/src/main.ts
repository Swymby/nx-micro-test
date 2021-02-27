/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'

import { AppModule } from './app/app.module'

import { MicroserviceOptions, Transport } from '@nestjs/microservices'

async function bootstrap() {
    const port = process.env.PORT || 3333
    const app = await NestFactory.create(AppModule)

    app.connectMicroservice<MicroserviceOptions>({
        transport: Transport.REDIS,
        options: {
            url: 'redis://localhost:6379'
        }
    })

    const globalPrefix = 'api'
    app.setGlobalPrefix(globalPrefix)

    await app.startAllMicroservicesAsync()
    await app.listen(port, () => {
        Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix)
    })
}

bootstrap()
