import React from 'react'
import mg2 from '../images/mg2.png'

const ItemListing = ({list, history, location}) => {

    const handleViewItem = (id) => {
        history.push(`/view/${id}`)
    }

    return (
        <div className="itemlisting">
            <div className="itemlisting__title">
                <h3 className="itemlisting__title-h3">Listing</h3>
            </div>
            <div className="itemlisting__container">
                {list.map(item => {
                    return (
                        <div 
                            className="itemlisting__each" 
                            onClick={() => handleViewItem(item.id)}
                            key={item.id}
                        >
                            <div>
                                {/* 
                                    img src needs to be hardcoded as the image url from mockup api
                                    provided for each image is not useable. A simple fix to load
                                    image dynamically can easily be implemented if each item is 
                                    provided with a valid img url.
                                */}
                                <img src={mg2} alt="" />
                            </div>
                            <div className="itemlisting__each-itemdetails">
                                <p className="itemlisting__each-title">{item.attributes.title}</p> 
                                <p className="itemlisting__each-price">{item.attributes.price}</p> 
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ItemListing;