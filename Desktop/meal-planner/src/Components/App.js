import React, { Component } from 'react';
import Form from '../Components/Form'
import Meal from '../Components/Meal'
import '../App.css';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;


class App extends Component {
  state = {
    meals: []
    }

    // Handling new meals
    handleNewMeal = (meal) => {
      this.setState({
        meals: [...this.state.meals, meal]
      })
    };

    // Retrieves all blogs at start of the app
    handleMeals = (meals) => {
      this.setState({meals})
    }

  render() { 
    const {meals} = this.state
    return ( 
      <div className='layout'>
         
     
        <Form />
        <Meal />
      </div>
    )
  };
}
 
export default App;
