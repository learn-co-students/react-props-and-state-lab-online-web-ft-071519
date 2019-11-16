import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'
import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from 'constants'

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
  onAdoptPet = petId => {
    this.state.pets.forEach(myFunction);

    function myFunction(item) {
      if (item.id = petId) {
        item.isAdopted = true
      }
    }
    return this.state
  }

  // onAdoptPet = petId => {
  //   const pets = this.state.pets.map(p => {
  //     return p.id === petId ? { ...p, isAdopted: true } : p;
  //   });
  //   this.setState({ pets: pets });
  // };
  fetchPet = () => {

    if (this.state.filters.type === "cat" || this.state.filters.type === "dog" || this.state.filters.type === "micropig") {
      fetch("/api/pets?type=" + this.state.filters.type)
        .then(res => res.json())
        .then(pets => this.setState({ pets: pets }));
    } else {
      fetch("/api/pets")
        .then(res => res.json())
        .then(pets => this.setState({ pets: pets }));
    }
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
              <Filters onChangeType={this.state.filters}
                onFindPetsClick={this.fetchPet} />
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
