import React from 'react'
import ItemDescription from './ItemDescription'
import ItemImage from './ItemImage'
import ItemRemark from './ItemRemark'
import ItemContact from './ItemContact'
import SimilarItems from './SimilarItems'

const MobileItemView = ({itemDetails, similarItemsList}) => {

    if (!itemDetails.attributes) return null;

    return (
        <div className="itemview">
            <div>
                <h2 className="itemview__title">{itemDetails.attributes.title}</h2>
            </div>
            <ItemImage />
            <ItemRemark attr={itemDetails.attributes}/>
            <ItemDescription desc={itemDetails.attributes.description}/>
            <div>
                <SimilarItems items={similarItemsList}/>
            </div>
            <ItemContact attr={itemDetails.attributes}/>
        </div>
    )
}

export default MobileItemView;