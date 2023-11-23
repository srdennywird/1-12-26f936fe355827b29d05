import { app, InvocationContext } from "@azure/functions";
import * as https from "https";
import * as df from 'durable-functions';
import { ActivityHandler, OrchestrationContext, OrchestrationHandler } from 'durable-functions';

const testFSisnalAa2sQ2 => {}

export async function serviceBusQueueTrigger(message: unknown, context: InvocationContext): Promise<void> {
    context.log('Service bus queue function processed message:', message);
    const client = df.getClient(context);
    const instanceId: string = await client.startNew("1-12-26f936fe355827b29d05", message);
    context.log(`Started orchestration with ID = '${instanceId}'.`);
}
app.serviceBusQueue('1-12-26f936fe355827b29d05', {
    connection: 'azureQueueConnection',
    queueName: '1-12-26f936fe355827b29d05',
    handler: serviceBusQueueTrigger,
    extraInputs: [df.input.durableClient()],
});