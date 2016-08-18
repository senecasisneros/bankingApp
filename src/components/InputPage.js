'use strict';
import React, { Component } from 'react';

export default class InputPage extends Component {
  constructor() {
    super();
    //
    // this.addTransaction = this.addTransaction.bind(this);
    // this.saveAdd = this.saveAdd.bind(this);

    this.state = {
      addTransactionInput: ''
    }
  }

  saveAdd(event) {
    event.preventDefault();

    // let newTran.trans = this.state.addTransactionInput;
    let newTran = newTran.trans

    let newTrans = {newTran};

    this.props.addTrans(newTrans);
    this.setState({addTransactionInput: nul});
  }
  render() {
  //   let {transaction } = this.props;
  //   if(!this.props.transaction) {
  //     return null;
  // } else {
    return (
      <div className="container">
      <div className="row">
      <h1>Banking App</h1>
      <br/>
      <br/>
      <form className="form-horizontal">
      <fieldset>
      <div className="form-group">
      <div className="col-lg-10">
      <input type="text" className="form-control" id="inputTrans" placeholder="Transactions" value={this.state.addTransactionInput} onChange={e => {this.setState({addTransactionInput: e.target.value}) }}  />
      </div>
      </div>
      <div className="form-group">
      {/* <label htmlFor="inputAmount" className="col-lg-2 control-label">Transaction Amount:</label> */}
      <div className="col-lg-10">
      <input type="number" className="form-control" id="inputAmount" placeholder="Transaction Amount" />
      </div>
      </div>
      <div className="form-group">
      <label className="col-lg-2 control-label">Transaction Type:</label>
      <div className="col-lg-10">
      <div className="radio">
      <label>
      <input type="radio" name="optionsRadios" id="debit" value="option1" />
      Debit
      </label>
      </div>
      <div className="radio">
      <label>
      <input type="radio" name="optionsRadios" id="credit" value="option2" />
      Credit
      </label>
      </div>
      </div>
      </div>
      <div className="form-group">
      <div className="col-lg-10 col-lg-offset-2">
      <button type="reset" className="btn btn-default">Cancel</button>
      <button type="submit" onClick={this.saveAdd} className="btn btn-primary">Submit</button>
      </div>
      </div>
      </fieldset>
      </form>
      </div>
      </div>
    )
  }


// }

}


export default InputPage;
