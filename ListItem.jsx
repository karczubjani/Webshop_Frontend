import React, { useState } from "react";
import store from "../store";

const ListItem = ({item, handleClick}) =>{

    return(
        <div className="card">
            <img src={ item.thumbnail } alt={ item.title }></img>
            <div className="d-flex">
            <h3>{item.title} ${item.price}</h3> <i className="bi bi-cart4">  </i>
            </div>

            <a href="#" className="btn-primary" onClick={()=>{
                store.dispatch({
                type: 'DETAILS',
                payload: item,
                showdb: true
            });
            handleClick(item.id);
            }}> Részletek </a>
        </div>
    )

}

export default ListItem;