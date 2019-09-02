import React from 'react'
import {withRouter} from 'react-router'
import mg from '../images/mg3.png'

const SimilarItems = ({items, history}) => {

    const handleViewItem = (id) => {
        history.push(`/view/${id}`)
    }

    if(!items) return null;

    return (
        <div className="similaritems">
            <div className="similaritems__titlecontainer">
                <p className="similaritems__title">Similar Items</p>
            </div>
            <div className="similaritems__container">
                {items.map(item => {
                    return(
                        <div className="similaritems__each" 
                            onClick={() => handleViewItem(item.id)} 
                            key={item.id}
                        >
                            <div>
                                <img src={mg} alt="" className="similaritems__each-image"/>
                            </div>
                            <div className="similaritems__each-itemdetails">
                                <p className="similaritems__each-title">{item.attributes.title}</p> 
                                <p className="similaritems__each-price">{item.attributes.price}</p> 
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default withRouter(SimilarItems);