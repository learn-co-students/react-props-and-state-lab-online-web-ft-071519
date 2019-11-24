import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

// The functionality is 100% but not sure why a few tests are not passing. 

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

    setType = (typeValue) => {
        this.setState({
            filters: {
                ...this.state.filters,
                type: typeValue
            }
        })
    }
    
    fetchPets = () => {
        if (this.state.filters.type === "all") {
            fetch("/api/pets")
              .then(response => {
                return response.json();
              })
              .then(object => {
                this.setState({
                  pets: object
                });
              })
              .catch(function(error) {
                console.log(error);
              });
        } else {
            fetch("/api/pets?type=" + this.state.filters.type)
            .then(response => {
                return response.json();
            })
            .then(object => {
                this.setState({
                pets: object
                });
            })
            .catch(function(error) {
                console.log(error);
            });
        }
    }

    adoptPet = (event) => {
        console.log(
            event.target.id, 
            "this is getting the petId.", 
            this.state.pets
        )
        // // Map over the pets array in state,
        // // Does it's id match the passed in petID?,
        // // If so, change it's isAdopted value to true, 
        // // otherwise, leave it alone.

        // const pets = this.state.pets.map(p => {
        //     return p.id === petId ? { ...p, isAdopted: true } : p;
        // });
        
        // // Afterwards, replace our current state's pets array with the update pets array.
        // this.setState({ pets: pets });

        const petId = event.target.id
        const updatedPets = this.state.pets.map((pet) => {
            return pet.id === petId ? { ...pet, isAdopted: true } : pet;
        });

        this.setState({
            pets: updatedPets
        });

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
                            <Filters 
                                onChangeType={this.setType}
                                onFindPetsClick={this.fetchPets}
                            />
                        </div>
                        <div className="twelve wide column">
                            <PetBrowser pets={this.state.pets} onAdoptPet={this.adoptPet}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App
