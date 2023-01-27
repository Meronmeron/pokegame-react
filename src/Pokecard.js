import React,{Component} from 'react';
import './pokecard.css';
 class Pokecard extends Component{
    render(){
        let padtoThree = (number) => (number<= 999? `00${number}`.slice(-3): number);
        let pokeapi="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
        let imagsrc = `${pokeapi}${padtoThree(this.props.id)}.png`;
        return(
            <div className='pokecard'>
                
                <h1 className='pokecard-title'>{this.props.name} </h1>
                <div className='pokecard-image'><img src={imagsrc}/></div>
                <p className='pokecard-data'>{this.props.type}</p>
                <p className='pokecard-data'>{this.props.exp}</p>
            </div>
        )
    }
 }
 export default Pokecard; 