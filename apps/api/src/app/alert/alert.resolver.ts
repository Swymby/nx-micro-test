import { Inject } from '@nestjs/common'
import { Resolver, Subscription } from '@nestjs/graphql'

import { PubSub } from 'graphql-subscriptions'
import { PUB_SUB } from '@simobase/interfaces'


@Resolver('Message')
export class AlertResolver {
    constructor(@Inject(PUB_SUB) private readonly pubSub: PubSub) { }

    @Subscription()
    alert() {
        console.log('alert')
        return this.pubSub.asyncIterator('alert')
    }

    @Subscription()
    value() {
        console.log('value')
        return this.pubSub.asyncIterator('value')
    }
}
