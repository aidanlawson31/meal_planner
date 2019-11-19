import React from 'react';
import logo from './logo.svg';
import './App.css';

<<<<<<< HEAD
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
=======
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Meal Planner</h1>
      </header>
    </div>
  )
>>>>>>> 103e00982e97e11dd0f39d2c44740ac4e99dad6f
}

export default App;
