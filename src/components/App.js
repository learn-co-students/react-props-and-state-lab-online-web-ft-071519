import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  //changes state's type to the currently selected animal type
    //will be passed down to filter component
  onChangeType = event => {
    //debugger;
    const animalType = event.target.value;
    this.setState({
      filters: {
        ...this.state.filters,
        type: animalType
      }
    })
  }

  
  onFindPetsClick = () => {
    if (this.state.filters.type === 'all') {
      fetch('/api/pets')
      .then(response => response.json())
      .then(object => this.setState({
        pets: object
      }))
    } else {
      //fetch to interpolated URL
      fetch(`/api/pets?type=${this.state.filters.type}`)
      .then(response => response.json())
      .then(object => this.setState({
        pets: object
      }))
    }
  }

  onAdoptPet = petId => {
    const pets = this.state.pets.map(p => {
      return p.id === petId ? { ...p, isAdopted: true } : p;
    });
    this.setState({ pets: pets });
  };

  filterPets = () => {
    this.onFindPetsClick();
    return this.state.pets;
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
