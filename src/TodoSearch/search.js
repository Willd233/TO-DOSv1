
import "./TodoSearch.css";
import '../../src/style/index.css';

import React from "react";

function TodoSearch({
    searchValue,
    setSearchValue,
}) {
    return(
        <input placeholder="¿Que Haras?" 
        className="TodoSearch"
        value={searchValue}
        onChange={(event) =>{
            setSearchValue(event.target.value);
        }}
        />
    );
  }
  export{ TodoSearch }; 