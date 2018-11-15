import React, { Component } from 'react';

class Person extends Component {
    constructor(props) {
        super(props)
        this.state = {
            person: {}
        }
    }

    async componentDidMount() {
        try {
            let personData = await fetch(`https://ghibliapi.herokuapp.com/People/${this.props.match.params.id}`)
            let person = await personData.json()
            this.setState({ person })
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        return (
            <div className="card mx-auto m-4" style={{ width: 80 + '%' }}>
                <div className="card-body">
                    <h5 className="card-title">{this.state.person.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Sex: {this.state.person.gender}</h6>
                    <p className="card-text">Hair Color: {this.state.person.hair_color}</p>
                    <h6 className="card-subtitle mb-2 text-muted">Eye Color: {this.state.person.eye_color}</h6>
                    <a href={this.state.person.films} className="card-subtitle mb-2 text-muted">Seen in</a>
                </div>
            </div>
        )
    }

}

export default Person;