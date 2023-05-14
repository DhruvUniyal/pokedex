import './pokemoncard.css'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

export default function PokemonCard(props){
    return(
    <Container className='pokemon-card'>
        <Card className = 'mb-3' style={props.cardstyle}>
            <div className='img-container'>
                <img src={require(`../assets/sprites/${props.sprite}.png`)} alt='Pokemon text' className='pokemon-img'></img>
            </div>
            <div className='stat-container'>
                <span className='pokemon-name'><strong>{props.pokemonName}</strong></span>
                <span className='pokemon-type'>Type: {props.pokemonType} </span>
                <span className='pokemon-stats'>
                    Pokemon stats
                </span>
                <div className='stat-bar'>
                    <span className='hp'>HP <strong>{props.pokemonHP}</strong></span>
                    <span className='atk'>Attack <strong>{props.pokemonAtk}</strong></span>
                    <span className='dfn'>Defense <strong>{props.pokemonDfn}</strong></span>
                    <span className='sp-atk'>Sp Attack <strong>{props.pokemonSpAtk}</strong></span>
                    <span className='sp-dfn'>Sp Defense <strong>{props.pokemonSpDfn}</strong></span>
                    <span className='spd'>Speed <strong>{props.pokemonSpd}</strong></span>
                </div>

            </div>
        </Card>
    </Container>);

}