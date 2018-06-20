"use strict";

import template from './template.hbs';

import Component from '../component/component';

import PhoneViewer from '../phone-viewer/PhoneViewer';

export default class ShoppingCart extends Component{

    constructor( options ){

        super(options);

        this._render();

        this.on('click', this._phoneAddedToCart.bind(this), '[data-element="button-add-basket"]');

    }//constructor

    _render(){

        this._element.innerHTML = template({
           'phones': PhoneViewer.phonesArray
        });

    }//_render


}//class ShoppingCart
