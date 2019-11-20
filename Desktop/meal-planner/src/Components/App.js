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
      console.log("new meal created",this.state.meals)
    };

    // Retrieves all blogs at start of the app
    handleMeals = (meals) => {
      this.setState({meals})
    }

    handleDeletedMeal = title => {
      // create a copy of the existing blogs array
      const index = this.state.meals.findIndex(meals => meals.title === title);
      const meals = [...this.state.meals];
      meals.splice(index, 1);
      this.setState({
          meals: meals
      });
  };


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
                  handleDeletedMeal={this.handleDeletedMeal}
                  />
                  <ViewMealModel />`
              </Content>
            </Layout>
     
     
      </div>
    )
  };
}
 
export default App;
