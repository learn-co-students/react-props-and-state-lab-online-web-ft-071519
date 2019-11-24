import React from 'react'
import Pet from './Pet'

class PetBrowser extends React.Component {

    render() {
        // By mapping it to the Pet class, petCards becomes an array of HTML elements. Which can then be returned. 
        let petsCards = this.props.pets.map(pet =>
            <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet}/>    
        )
        return (
            <div className="ui cards">
                {petsCards}
            </div>
        )
    }
}

export default PetBrowser
