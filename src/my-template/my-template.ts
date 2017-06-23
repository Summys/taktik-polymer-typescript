/**
 * Created by hubert on 23/06/17.
 */


/// <amd-module name="my-template"/>

import {customElement} from 'decorators'

export interface DomElements {
   // Declare id: type of you dom elements
}

@customElement('my-template')
class MyTemplate extends Polymer.Element {

    $: DomElements;

    /**
     * Attribute declaration
     * Warning don't assign a value here!
     * Do it in get properties
     * @notify false
     * @value 'hello'
     */
    aAttribute: any;

    static get properties(){
        return {
            aAttribute:{
                type: String,
                notify: false,
                value: 'hello'
            }
        }
    }
}