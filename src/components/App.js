import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'
// import Pet from "./Pet";

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

  handleChangeType = (e) =>  {
    this.setState({
      ...this.state,
      filters: {
        type: e.target.value
      }
    })
  };

  handleFindPetsClick = () => {
    let type = this.state.filters.type
    let url
    if(type === 'all') {
      url = '/api/pets'
    } else {
      url = `/api/pets?type=${type}`
    }
    fetch(url)
      .then(res => res.json())
      .then(json => this.setState({pets: json}))

  }

  onAdoptPet = (pId) => {
    const pets = this.state.pets.map((p) => {
      if (p.id === pId) {
        return {
          ...p,
          isAdopted: true
        }
      } else {
        return p
      }
    })
  //  set state
    this.setState({
      pets: pets
    })
  };

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.handleChangeType} onFindPetsClick={this.handleFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
