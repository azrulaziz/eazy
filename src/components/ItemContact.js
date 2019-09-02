import React from 'react'
import {MdPhone, MdEmail} from 'react-icons/md'
import {IoIosChatboxes} from 'react-icons/io'
import useWindowSize from "../functions/useWindow";

const ItemContact = ({attr}) => {
    const size = useWindowSize();

    return (
        <div className="itemcontact">
            {size.width > 768 && <p className="itemcontact__title">Intested with the ad? Contact the seller</p>}
            <div>
                <button className="itemcontact__button">
                    <span className="itemcontact__number"><MdPhone size={15} className="itemcontact__icon"/>{attr.phone}</span>
                </button>
            </div>
            <div>
                <button className="itemcontact__button">
                    <span className="itemcontact__email"><MdEmail size={15} className="itemcontact__icon"/> Email</span>
                </button>
            </div>
            <div>
                <button className="itemcontact__button-red">
                    <span className="itemcontact__chat"><IoIosChatboxes size={15} className="itemcontact__icon"/> Chat</span>
                </button>
            </div>
        </div>
    )
}

export default ItemContact;