import { LightningElement, api } from 'lwc';

export default class Childcmp extends LightningElement {

    @api message;
    name;
    @api handleclickchild(name){
        this.name = name;
        console.log('handleclickchild', name);
        console.log('message',this.message );
        this.message[name] = name ;
        console.log('message',this.message );
    }

    handleClickChildButton(){
        //cusEvent = new CustomEvent('callparent');
        //this.dispatchEvent(cusEvent);
        this.dispatchEvent(new CustomEvent('callparent',{bubbles:true}));
    }
}