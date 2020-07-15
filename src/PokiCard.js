import React, { Component } from "react"
import "./PokiCard.css"
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

class PokiCard extends Component {
    render() {
        let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

        let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`


        return (
            <div className="PokiCard">

                <h1 className="PokiCard-title">{this.props.name}</h1>
                <div className="PokiCard-image">
                    <img src={imgSrc} alt={this.props.name} />

                </div>
                <h3 className="PokiCard-data">Experience:{this.props.exp}</h3>
                <h3 className="PokiCard-data">Kind:{this.props.type}</h3>



            </div>

        )
    }
}
export default PokiCard;