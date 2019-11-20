import React, { Component } from 'react';
import {Input} from "antd";
import ImageUploader from 'react-images-upload';


const {TextArea} = Input

export default class Form extends Component {
    constructor(props){
        super(props)
            this.state = {
                title: "",
                description: "",
                price: "",
                pictures: []
            }
    };

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    onDrop = (picture) => {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }
 


    onSubmit = e => {
        e.preventDefault()
        console.log(e)
             this.setState({
                title: this.title,
                description: this.description,
                price: this.price,
                pictures: this.pictures


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
                <ImageUploader
                    withIcon={true}
                    buttonText='Choose images'
                    onChange={this.onDrop}
                    imgExtension={['.jpg', '.gif', '.png', '.gif']}
                    maxFileSize={5242880}
                    />
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