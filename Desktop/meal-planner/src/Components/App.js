import React, { Component } from 'react';
import Form from './Form'
import ViewMealModel from './ViewMealModel'
import './App.css';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;


class App extends Component {
  state = {
    meals: [],
    mealsCart: []
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
    const {mealsCart} = this.state
    return ( 
      <div className='layout'>
         
     

      </div>
    )
  };
}
 
export default App;
