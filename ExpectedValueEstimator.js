
'use strict';

class ExpectedValueEstimator extends HTMLElement {

  constructor() {
    super();    
    this.expectedValueChart = [
        ["AAs",	2.71,	2.82,	2.49,	2.52,	2.74,	2.78,	2.80,	2.74,	2.88,	2.96],
        ["AA",	2.71,	2.82,	2.49,	2.52,	2.74,	2.78,	2.80,	2.74,	2.88,	2.96],
        ["KKs",	1.89,	1.73,	1.72,	1.69,	1.58,	1.91,	2.02,	1.95,	1.95,	2.10],
        ["KK",	1.89,	1.73,	1.72,	1.69,	1.58,	1.91,	2.02,	1.95,	1.95,	2.10],
        ["QQs",	1.89,	1.73,	1.72,	1.69,	1.58,	1.91,	2.02,	1.95,	1.95,	2.10],
        ["QQ",	1.19,	1.23,	1.30,	1.19,	1.20,	1.22,	1.24,	1.20,	1.49,	1.36],
        ["JJs",	0.68,	0.63,	0.84,	0.66,	0.85,	0.76,	0.90,	1.02,	1.01,	0.87],
        ["JJ",	0.68,	0.63,	0.84,	0.66,	0.85,	0.76,	0.90,	1.02,	1.01,	0.87],
        ["TTs",	0.37,	0.35,	0.45,	0.52,	0.43,	0.42,	0.45,	0.54,	0.50,	0.56],
        ["TT",	0.37,	0.35,	0.45,	0.52,	0.43,	0.42,	0.45,	0.54,	0.50,	0.56],
        ["99s",	0.17,	0.16,	0.33,	0.14,	0.31,	0.34,	0.26,	0.26,	0.26,	0.23],
        ["99",	0.17,	0.16,	0.33,	0.14,	0.31,	0.34,	0.26,	0.26,	0.26,	0.23],
        ["88s",	0.11,	0.08,	0.20,	0.07,	0.15,	0.19,	0.16,	0.26,	0.21,	0.26],
        ["88",	0.11,	0.08,	0.20,	0.07,	0.15,	0.19,	0.16,	0.26,	0.21,	0.26],
        ["77s",	-0.07,	-0.01,	0.04,	0.11,	0.08,	0.15,	0.09,	0.19,	0.17,	0.15],
        ["77",	-0.07,	-0.01,	0.04,	0.11,	0.08,	0.15,	0.09,	0.19,	0.17,	0.15],
        ["66s",	-0.01,	-0.07,	-0.01,	0.08,	0.21,	0.14,	0.05,	-0.02,	0.06,	0.14],
        ["66",	-0.01,	-0.07,	-0.01,	0.08,	0.21,	0.14,	0.05,	-0.02,	0.06,	0.14],
        ["55s",	-0.02,	-0.11,	0.02,	-0.01,	-0.04,	-0.00,	-0.00,	-0.04,	-0.00,	0.08],
        ["55",	-0.02,	-0.11,	0.02,	-0.01,	-0.04,	-0.00,	-0.00,	-0.04,	-0.00,	0.08],
        ["44s",	0.05,	-0.10,	-0.09,	-0.06,	-0.01,	0.11,	0.02,	0.02,	-0.06,	-0.04],
        ["44",	0.05,	-0.10,	-0.09,	-0.06,	-0.01,	0.11,	0.02,	0.02,	-0.06,	-0.04],
        ["33s",	-0.10,	-0.16,	-0.06,	-0.03,	-0.02,	-0.04,	-0.00,	0.07,	-0.04,	0.04],
        ["33",	-0.10,	-0.16,	-0.06,	-0.03,	-0.02,	-0.04,	-0.00,	0.07,	-0.04,	0.04],
        ["22s",	-0.11,	-0.10,	-0.11,	-0.02,	-0.05,	0.03,	0.03,	-0.06,	-0.01,	-0.12],
        ["22",	-0.11,	-0.10,	-0.11,	-0.02,	-0.05,	0.03,	0.03,	-0.06,	-0.01,	-0.12],
        ["AKs",	0.68,	0.79,	0.78,	0.92,	0.85,	0.83,	0.87,	0.82,	1.03,	1.00],
        ["AK",	0.42,	0.42,	0.47,	0.41,	0.55,	0.51,	0.50,	0.56,	0.59,	0.62],
        ["AQs",	0.59,	0.51,	0.51,	0.59,	0.54,	0.49,	0.70,	0.66,	0.66,	0.64],
        ["AQ",	0.18,	0.16,	0.20,	0.30,	0.21,	0.32,	0.26,	0.33,	0.31,	0.37],
        ["AJs",	0.43,	0.27,	0.28,	0.41,	0.40,	0.44,	0.50,	0.52,	0.56,	0.49],
        ["AJ",	0.03,	0.11,	0.03,	0.10,	0.10,	0.07,	0.16,	0.09,	0.20,	0.15],
        ["ATs",	0.20,	0.24,	0.28,	0.23,	0.23,	0.40,	0.28,	0.26,	0.31,	0.47],
        ["AT",	-0.08,	-0.04,	-0.07,	-0.02,	0.01,	0.01,	-0.01,	0.03,	-0.01,	0.06],
        ["A9s",	0.17,	0.05,	0.24,	0.07,	0.14,	0.12,	0.21,	0.20,	0.20,	0.20],
        ["A9",	-0.21,	-0.18,	-0.08,	-0.11,	-0.13,	-0.07,	-0.09,	-0.12,	-0.10,	-0.03],
        ["A8s",	-0.02,	-0.13,	0.12,	0.03,	0.18,	0.07,	0.08,	0.03,	0.11,	0.15],
        ["A8",	-0.21,	-0.28,	-0.18,	-0.08,	-0.10,	-0.09,	-0.08,	-0.17,	-0.06,	-0.09],
        ["A7s",	-0.06,	-0.05,	0.03,	0.13,	-0.01,	0.09,	0.27,	0.10,	0.01,	0.07],
        ["A7",	-0.22,	-0.26,	-0.14,	-0.12,	-0.11,	-0.12,	-0.15,	-0.10,	-0.10,	-0.05],
        ["A6s",	0.01,	-0.15,	-0.14,	0.05,	-0.04,	0.01,	0.06,	-0.04,	0.01,	0.01],
        ["A6",	-0.29,	-0.27,	-0.18,	-0.15,	-0.12,	-0.11,	-0.13,	-0.10,	-0.13,	-0.10],
        ["A5s",	0.13,	0.02,	0.09,	0.06,	-0.02,	0.08,	0.02,	0.02,	0.19,	0.18],
        ["A5",	-0.25,	-0.30,	-0.12,	-0.15,	-0.12,	-0.15,	-0.12,	-0.11,	-0.08,	-0.12],
        ["A4s",	-0.03,	-0.06,	0.03,	0.04,	0.06,	0.05,	0.19,	0.03,	0.18,	0.08],
        ["A4",	-0.26,	-0.30,	-0.12,	-0.11,	-0.15,	-0.13,	-0.08,	-0.10,	-0.10,	-0.10],
        ["A3s",	-0.12,	0.02,	-0.06,	0.07,	0.10,	-0.08,	-0.08,	0.12,	0.01,	0.04],
        ["A3",	-0.28,	-0.34,	-0.17,	-0.11,	-0.12,	-0.12,	-0.09,	-0.11,	-0.12,	-0.10],
        ["A2s",	-0.12,	-0.14,	-0.01,	-0.03,	0.06,	0.03,	0.03,	-0.10,	0.00,	0.12],
        ["A2",	-0.28,	-0.35,	-0.16,	-0.14,	-0.15,	-0.15,	-0.13,	-0.09,	-0.06,	-0.14],
        ["KQs",	0.38,	0.18,	0.40,	0.31,	0.35,	0.28,	0.41,	0.45,	0.39,	0.42],
        ["KQ",	0.02,	-0.01,	0.05,	0.16,	0.08,	0.09,	0.13,	0.15,	0.15,	0.17],
        ["KJs",	0.17,	0.12,	0.15,	0.28,	0.32,	0.22,	0.23,	0.28,	0.28,	0.40],
        ["KJ",	-0.08,	-0.16,	-0.02,	-0.02,	-0.03,	-0.04,	0.05,	0.01,	0.08,	0.06],
        ["KTs",	0.16,	0.02,	0.11,	0.20,	0.16,	0.10,	0.27,	0.07,	0.09,	0.30],
        ["KT",	-0.20,	-0.16,	-0.08,	-0.09,	-0.05,	-0.06,	-0.05,	-0.04,	0.01,	0.07],
        ["K9s",	-0.07,	-0.03,	-0.05,	0.06,	0.15,	0.04,	0.02,	0.07,	0.10,	0.03],
        ["K9",	-0.26,	-0.21,	-0.12,	-0.10,	-0.09,	-0.11,	-0.09,	-0.10,	-0.06,	-0.05],
        ["K8s",	-0.09,	-0.11,	-0.03,	-0.01,	-0.03,	0.01,	-0.10,	0.08,	0.00,	0.00],
        ["K8",	-0.27,	-0.28,	-0.13,	-0.09,	-0.09,	-0.06,	-0.08,	-0.07,	-0.06,	-0.08],
        ["K7s",	-0.07,	-0.12,	-0.08,	-0.03,	0.14,	-0.03,	-0.04,	-0.03,	0.04,	-0.01],
        ["K7",	-0.26,	-0.31,	-0.13,	-0.10,	-0.07,	-0.07,	-0.09,	-0.06,	-0.05,	-0.04],
        ["K6s",	-0.16,	-0.16,	-0.10,	0.02,	-0.03,	-0.08,	-0.06,	0.07,	0.01,	-0.02],
        ["K6",	-0.26,	-0.32,	-0.10,	-0.05,	-0.07,	-0.06,	-0.07,	-0.06,	-0.07,	-0.07]
    
    ];

  }
  
  connectedCallback() {
    this.setAttribute('role', 'expected-value-estimator');
    this.card1 = document.getElementById('card1');
    this.card2 = document.getElementById('card2');
    this.position = this.getElementsByClassName('position');
    this.expectedValue = this.getElementsByClassName('expected-value');

    this.addEventListener('click', this.handleClick.bind(this));
  
  }
 


  // String(card1.rank) + String(card2.rank)
  // If card1.suit == card2.suit.... append "s"
  // Search 0th element of expectedValueChart two dimensional array
  handleClick(e){
    var target = e.target;
    //alert(target.tagName);
    if(target.tagName === "RADIO-BUTTON"){
      this.suit1 = document.getElementById('suit1').getAttribute('selected');
      this.rank1 = document.getElementById('rank1').getAttribute('selected');
     
      this.suit2 = document.getElementById('suit2').getAttribute('selected');
      this.rank2 = document.getElementById('rank2').getAttribute('selected');

      this.position = document.getElementById('position').getAttribute('selected');
      this.expectedValue = document.getElementById('expected-value');

      if( (this.suit1 !== null && this.suit1 !== '') && (this.rank1 !== null && this.rank1 !== '') && (this.suit2 !== null && this.suit2 !== '') && (this.rank2 !== null && this.rank2 !== '') 
        && (this.suit2 !== null && this.suit2 !== '') && (this.position !== null && this.position !== '')) {
          this.suited = '';
        if(this.suit1 === this.suit2){
          this.suited = 's';
        }
        this.ranks1 = this.rank1 + this.rank2;
        this.ranks2 = this.rank2 + this.rank1;
        for(var i =0; i< this.expectedValueChart.length; i++){

          // If the combo of ranks and suitedness matches, then this row contains the correct 
          if((String(this.ranks1 + this.suited) === String(this.expectedValueChart[i][0]))
          || (String(this.ranks2 + this.suited) === String(this.expectedValueChart[i][0]))){
            if(this.expectedValueChart[i][Number(this.position)] >= 0){
            
              document.getElementById('expected-value').setAttribute('valueState', 'positive');
            }
            else if(this.expectedValueChart[i][Number(this.position)] < 0){
             
              document.getElementById('expected-value').setAttribute('valueState', 'negative');
            }
            this.expectedValue.textContent = this.expectedValueChart[i][Number(this.position)].toString();
            break;
          }

          else{
            document.getElementById('expected-value').setAttribute('valueState', 'none');
            this.expectedValue.textContent = "N/A";
          }
        }
        
      }

    }
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
        this.setAttribute('selected', idx);
        this._selected = idx;

    }

    get selected(){
          return this._selected;
      }
  }

  window.customElements.define('expected-value-estimator', ExpectedValueEstimator);