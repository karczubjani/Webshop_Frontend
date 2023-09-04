import React from "react";
import store from "../store";
import { data } from './Data'

const DetailsBox = ({id}) => {  

    return (
        <div className="box-div">
            <div className="btn-div">
                <a href="#" className="x-btn" onClick={() => store.dispatch({
                    type: 'CLOSE',
                    showdb: false
                })}> X </a>
            </div>
            {data.products.map((item, index) => {
            return <div key={index}>
            {id === item.id && <div className="result-div">
            <img className='details-img' src={ item.thumbnail } alt={ item.title }></img>
                <div>Név: {item.title}</div>
                <br/>
                <div>Leírás: {item.description}</div>
                <br/>
                <div>Ár: {item.price}$</div>
                <br/>
                <div>Kategória: {item.category}</div>
                </div>}
          </div>
        })}
        </div>
    )
}

export default DetailsBox;