import React, {useEffect, useState} from 'react';
import Layout from '../components/Layout'
import { connect } from 'react-redux'
import axios from 'axios'
import ItemView from '../components/ItemView'
import MobileItemView from '../components/MobileItemView'
import useWindowSize from "../functions/useWindow";

const ViewPage = ({list, match, location}) => {
    const size = useWindowSize();
    const [itemData, setItemData] = useState({})
    const [similarItemsList, setSimilarItemsList] = useState()

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const res = await axios.get(`http://5b35ede16005b00014c5dc86.mockapi.io/view/${match.params.id}`)
                setItemData(res.data.data)
            } catch (error) {
                console.log(error)
            }
        }

        const fetchSimilarItems = async () => {
            try {
                const res = await axios.get(`http://5b35ede16005b00014c5dc86.mockapi.io/similar/${match.params.id}`)
                setSimilarItemsList(res.data.data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchSimilarItems()
        // check if no data in redux then perform api call
        if(list.length === 0) {
            fetchItem()
        }
        
    }, [location, match.params.id, list.length])

    // check whether single item data comes from api or redux 
    const itemDetails = list.length === 0 ?  itemData : list.filter(item => item.id === match.params.id)[0];

    return (
        <Layout>
            <div className="view">
                
                {size.width < 768 ?
                <MobileItemView itemDetails={itemDetails} similarItemsList={similarItemsList}/>
                :
                <ItemView itemDetails={itemDetails} similarItemsList={similarItemsList} />
                }
            </div>
        </Layout>
    )
}

const mapStateToProps = (state) => {
    return {
        list: state
    }
}

export default connect(mapStateToProps)(ViewPage);