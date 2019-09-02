import React from 'react'
import ItemDescription from './ItemDescription'
import ItemImage from './ItemImage'
import ItemRemark from './ItemRemark'
import ItemContact from './ItemContact'
import SimilarItems from './SimilarItems'

const ItemView = ({itemDetails, similarItemsList}) => {
    
    if (!itemDetails.attributes) return null;

    return (
        <div className="itemview">
            <div>
                    {/* Hardcoded breadcrumbs. In a real app with complete pages, 
                        breadcrumbs will be coded properly with navigations etc.
                    */}
                    <div className="itemview__crumbs">
                        <span>Home</span> 
                        <span>></span>
                        <span>Electronics</span>
                        <span>></span>
                        <span>Games & Console</span>
                        <span>></span>
                        <span className="itemview__crumbs-underline">{itemDetails.attributes.title}</span>  
                    </div>
                </div>
            <div className="itemview__layout">
                <div>
                    
                    <h2 className="itemview__title">{itemDetails.attributes.title}</h2>
                </div>
                <div></div>
            </div>
            <div className="itemview__layout">
                <div className="itemview__layout-image">
                    <ItemImage />
                    <ItemDescription desc={itemDetails.attributes.description}/>
                </div>
                <div className="itemview__layout-remarkcontact">
                    <ItemRemark attr={itemDetails.attributes}/>
                    <ItemContact attr={itemDetails.attributes}/>
                </div>
            </div>
            <div>
                <SimilarItems items={similarItemsList}/>
            </div>
        </div>
    )
}

export default ItemView;