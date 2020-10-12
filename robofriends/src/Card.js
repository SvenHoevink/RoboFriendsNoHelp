import React from 'react'
import 'tachyons'

const Card = ({name, id, email}) => {
return(
  <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
<img src={`https://robohash.org/${id}?size=200x200`} alt="robot"/>
<p>{name}</p>
<p>{email}</p>
</div>
)
}

export default Card;