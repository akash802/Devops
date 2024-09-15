import { LightningElement, wire } from 'lwc';
import calculatePrinciple from './taxCalculation';
import {data} from './taxCalculation';
import { getRecord } from "lightning/uiRecordApi";
const FIELDS = ["User.Name", "User.Profile.Name"];
import Id from '@salesforce/user/Id';
export default class NewComp extends LightningElement {

    car = [
        {
            name:'ab',
            age:10
        },
        {
            name:'abq',
            age:12
        },
        {
            name:'awb',
            age:102
        },
        {
            name:'a2b',
            age:104
        },
    ];
    constructor(){
        console.log('inside constructor');
        super();
        const pi=calculatePrinciple();
        const da=data;
        console.log('pi',pi);
        console.log('data',da);
        const selectEvent=new CustomEvent('select', {detai:'ab'})
    }
    
}