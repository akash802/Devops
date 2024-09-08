import { LightningElement } from 'lwc';
import AddAccountController from '@salesforce/apex/AddAccountController.addAccount'

export default class addAccount extends LightningElement {

    accountName;
    contactFirstName = 'a';
    contactLastName = 'b';


    handleInputChange(event){
        this.accountName = event.detail.value;
    }

    handleButtonClick() {
        console.log(this.accountName);

        AddAccountController({AccountName:this.accountName, ContactFirstName: this.contactFirstName, ContactLastName: this.contactLastName})
            .then(result => {
                if (result) {
                    console.log(JSON.stringify(result));
                    result.forEach((obj) => {
                        console.log(obj.Id, " ", obj.Name);
                    });
                }
            })
            .catch(error =>{
            console.log(error);
        })

    }

}