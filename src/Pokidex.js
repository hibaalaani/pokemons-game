import React, { Component } from 'react'
import PokiCard from './PokiCard';
import "./Pokidex.css"
export default class Pokidex extends Component {
    render() {
        let title;
        (this.props.isWinner ?
            title = <h1 className="Pokidex-winner">Winning Hand</h1> : title = <h1 className="Pokidex-loser">Losing Hand</h1>)
        return (
            <div>
                <div className="Pokidex-title" >
                    {title}
                    <h4 >Total Experience: {this.props.exp}</h4>

                </div>
                <div className="Pokidex-card">



                    {this.props.pokemon.map(p => (
                        <PokiCard key={p.id} name={p.name} id={p.id} type={p.type} exp={p.base_experience} />
                    ))}
                </div>

            </div>
        )
    }
}
