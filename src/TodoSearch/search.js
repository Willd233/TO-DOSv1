
import "./TodoSearch.css";
import '../../src/style/index.css';

import React from "react";
import { TodoCountext } from "../TodoContext/context";

function TodoSearch() {
    const {
        searchValue,
        setSearchValue,
    } = React.useContext(TodoCountext)
    return (
        <input placeholder="¿Que Haras?"
            className="TodoSearch"
            value={searchValue}
            onChange={(event) => {
                setSearchValue(event.target.value);
            }}
        />
    );
}
export { TodoSearch }; 