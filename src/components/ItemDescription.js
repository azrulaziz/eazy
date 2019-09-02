import React from 'react'
import {IoIosFlag} from 'react-icons/io'

const ItemDescription = ({desc}) => {

    let text = desc.split('\\n').map((item, i) => {
        return (
            <p key={i} className="itemdesc__p">{item}</p>
        )
    })
    
    return (
        <div className="itemdesc">
            <div className="itemdesc__wrapper">
                <h3 className="itemdesc__wrapper-title">Description</h3>
                <p className="itemdesc__wrapper-report">
                    <IoIosFlag size={20} className="itemdesc__wrapper-icon"/> 
                    Report Ad
                </p>
            </div>
            <div>
                {text}
            </div>
            <hr className="itemdesc__line"/>
        </div>
    )
}

export default ItemDescription;