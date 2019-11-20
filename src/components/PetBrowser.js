import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  render() {
    const cards = this.props.pets.map(p => (
      <Pet pet={p} key={p.id} onAdoptPet={this.props.onAdoptPet} />
    ));
    debugger;
    return(
      <div className="ui cards">{cards}</div>
    )
  }

}

export default PetBrowser
