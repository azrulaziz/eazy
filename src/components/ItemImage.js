import React from 'react'
import mg2 from '../images/mg2double.png'

const ItemImage = () => {
    
    return (
        <div className="itemimage">
            <div className="itemimage__container">
                <img src={mg2} alt="" className="itemimage__img"/>
            </div>
        </div>
    )
}

export default ItemImage;