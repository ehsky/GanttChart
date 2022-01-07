import { LightningElement, api } from 'lwc';

export default class Counter extends LightningElement {
    _qty = 0;
    _qtyStart = 0;
    displayQty = '';
    @api min;
    @api max;
    @api messageWhenBreachedMax = 'The number is too high.';
    errorMessage = '';

    @api
    get qtyStart() {
        return this._qtyStart;
    }
    set qtyStart(value) {
        this.qty = value;
    }

    get qty() {
        return this._qty;
    }
    set qty(value) {
        this._qty = parseInt(value, 10);
    }

    setDecrementCounter(event) {
        if (this.qty === 0) {
            this.qty = 0;
        } else {
            this.qty = this.qty - 1;
        }
        this.isValid();
        let quantity = this.qty.toString();
        this.displayQty = quantity + ' ' + this.qtyMeasure;
        const decrementEvent = new CustomEvent('decrement', {
            detail: this.qty
        });
        this.dispatchEvent(decrementEvent);
    }

    setIncrementCounter(event) {
        if (this.isValid()) {
            this.qty = this.qty + 1;
        }
        let quantity = this.qty.toString();
        this.displayQty = quantity + ' ' + this.qtyMeasure;
        this.isValid();
        const incrementEvent = new CustomEvent('increment', {
            detail: this.qty
        });
        this.dispatchEvent(incrementEvent);
    }

    handleQuantityChange(event) {
        const input = this.template.querySelector('input');
        console.debug('num ' + input.dataset.number);
        console.debug('event ' + JSON.stringify(event.currentTarget.dataset));
        if (this.isValid()) {
            this.qty = input.dataset.number;
        }
    }

    isValid() {
        let valid = false;
        const _qty = parseInt(this.qty, 10);
        if (_qty >= parseInt(this?.max, 10)) {
            this.toggleErrorMessage(this.messageWhenBreachedMax);
        } else {
            valid = true;
            this.toggleErrorMessage();
        }
        return valid;
    }

    toggleErrorMessage(message = '') {
        const form = this.template.querySelector('.slds-form-element');
        const errorElm = this.template.querySelector(
            '.slds-form-element__help'
        );
        if (message) {
            form.classList.add('slds-has-error');
            errorElm.classList.remove('slds-hide');
            this.errorMessage = message;
        } else {
            errorElm.classList.add('slds-hide');
            form.classList.remove('slds-has-error');
        }
    }

    @api
    get qtyMeasure() {
        return this._qtyMeasure;
    }

    set qtyMeasure(value) {
        if (value) {
            this._qtyMeasure = value;
            let qty = this.qty.toString();
            this.displayQty = qty + ' ' + this.qtyMeasure;
        } else {
            this.displayQty = '';
        }
    }
}
