import React, { Component } from 'react';
import Form from './Form'
import Meal from './Meal'
import ViewMealModel from './ViewMealModel'
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import '../App.css';


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
                  <Menu.Item key="1">Meals</Menu.Item>
                  <Menu.Item key="2">Home</Menu.Item>
                  <Menu.Item key="3">Cart</Menu.Item>
                </Menu>
              </Header>
              <Content style={{ padding: '0 50px' }}>
                <Form 
                handleNewMeal={this.handleNewMeal}
                />
        `          <Meal
                  meals={meals}
                  handleNewMeal={this.handleNewMeal}
                  handleMeals={this.handleMeals}
                  handledeletedMeal={this.handledeletedMeal}
                  />
                  <ViewMealModel />`
              </Content>
            </Layout>
     
     
      </div>
    )
  };
}
 
export default App;
