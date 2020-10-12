import React from 'react';
import 'tachyons'

const SearchBar = ({SearchField, SearchChange}) => {
return(
  <div className="pa2">
    <input classname="pa3 ba b--green bg-lightest-blue" type="text" placeholder="Search robots" onChange={SearchChange}></input>
  </div>
)
}

export default SearchBar;