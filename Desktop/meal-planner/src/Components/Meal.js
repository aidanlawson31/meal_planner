import React, { Component } from 'react';
import { Modal, Button } from 'antd';

export default class Meal extends Component {
  state = {
    name: "",
    description: "",
    price: "",
    visible: false
  }

  viewModal = e => {
    this.setState({
      visible: true,
    })
  }

  closeModal = e => {
    this.setState({
      visible: true
    })
  }

  render() {
    return(
      <div>
        <h1>Meal name</h1>
        <p>Meal description</p>
        <p>meal price</p>
        <button onClick={this.viewModal()}>View more</button>
        <button>Add to cart</button>
       <Modal
       visible false>
         <button onClick={this.closeModal()}>close</button>
       </Modal>
      </div>
    )
  }
}
