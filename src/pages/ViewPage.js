import React, {useEffect} from 'react';
import Layout from '../components/Layout'
import { connect } from 'react-redux'
import axios from 'axios'

const ViewPage = ({list, match}) => {

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const res = await axios.get(`http://5b35ede16005b00014c5dc86.mockapi.io/view/${match.params.id}`)
                console.log(res.data)
            } catch (error) {
                console.log(error)
            }
        }

        if(list.length === 0) {
            fetchItem()
        }
        
    }, [])

    return (
        <Layout>
            <div>
                <p>View Page</p>
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