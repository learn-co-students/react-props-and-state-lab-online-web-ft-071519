import React from 'react'

class Pet extends React.Component {
    
    // By not using state, the button switches but by using state it does not.
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         isAdopted: this.props.pet.isAdopted,
    //         key: this.props.pet.id
    //     };
    // }
    

    render() {   
        return (
          <div className="card">
            <div className="content">
              <a className="header">
                {this.props.pet.name}
                {this.props.pet.gender === "male" ? "♂" : "♀"}
              </a>
              <div className="meta">
                <span className="date">{this.props.pet.type}</span>
              </div>
              <div className="description">
                <p>Age: {this.props.pet.age}</p>
                <p>Weight: {this.props.pet.weight}</p>
              </div>
            </div>
            <div className="extra content">
              {this.props.pet.isAdopted ? (
                <button id={this.props.pet.id} className="ui disabled button">
                  {" "}
                  Already adopted{" "}
                </button>
              ) : (
                <button
                  onClick={this.props.onAdoptPet}
                  id={this.props.pet.id}
                  className="ui primary button"
                >
                  {" "}
                  Adopt pet{" "}
                </button>
              )}
            </div>
          </div>
        );
    }
}


export default Pet
            
