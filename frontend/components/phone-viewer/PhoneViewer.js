"use strict";

import template from './template.hbs';

import Component from '../component/component';

export default class PhoneViewer extends Component{

    constructor( options ){
        super(options);
    }//constructor

    setPhone( phone ){

        this._phone = phone;
        this._render();

    }//setPhone

    _render(){

        this._element.innerHTML = template({
            'phone': this._phone
        });

        this.on('click' , this._goBack.bind(this) , '[data-element="button-back"]' );
        this.on('addPhoneToCart', this._addPhoneToCart.bind(this), '[data-element="button-add-basket"]');

    }//_render

    _goBack( ){

        this._phone = null;

        let backEvent = new CustomEvent('moveBack');
        this._element.dispatchEvent(backEvent);

    }//_goBack

    _addPhoneToCart( ){

        let addToCartEvent = new CustomEvent('addToCart', {
            detail: { phoneID : this._phone.id }
        });

        this._element.dispatchEvent(addToCartEvent);

    }//_addPhoneToCart

}