import React, { Component } from 'react';
import {Input} from "antd";
import axios from 'axios';

const {TextArea} = Input

export default class Form extends Component {
    constructor(props){
        super(props)
            this.state = {
                title: "",
                description: "",
                price: ""
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
                description: this.description
            })
            let meal = this.state
            this.props.handleNewMeal(meal)
            console.log(this.state)
        };

  render(){
    return(
        <div>
            <form>
                <Input 
                    placeholder="Meal name" 
                    allowClear 
                    name="title"
                    onChange={this.onChange} />
                <br />
                <br />
                <TextArea 
                    placeholder="Meal description" 
                    allowClear 
                    name="description"
                    onChange={this.onChange} />
                    <Input 
                    placeholder="Meal Price" 
                    allowClear 
                    name="price"
                    onChange={this.onChange} />
                <Input
                    placeholder="Submit"
                    type="submit"
                    onClick={this.onSubmit} 
                    value="Add Meal"
                />
            </form>
        </div>
    )
  }
}
