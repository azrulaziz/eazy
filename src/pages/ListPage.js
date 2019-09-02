import React, {useEffect} from 'react';
import { connect } from 'react-redux'
import axios from 'axios'
import { receiveList } from '../actions/list'
import Layout from '../components/Layout'
import ItemListing from '../components/ItemListing';

const ListPage = ({list, dispatch, history, location}) => {

    useEffect(() => {
        const fetchList = async () => {
            try {
                const res = await axios.get('http://5b35ede16005b00014c5dc86.mockapi.io/list')
                // dispatch to redux store once after api call
                dispatch(receiveList(res.data.data));
            } catch (error) {
                console.log(error)
            }
        }

        fetchList()
    }, [dispatch])

    return (
        <Layout>
            <div className="list">
                <ItemListing list={list} history={history} location={location}/>
            </div>
        </Layout>
    )
}

const mapStateToProps = (state) => {
    return {
        list: state
    }
}

export default connect(mapStateToProps)(ListPage);