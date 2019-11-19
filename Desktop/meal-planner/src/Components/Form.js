import React, { Component } from 'react';
import {Input} from "antd";

export default class Form extends Component {

  render(){
    return(
        <div>
            <form>
                <Input 
                    placeholder="input with clear icon" 
                    allowClear 
                    name="title"
                    onChange={this.onChange} />
                <br />
                <br />
                <TextArea 
                    placeholder="textarea with clear icon" 
                    allowClear 
                    name="description"
                    onChange={this.onChange} />
                <Input
                    placeholder="input with clear icon"
                    onClick={this.onSubmit} 
                    type="submit"
                    value="Add Blog"
                />
            </form>
        </div>
    )
}
}