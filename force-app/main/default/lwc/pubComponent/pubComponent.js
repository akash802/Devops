import { LightningElement, wire } from "lwc";
import { publish, MessageContext } from 'lightning/messageService';
import messagingChannel from "@salesforce/messageChannel/messagingChannel__c";

export default class PubComponent extends LightningElement {

    @wire(MessageContext) messageContext;

    handleClick() {
        console.log('inside handle click');
            let message = { message: "sampleEventFired", 
            sourceSystem: "lwc" };
            publish(this.messageContext, messagingChannel, message);
    }


}