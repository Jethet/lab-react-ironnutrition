import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import Foodbox from "./components/Foodbox";
import AddNewFood from "./components/AddNewFood"
import Search from "./components/Search"

class App extends Component {
  state = {
    foodsList: foods
  }

  submitNewFood = (foodObj) => {
    let newFoodsList = [...this.state.foodsList]
    newFoodsList.push(foodObj)

    this.setState({foodsList: newFoodsList})
  }

  newSearch = (searchObj) => {

  }

  render() {
    return (
      <div className="App">
        <div>
            <button className="button is-active">Add food</button>
        </div>
        <div>
            <button className="button is-active">Search</button>
        </div>
        <AddNewFood addedNewFood = {this.submitNewFood}/>
        <Search newSearch={this.newSearch}/>

        {this.state.foodsList.map(food => {
          return <Foodbox
          {...food}/>
          // same as:
          // name = {food.name}
          // calories = {food.calories}
          // image = {food.image}
          // quantity = {food.quantity}
          
        }) 
        }

      </div>
    );
  }
}

export default App;
