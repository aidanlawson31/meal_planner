import React, { Component } from 'react';
import {Input, Card} from "antd";


const {TextArea} = Input

export default class Form extends Component {
  constructor(props){
    super(props)
      this.state = {
        title: "",
        description: "",
        price: "",
        pictureURL: ""
      }
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  onSubmit = e => {
    e.preventDefault()
    console.log(e)
      this.setState({
        title: this.title,
        description: this.description,
        price: this.price,
        pictureURL: this.pictureURL


        })
        let meal = this.state
        this.props.handleNewMeal(meal)
        console.log(this.state)
    };

render(){
  return(
    <div style={{ display: "flex", alignContent: "center", alignItems: "center", justifyContent: "center"}}>
      <form>
        <Card title="Create Meal" style={{ marginTop: 14, width: 800, borderRadius: 5 }}>
          <h3>Meal Name</h3>
          <Input 
              placeholder="Meal name" 
              allowClear 
              name="title"
              onChange={this.onChange} />
          <br />
          <br />
          <h3>Meal Description</h3>
          <TextArea 
            placeholder="Meal description" 
            allowClear 
            name="description"
            onChange={this.onChange} />
          <h3>Meal Price</h3>
          <Input 
            placeholder="Meal Price" 
            allowClear 
            name="price"
            onChange={this.onChange} />
          <br />
          <br />
            <h3>Picture URL</h3>
          <Input 
            placeholder="Picture" 
            allowClear 
            name="pictureURL"
            onChange={this.onChange} />
          <br />
          <br />
          <Input
            placeholder="Submit"
            type="submit"
            onClick={this.onSubmit} 
            value="Add Meal"
            className="submit-button"
          />
        </Card>
      </form>
    </div>
    )
  }
}
