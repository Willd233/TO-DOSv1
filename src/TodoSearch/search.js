
import "./TodoSearch.css";
import '../../src/style/index.css';

import React from "react";
import { TodoContext } from "../TodoContext/context";

function TodoSearch() {
    const {
        searchValue,
        setSearchValue,
    } = React.useContext(TodoContext)
    return (
        <input placeholder="Search"
            className="TodoSearch"
            value={searchValue}
            onChange={(event) => {
                setSearchValue(event.target.value);
            }}
        />
    );
}
export { TodoSearch }; 