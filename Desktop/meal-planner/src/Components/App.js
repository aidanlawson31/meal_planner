import React, { Component } from 'react';
import Form from './Form'
import Meal from './Meal'
import { Layout, Menu, Button } from 'antd';
import 'antd/dist/antd.css';
import '../App.css';
import { render } from "react-dom"
import { Router, Link } from "@reach/router"

const { Header, Content } = Layout;
class App extends Component {
  state = {
    meals: [],
  }

  // Handling new meals
  handleNewMeal = (meal) => {
    this.setState({
      meals: [...this.state.meals, meal]
    })
    console.log("new",this.state.meals)
  };

  // Retrieves all blogs at start of the app
  handleMeals = (meals) => {
    this.setState({meals})
      console.log(meals)
  }

  handleKeyPress = (event) => {
    console.log(event.key);
  }

  render() { 
    const {meals} = this.state
    return ( 
      <div className='layout'>
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1" href="#">
              <Link to="Home">Home</Link>
              </Menu.Item>
              <Menu.Item key="2" href="#">
              <Button type="primary"><Link to="Form">Create Meal</Link></Button>
              </Menu.Item>          
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <p>{this.handleKeyPress}</p>
          </Content>
        </Layout>
        <Router>
        <Meal
        path="Home"
        meals={meals} 
        handleNewMeal={this.handleNewMeal} 
        handleMeals={this.handleMeals} 
        handledeletedMeal={this.handledeletedMeal}
        />
        <Form 
        path="Form" 
        handleNewMeal={this.handleNewMeal} 
        />
    </Router>
      </div>
    )
  };
}

export default App;
