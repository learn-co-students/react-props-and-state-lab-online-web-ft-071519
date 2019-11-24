import React from 'react'

class Filters extends React.Component {

    setType = (event) => {
        // console.log(event.target.value);
        // // Option 1: State sets but due to async state is not set by the time onChangeType is called.
        // this.setState({
        //     type: event.target.value
        // })
        // return this.props.onChangeType(this.state.type)

        // Option 2:
        return this.props.onChangeType(event.target.value)
    }

    render() {
        // console.log("Filter Render", this.props)
        return (
            <div className="ui form">
                <h3>Animal type</h3>
                <div className="field">
                    <select onChange={this.setType.bind(this)} name="type" id="type">
                        <option value="all">All</option>
                        <option value="cat">Cats</option>
                        <option value="dog">Dogs</option>
                        <option value="micropig">Micropigs</option>
                    </select>
                </div>

                <div className="field">
                    <button onClick={this.props.onFindPetsClick} className="ui secondary button">Find pets</button>
                </div>
            </div>
        )
    }
}

export default Filters
