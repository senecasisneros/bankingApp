'use strict';

import React, { Component } from "react";
import { Router, Route, browserHistory }  from 'react-router';
import List  from './List';
import InputPage  from './InputPage';

export default class App extends Component {
  constructor() {
    super();

    this.toggleType = this.toggleType.bind(this);

    this.updateTrans = this.updateTrans.bind(this);

    this.deleteTransaction = this.deleteTransaction.bind(this);
    this.addTrans = this.addTrans.bind(this);


    this.state = {
      transactions: []
    }
  }

  updateTrans(id, transUpdate) {
    fetch(`/api/transactions/${id}`, {
      method: 'PUT',
      body: JSON.stringify(transUpdate),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    .then(res => res.json())
    .then(transactions => {
      this.setState({transactions});
    })
    .catch(err => {
      console.log('err:', err);
    })
  };

  addTrans(transAdd) {
    console.log(transAdd)
    fetch(`/api/transactions`, {
      method: 'POST',
      body: JSON.stringify(transAdd),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    .then(res => res.json())
    .then(transactions => {
      this.setState({transactions});
    })
    .catch(err => {
      console.log('err:', err);
    })
  };


  toggleType(id) {
    fetch(`/api/transactions/${id}/type`, {
      method: 'PUT'
    })
    .then(res => res.json())
    .then(transactions => {
      this.setState({transactions});
    })
    .catch(err => {
      console.log('err:', err);
    })
  }

  deleteTransaction(id) {
    fetch(`/api/transactions/${id}`, {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    .then(res => {
      // console.log('res:', res);
    })
    .then(transactions => {
      this.setState({transactions});
    })
    .catch(err => {
      console.log('err:', err);
    })
  };

  componentDidMount() {
    fetch('/api/transactions')
    .then(res => res.json())
    .then(transactions => {
      this.setState({transactions});
    })
    .catch(err => {
      throw err;
    })
  }
  render() {
    return (
      <div>
      <InputPage addTrans={this.addTrans}/>
      <List transactions={this.state.transactions}
      toggleType={this.toggleType}
      updateTrans={this.updateTrans}
      deleteTransaction={this.deleteTransaction}/>
      </div>
    )
  }
}

{/* {this.props.children}             {/* whatever child component is being render will go through here */}
