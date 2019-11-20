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

  onChangeType = animalType => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: animalType
      }
    })
  }

  onFindPetsClick = animalType => {
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

  onAdoptPet = id => {
    const pet = this.state.pets.map(pet => {
      return pet.id === id
    })
    return pet[0];
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
              <PetBrowser onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
