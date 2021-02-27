import { Module } from '@nestjs/common'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { GraphQLModule } from '@nestjs/graphql'
import { AlertResolver } from './alert/alert.resolver'
import { PubSubModule } from './pubsub/pubsub.module'

@Module({
    imports: [
        PubSubModule,
        GraphQLModule.forRoot({
            installSubscriptionHandlers: true,
            typePaths: ['./apps/api/src/app/graphql/**/*.graphql']
        })
    ],
    controllers: [AppController],
    providers: [AppService, AlertResolver],
})
export class AppModule { }
