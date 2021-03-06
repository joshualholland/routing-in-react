import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import logo from '../logo.png';

class Films extends Component {
    constructor(props) {
        super(props)
        this.state = {
            films: []
        }
    }

    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/Films')
            .then(res => res.json())
            .then(data => {
                this.setState({ films: data })
            })
    }

    render() {
        return (
            <div className="row">
                {this.state.films.map((film, index) => {
                    return (
                        <div key={index} className="card mx-auto m-3" style={{ maxWidth: 18 + 'rem' }}>
                        <img class="card-img-top" src={logo} alt="Card image cap"></img>
                            <div className="card-body">
                                <h4 className="card-subtitle mb-2 text-muted">{film.title}</h4>
                                <p className="card-text">{film.description}</p>
                                <Link className="btn btn-secondary" to={`/films/${film.id}`}>More Info</Link>
                            </div>
                        </div>
                    )
                })}
            </div>

        )
    }
}

export default Films;