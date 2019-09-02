import React from 'react'
import {IoMdShare, IoIosHeartEmpty} from 'react-icons/io'
import {MdAccountCircle} from 'react-icons/md'

const ItemRemark = ({attr}) => {
    
    return (
        <div className="itemremark">
            <div className="itemremark__container"> 
                <div className="itemremark__options">
                    <p><IoIosHeartEmpty size={20} className="itemremark__options-icon"/> Wishlist</p>
                    <p><IoMdShare size={20} className="itemremark__options-icon"/> Share</p>
                </div>
                <div className="itemremark__price">
                    <p className="itemremark__p">Price</p>
                    <h3>{attr.price}</h3>
                </div>
                <div className="itemremark__condition">
                    <p className="itemremark__p">Item Condition</p>
                    <p className="itemremark__mp">{attr.condition}</p>
                </div>
                <div className="itemremark__location">
                    <p className="itemremark__p">Item Location</p>
                    <p className="itemremark__mp">{attr.location}</p>
                </div>
                <div className="itemremark__seller">
                    <p className="itemremark__p">Seller Info</p>
                    <div className="itemremark__seller-wrap">
                        <div >
                            <MdAccountCircle size={40} className="itemremark__seller-icon"/>
                        </div>
                        <div>
                            <p className="itemremark__mp">{attr.seller_name}</p>
                            <p className="itemremark__p">{attr.seller_type}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemRemark;