import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class People extends Component {
    constructor(props) {
        super(props)
        this.state = {
            people: []
        }
    }

    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/People')
            .then(res => res.json())
            .then(data => {
                this.setState({ people: data })
            })
    }

    render() {
        return(
            <div className="row">
                {this.state.people.map((person, index) => {
                    return(
                        <div key={index} className="card m-3 mx-auto" style={{ width: 100 + 'rem' }}>
                            <div className="card-body">
                                <h5 className="card-title">{person.name}</h5>
                                <p className="card-text">{person.gender}</p>
                                <h6 className="card-subtitle mb-2 text-muted">Studio Ghibli</h6>
                                <Link to={`/people/${person.id}`}>More info</Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default People;