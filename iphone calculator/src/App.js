import React, { Component } from "react";
import Display from './components/Display/Display';
import Button from './components/Button/Button';
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
          this.setState({ result: Number(this.state.result) + Number(this.state.input)}, () => {
            this.setState({ input: ''}, () => {
              this.setState({ nextOperation: ''})
            })
          })
        } else if (this.state.nextOperation === '-') {
          this.setState({ result: Number(this.state.result) - Number(this.state.input)}, () => {
            this.setState({ input: ''}, () => {
              this.setState({ nextOperation: ''})
            });
          })
        } else if (this.state.nextOperation === 'x') {
          this.setState({ result: Number(this.state.result) * Number(this.state.input)}, () => {
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

    componentDidUpdate(prevProps, prevState) {

      const plusMinusButton = document.querySelector('#root > div > div.buttons > div:nth-child(2) > button');
      const display = document.querySelector('.display');
      const dotButton = document.querySelector('#root > div > div.buttons > div:nth-child(18) > button');
      const divideButton = document.querySelector('#root > div > div.buttons > div:nth-child(4) > button');
      const multiplyButton = document.querySelector('#root > div > div.buttons > div:nth-child(8) > button');
      const minusButton = document.querySelector('#root > div > div.buttons > div:nth-child(12) > button');
      const plusButton = document.querySelector('#root > div > div.buttons > div:nth-child(16) > button');

      const seven = document.querySelector('#root > div > div.buttons > div:nth-child(5) > button');
      const eight = document.querySelector('#root > div > div.buttons > div:nth-child(6) > button');
      const nine = document.querySelector('#root > div > div.buttons > div:nth-child(7) > button');
      const four = document.querySelector('#root > div > div.buttons > div:nth-child(9) > button');
      const five = document.querySelector('#root > div > div.buttons > div:nth-child(10) > button');
      const six = document.querySelector('#root > div > div.buttons > div:nth-child(11) > button');
      const one = document.querySelector('#root > div > div.buttons > div:nth-child(13) > button');
      const two = document.querySelector('#root > div > div.buttons > div:nth-child(14) > button');
      const three = document.querySelector('#root > div > div.buttons > div:nth-child(15) > button');
      const zero = document.querySelector('#root > div > div.buttons > div:nth-child(17) > button');
      const equalButton = document.querySelector('#root > div > div.buttons > div:nth-child(19) > button');
            
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
      } else {
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
    
    const buttons = ["C", "+/-", "%", "÷", "7", "8", "9", "x", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "="]

    const { result, input } = this.state;

    return (
        <div className='container'>
            <Display screen={ input === '' ? result : input } />
            <div className='buttons'>
                {buttons.map((btn, index) => {
                    return <Button handler={this.handler} value={btn} key={index}/> 
                })}
            </div>
        </div>
    )
  }
    
}

export default App;