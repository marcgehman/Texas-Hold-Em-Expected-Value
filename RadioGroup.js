
'use strict';

class RadioGroup extends HTMLElement {

  constructor() {
    super();
    this.addEventListener('DOMContentLoaded',this.handleLoaded.bind(this));
  }
  
  connectedCallback() {
    this.setAttribute('role', 'radio-group');
    this.radios = this.getElementsByTagName('radio-button');
  //  this.setAttribute('selected', )
    // Setup initial state
    if (this.hasAttribute('selected')){
        let selected = this.getAttribute('selected');
        this._selected = selected;
        this.radios[selected].setAttribute('aria-checked', true);

    } else {
        this._selected = 0;
    }

    this.addEventListener('click', this.handleClick.bind(this));
  
  }
 
  handleClick(e){
      const idx = Array.from(this.radios).indexOf(e.target);
      if (idx === -1){
          return;
      }
      this.selected = idx;
     
  }

  handleLoaded(e){
    this.radios = this.getElementsByTagName('radio-button');
  
  }

  set selected(idx){
      if(isFinite(this.selected)){
          // Set old button to tabindex -1
          let previousSelected = this.radios[this.selected];
          previousSelected.setAttribute('aria-checked', false);

      }
      
        // Set the new button to tabindex 0 and focus it 
        let newSelected = this.radios[idx];
        newSelected.focus();
        newSelected.setAttribute('aria-checked', true);
        //this.setAttribute('selected', idx);
        
        this.setAttribute('selected', String(newSelected.className));
        this._selected = idx;
       
    }

    get selected(){
          return this._selected;
      }
  }

  window.customElements.define('radio-group', RadioGroup);