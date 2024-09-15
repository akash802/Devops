import { LightningElement, wire, track } from "lwc";
import { subscribe, unsubscribe, MessageContext } from 'lightning/messageService';
import messagingChannel from "@salesforce/messageChannel/messagingChannel__c";

export default class SubComponent extends LightningElement {
	@track message;

  @wire(MessageContext) messageContext;
  subscription = null;

	connectedCallback() {
		this.handleSubscribe();
	}

	handleSubscribe() {
		if (this.subscription) {
			return;
		}
		this.subscription = subscribe(this.messageContext, messagingChannel, (message) => {
			console.log(message.message);
			console.log(message.sourceSystem);
			this.message = message.message;
			alert('Event Captured!');
		});
	}
}