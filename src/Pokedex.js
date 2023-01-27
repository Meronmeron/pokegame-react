import React,{Component} from "react";
import Pokecard from './Pokecard';
import './pokedex.css';
class Pokedex extends Component{
    render(){
        let title;
        if(this.props.isWinner){
            title = <h1 className='pokedex-Winner'>Winning Hand</h1>;
        }else{
            title =<h1 className='pokedex-Loser'>Loser Hand</h1>;
        }
        return(
            <div className="pokedex">
                <h1>Pokedex!</h1>
                <h4>Total Experience: {this.props.exp}</h4>
                {title}
                <div className="pokedex-cards">
                {this.props.pokeman.map((p) => (
                    <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experiance}/>
                ))}
                </div>
            </div>
        );
    }
}

export default Pokedex;