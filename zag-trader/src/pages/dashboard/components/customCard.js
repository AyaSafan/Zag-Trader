import './customCard.css'

function CustomCard(props){
    return <div className='customCard'> {props.children} </div>
}

export default CustomCard;