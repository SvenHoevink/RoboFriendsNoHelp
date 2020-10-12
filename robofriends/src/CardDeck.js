import React from 'react';
import Card from './Card'

const CardDeck = ({robots}) => {
  return (
<div className='tc'>
{robots.map((value, i) => {
  return(<Card key = {i} id={i} name={robots[i].name} email={robots[i].email}/>)
})}
</div>
  );
};

export default CardDeck;