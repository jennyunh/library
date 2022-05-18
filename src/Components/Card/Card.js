import './Card.css';

const Card = props => {




return (

<div id="card">

Title: {props.title}
<br/>
Author: {props.author}
<br/>
Description: {props.description}
<br />
Read? {props.read}

</div>

)


}

export default Card;