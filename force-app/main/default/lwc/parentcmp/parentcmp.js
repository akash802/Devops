import { LightningElement } from 'lwc';

export default class Parentcmp extends LightningElement {

    message = {
        name:"akashd",
        age:"10"
    }

    handleClick(){
        console.log('handle click');
        this.refs.childRef.handleclickchild('onkarsingh');
    }

    handleParentCall(){
        console.log('inside handle parent call');
    }
}