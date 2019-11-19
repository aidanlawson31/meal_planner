import React, { Component } from 'react';
import {Input} from "antd";
import axios from 'axios';

const {TextArea} = Input

export default class Form extends Component {
    constructor(props){
        super(props)
            this.state = {
                title: '',
                description: '',
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
            this.props.handleNewMeal()
            console.log(this.state)
        };
  render(){
    return(
        <div>
            <form>
                <Input 
                    placeholder="Meal name" 
                    allowClear 
                    name="Title"
                    onChange={this.onChange} />
                <br />
                <br />
                <TextArea 
                    placeholder="Meal description" 
                    allowClear 
                    name="Description"
                    onChange={this.onChange} />
                    <Input 
                    placeholder="Meal Price" 
                    allowClear 
                    name="Price"
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