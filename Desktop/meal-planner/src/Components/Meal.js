import React, { Component } from 'react';

export default class Meal extends Component {
  state = {
    name: "",
    description: "",
    price: ""
  }

  onViewMore = () => {

  }

  render() {
    return(
      <div>
        <h1>Meal name</h1>
        <p>Meal description</p>
        <p>meal price</p>
        <button>View more</button>
        <button>Add to cart</button>
      </div>
    )
  }
}
