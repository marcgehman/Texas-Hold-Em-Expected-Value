class RadioButton extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.setAttribute('role', 'radio-button');
      this.setAttribute('aria-checked', false);
    //  this.setAttribute('type', 'none');
    }
  }

  window.customElements.define('radio-button', RadioButton);