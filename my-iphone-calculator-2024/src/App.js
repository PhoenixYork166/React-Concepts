import React, { Component } from "react";
import './App.css';

class App extends Component {  
  constructor() {
    super();

    this.state = {
      result: '',
      input: '',
      nextOperation: ''
    }
  }  

  pos_to_neg = (num) => {
    return -Math.abs(num);
  }
  
  handler = (arg) => {
      const { result, input } = this.state;

      if (result === "Infinity") {
          this.setState({ 
            result: '',
            input: ''
          });
      };

      // Initial state, result === ''
      const initial = result === '';

      // Summing
      if (arg === "+" && initial) {
        this.setState({result: input }, () => {
          this.setState({ nextOperation: '+'}, () => {
            this.setState({ input: '' })
          })
        })
      } 
      else if (arg === "+") {
        this.setState({ nextOperation: '+'}, () => {
          this.setState({ input: '' })
        })
      } 
      // Subtracting
      else if (arg === "-" && initial) {
        this.setState({result: input }, () => {
          this.setState({ nextOperation: '-'}, () => {
            this.setState({ input: '' })
          })
        })
      } 
      else if (arg === "-") {
        this.setState({ nextOperation: '-'}, () => {
          this.setState({ input: '' })
        })
      } 
      // Multiplying
      else if (arg === "x" && initial) {
        this.setState({result: input }, () => {
          this.setState({ nextOperation: 'x'}, () => {
            this.setState({ input: '' })
          })
        })
      } 
      else if (arg === "x") {
        this.setState({ nextOperation: 'x'}, () => {
          this.setState({ input: '' })
        })
      } 
      // Dividing
      else if (arg === "÷" && initial) {
        this.setState({result: input }, () => {
          this.setState({ nextOperation: '÷'}, () => {
            this.setState({ input: '' })
          })
        })
      } 
      else if (arg === "÷") {
        this.setState({ nextOperation: '÷'}, () => {
          this.setState({ input: '' })
        })
      }
      // Cancel => Reset App operation
      else if (arg === "C") {
        this.setState({ result: '', input: '', nextOperation: '' });
      } 
      // = Equal Operation
      else if (arg === "=") {
        if (this.state.nextOperation === '+') {
          this.setState({ result: ( (Number(this.state.result)*10) + (Number(this.state.input)*10) )/10}, () => {
            this.setState({ input: ''}, () => {
              this.setState({ nextOperation: ''})
            })
          })
        } else if (this.state.nextOperation === '-') {
          this.setState({ result: ( (Number(this.state.result)*10) - (Number(this.state.input)*10) )/10}, () => {
            this.setState({ input: ''}, () => {
              this.setState({ nextOperation: ''})
            });
          })
        } else if (this.state.nextOperation === 'x') {
          this.setState({ result: ( (Number(this.state.result)*10) * (Number(this.state.input)*10) )/100}, () => {
            this.setState({ input: ''}, () => {
              this.setState({ nextOperation: ''})
            })
          })
        } else if (this.state.nextOperation === '÷') {
          this.setState({ result: Number(this.state.result) / Number(this.state.input)}, () => {
            this.setState({ input: ''}, () => {
              this.setState({ nextOperation: ''})
            })
          })
        }
      } 
      else if (arg === '+/-' && Number(this.state.result) > 0) {
        this.setState({ result: this.pos_to_neg(result)}, () => {
          this.setState({ input: '' });
        });
      }
      else if (arg === '+/-' && Number(this.state.result) < 0) {
        this.setState({ result: Math.abs(this.state.result)}, () => {
          this.setState({ input: ''});
        });
      }
      else if (arg === '%') {
        this.setState({result: (this.state.result/100)});
      }
      else if (arg === "del") {
        const n = input.length;
        if (n > 0)
        // Truncate 1 letter from the right
        this.setState({ input: input.slice(0, n-1)});
        }
      else {
        this.setState({input: input.concat(arg)});
      }
      // else if (arg === "Del") {
      //   const n = input.length;
      //   if (n > 0)
      //   // Truncate 1 letter from the right
      //   this.setState({ input: input.slice(0, n-1)});
      //   } else {
    }

    resetApp = () => {
      this.setState({ 
        result: '',
        input: '',
        nextOperation: ''
      })
    }

    // Tracking state variable changes
    componentDidUpdate(prevProps, prevState) {

      const cancelButton = document.querySelector('#root > div > div:nth-child(2) > div:nth-child(1) > div > button');
      const plusMinusButton = document.querySelector('#root > div > div:nth-child(2) > div:nth-child(2) > div > button');
      const percentButton = document.querySelector('#root > div > div:nth-child(2) > div:nth-child(3) > div > button');
      const display = document.querySelector('.display');
      const dotButton = document.querySelector('#root > div > div:nth-child(6) > div:nth-child(3) > div > button');
      const divideButton = document.querySelector('#root > div > div:nth-child(2) > div:nth-child(4) > div > button');
      const multiplyButton = document.querySelector('#root > div > div:nth-child(3) > div:nth-child(4) > div > button');
      const minusButton = document.querySelector('#root > div > div:nth-child(4) > div:nth-child(4) > div > button');
      const plusButton = document.querySelector('#root > div > div:nth-child(5) > div:nth-child(4) > div > button');

      const seven = document.querySelector('#root > div > div:nth-child(3) > div:nth-child(1) > div > button');
      const eight = document.querySelector('#root > div > div:nth-child(3) > div:nth-child(2) > div > button');
      const nine = document.querySelector('#root > div > div:nth-child(3) > div:nth-child(3) > div > button');
      const four = document.querySelector('#root > div > div:nth-child(4) > div:nth-child(1) > div > button');
      const five = document.querySelector('#root > div > div:nth-child(4) > div:nth-child(2) > div > button');
      const six = document.querySelector('#root > div > div:nth-child(4) > div:nth-child(3) > div > button');
      const one = document.querySelector('#root > div > div:nth-child(5) > div:nth-child(1) > div > button');
      const two = document.querySelector('#root > div > div:nth-child(5) > div:nth-child(2) > div > button');
      const three = document.querySelector('#root > div > div:nth-child(5) > div:nth-child(3) > div > button');
      const zero = document.querySelector('#root > div > div:nth-child(6) > div:nth-child(1) > div > button');
      const del = document.querySelector('#root > div > div:nth-child(6) > div:nth-child(2) > div > button');
      const equalButton = document.querySelector('#root > div > div:nth-child(6) > div:nth-child(4) > div > button');
          
      // To disable percentButton when needed
      if (this.state.result === '' || this.state.nextOperation !== '' || this.state.input !== '') {
        percentButton.disabled = true;
      } else {
        percentButton.disabled = false;
      }

      // To keep tracking real-time users' input validations
      if (
        this.state.result !== prevState.result ||
        this.state.input !== prevState.input
      ) {
        console.log(`this.state.result: ${this.state.result}`);
        console.log(`this.state.input: ${this.state.input}`);
        console.log(`this.state.input.includes('.'): ${this.state.input.includes('.')}`);
        console.log(`this.state.nextOperation: ${this.state.nextOperation}`);
      }

      // Reset App if NaN is displayed
      if (
        document.querySelector('.display').textContent === 'NaN'
      ) {
        this.resetApp();
      }

      // If +/- is accidentally comes up on Screen => Remove it
      if (display.textContent === '+/-') {
        this.setState({input: ''});
      }

      // Lock +/- if there's no results
      if (this.state.result === '') {
        plusMinusButton.disabled = true
      } else {
        plusMinusButton.disabled = false
      }

      // Allow only 1 "." on Screen
      if (this.state.input.includes('.') || display.textContent.includes('.')) {
        dotButton.disabled = true;
      }
      else if (this.state.result !== '' && this.state.input === '') {
        dotButton.disabled = true;
      }
      else {
        dotButton.disabled = false;
      }

      if (this.state.nextOperation !== '') {
        divideButton.disabled = true;
        multiplyButton.disabled = true;
        minusButton.disabled = true;
        plusButton.disabled = true;
      } else if (this.state.nextOperation === '') {
        divideButton.disabled = false;
        multiplyButton.disabled = false;
        minusButton.disabled = false;
        plusButton.disabled = false;
      }

      // Lock Button Pad if no nextOperation is specified
      if (this.state.result !== '' && this.state.input === '' && this.state.nextOperation === '') {
        seven.disabled = true
        eight.disabled = true
        nine.disabled = true
        four.disabled = true
        five.disabled = true
        six.disabled = true
        one.disabled = true
        two.disabled = true
        three.disabled = true
        zero.disabled = true
        equalButton.disabled = true
      } else {
        seven.disabled = false
        eight.disabled = false
        nine.disabled = false
        four.disabled = false
        five.disabled = false
        six.disabled = false
        one.disabled = false
        two.disabled = false
        three.disabled = false
        zero.disabled = false
        equalButton.disabled = false
      }
  }

  render() {
    
    const buttons_row1 = ["C", "+/-", "%", "÷"];
    const buttons_row2 = ["7", "8", "9", "x"];
    const buttons_row3 = ["4", "5", "6", "-"];
    const buttons_row4 = ["1", "2", "3", "+"];
    const buttons_row5 = ["0", "del", ".", "="];

    // For mapping Classes to corresponding buttons
    const classMap = {
      'C': 'special',
      '+/-': 'special',
      '%': 'special',
      'del': 'special',
      '.': 'special',
      '÷': 'handler',
      'x': 'handler',
      '+': 'handler',
      '-': 'handler',
      '=': 'handler',
      '1': 'normal',
      '2': 'normal',
      '3': 'normal',
      '4': 'normal',
      '5': 'normal',
      '6': 'normal',
      '7': 'normal',
      '8': 'normal',
      '9': 'normal',
      '0': 'normal'
    }
    
    const { result, input } = this.state;

    return (
        <div className="container">
            { /* <Display screen={ input === '' ? result : input } /> */ }
            <div className="display-box">
              {/* <textarea
                className="display"
                value={ input === '' ? result : input }
              /> */} 
              <div className="display">
                {input === '' ? result : input }
              </div>
            </div>
            {/* 1st row    */}
            <div className="buttons">
                {buttons_row1.map( btn => {
                  return (
                    <div className="row">
                    <div className="col-1-of-4">
                      <button 
                        onClick={()=>this.handler(btn)}
                        className={
                          `${classMap[btn]} all-buttons`
                        }
                      >
                        {btn}
                      </button>
                    </div>
                  </div>
                  )
                })}
            </div>

            {/* 2nd row */}
            <div className="buttons">
                {buttons_row2.map( btn => {
                  return (
                    <div className="row">
                    <div className="col-1-of-4">
                      <button 
                        onClick={()=>this.handler(btn)}
                        className={
                          `${classMap[btn]} all-buttons`
                        }
                      >
                        {btn}
                      </button>
                    </div>
                  </div>
                  )
                })}
            </div>

            {/* 3rd row */}
            <div className="buttons">
                {buttons_row3.map( btn => {
                  return (
                    <div className="row">
                    <div className="col-1-of-4">
                      <button 
                        onClick={()=>this.handler(btn)}
                        className={
                          `${classMap[btn]} all-buttons`
                        }
                      >
                        {btn}
                      </button>
                    </div>
                  </div>
                  )
                })}
            </div>

            {/* 4th row */}
            <div className="buttons">
                {buttons_row4.map( btn => {
                  return (
                    <div className="row">
                    <div className="col-1-of-4">
                      <button 
                        onClick={()=>this.handler(btn)}
                        className={
                          `${classMap[btn]} all-buttons`
                        }
                      >
                        {btn}
                      </button>
                    </div>
                  </div>
                  )
                })}
            </div>

            {/* 5th row */}
            <div className="buttons">
                {buttons_row5.map( btn => {
                  return (
                    <div className="row">
                    <div className="col-1-of-4">
                      <button 
                        onClick={()=>this.handler(btn)}
                        className={
                          `${classMap[btn]} all-buttons`
                        }
                      >
                        {btn}
                      </button>
                    </div>
                  </div>
                  )
                })}
            </div>
        </div>
    )
  }
    
}

export default App;