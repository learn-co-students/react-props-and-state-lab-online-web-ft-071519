import React from 'react'

class Pet extends React.Component {

  gender = (props) => {
    if(props.pet.gender === 'male') {
      return '♂'
    } else {
      return '♀'
    }
  }

  isAdopted = (props) => {
    let pId = props.pet.id
    if(props.pet.isAdopted){
      return <button className="ui disabled button">Already adopted</button>
    }else{
      return <button onClick={() => this.props.onAdoptPet(pId)} className="ui primary button">Adopt pet</button>
    }
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.gender(this.props)} {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}lb</p>
          </div>
        </div>
        <div className="extra content">
          {this.isAdopted(this.props)}
        </div>
      </div>
    )
  }
}

export default Pet
