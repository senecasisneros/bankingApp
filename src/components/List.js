import React, { Component } from 'react';
import moment from 'moment'

export default class List extends Component {
  constructor() {
    super();

    this.startEdit = this.startEdit.bind(this);
    this.saveEdit = this.saveEdit.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
    this.deleteTrans = this.deleteTrans.bind(this);

    this.state = {
      editing: null,
      editTransactionInput: '',
      deleting: null
    }
  }


  saveEdit(id) {
    let trans = this.state.editTransactionInput;

    let newTran = {trans};

    this.props.updateTrans(id, newTran);
    this.setState({editing: null});
  }
  startEdit(transaction) {
    this.setState({
      editing: transaction._id,
      editTransactionInput: transaction.trans
    });
  }

  cancelEdit() {
    this.setState({editing: null});
  }

  deleteTrans(id){
    this.props.deleteTransaction(id)
    this.setState({
      deleting: this.props.transactions.filter(transaction => transaction.id !== id)})
    }

    render() {
      if(!this.props.transactions) {
        return null;
      }

      let rows = this.props.transactions.map(transaction => {
        if(this.state.editing === transaction._id) {
          return (
            <tr key={transaction._id}>
            <td><input type="text" value={this.state.editTransactionInput} onChange={e => {this.setState({editTransactionInput: e.target.value}) }} /></td>
            <td>{transaction.amount}</td>
            <td>
            <input type="checkbox"
            checked={transaction.type}
            onChange={() => { this.props.toggleType(transaction._id) }}/>
            </td>
            <td>{transaction.createdAt}</td>
            <td>
            <button type="button" className="btn btn-primary btn-xs" onClick={this.saveEdit.bind(null, transaction._id)}>
            <span className="glyphicon glyphicon-ok"></span>
            </button>
            <button type="button" className="btn btn-danger btn-xs" onClick={this.cancelEdit}>
            <span className="glyphicon glyphicon-remove"></span>
            </button>
            </td>
            </tr>
          )
        } else {
          return (
            <tr key={transaction._id}>
            <td>{transaction.trans}</td>
            <td>{transaction.amount}</td>
            <td>
            <input type="checkbox"
            checked={transaction.type}
            onChange={() => { this.props.toggleType(transaction._id) }}/>
            </td>
            <td>{transaction.createdAt}</td>
            <td>
            <button type="button" className="btn btn-primary btn-xs" onClick={this.startEdit.bind(null, transaction)}>
            <span className="glyphicon glyphicon-edit"></span>
            </button>
            </td>
            <td>
            <button type="button" className="btn btn-primary btn-xs" onClick={this.deleteTrans.bind(null, transaction._id)}>
            <span className="glyphicon glyphicon-remove"></span>
            </button>
            </td>
            </tr>
          )
        }
      });

      return (
        <table className="table">
        <thead>
        <tr>
        <th>Transaction</th>
        <th>Amount</th>
        <th>Type</th>
        <th>Create At</th>
        </tr>
        </thead>
        <tbody>
        {rows}
        </tbody>
        </table>
      )
    }
  }
