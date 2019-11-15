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

  changeType = (event) => {
    this.setState({
      filters: {
        type: event.target.value
      }
    })
  }

  fetchPets = () => {
    if (this.state.filters.type === "all") {
      fetch('/api/pets')
      .then(response => response.json())
      .then(data => this.setState({pets: data }));
    } else if (this.state.filters.type === "cat") {
      fetch('/api/pets?type=cat')
      .then(response => response.json())
      .then(data => this.setState({pets: data }));
    } else if (this.state.filters.type === "dog") {
      fetch('/api/pets?type=dog')
      .then(response => response.json())
      .then(data => this.setState({pets: data }));
    } else if (this.state.filters.type === "micropig") {
      fetch('/api/pets?type=micropig')
      .then(response => response.json())
      .then(data => this.setState({pets: data }));
    }
  }

  adoptPet = (id) => {
    let petList = this.state.pets
    console.log(petList)
    petList.forEach(function(pet) {
      if (pet.id === id) {
        pet.isAdopted = true;
      }
    })
    this.setState({
      pets: petList
    })
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
              <Filters onChangeType={this.changeType} onFindPetsClick={this.fetchPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.adoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
