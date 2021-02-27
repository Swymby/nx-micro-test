/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'

import { AppModule } from './app/app.module'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)

    const globalPrefix = 'api'
    const port = process.env.PORT || 3338

    app.setGlobalPrefix(globalPrefix)
    await app.listen(port, () => {
        Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix)
    })
}

bootstrap()