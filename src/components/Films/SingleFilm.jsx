import React, { Component } from 'react';


class SingleFilm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            film: {}
        }
    }

    async componentDidMount() {
        try {
            let filmData = await fetch(`https://ghibliapi.herokuapp.com/Films/${this.props.match.params.id}`);
            let film = await filmData.json();



            this.setState({ film })
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        return (
            <div className="card mx-auto m-4" style={{width: 80 + '%'}}>
                <div className="card-body">
                    <h5 className="card-title">{this.state.film.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Director: {this.state.film.director}</h6>
                    <p className="card-text">{this.state.film.description}</p>
                    <h6 className="card-subtitle mb-2 text-muted">Release date: {this.state.film.release_date}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Rotten Tomatoes Score: {this.state.film.rt_score}</h6>
                </div>
            </div>
        )
    }
}

export default SingleFilm;