import React from 'react'
import './card.scss'
import PropTypes from 'prop-types'

const Card = ({ title, img, name, price, discount, shipment }) => {
    return (
        <div className="card">
            <div className="card-details">
                <p className="card-details_title">{title}</p>
                <img src={img} alt={title} className="card-details_img" />
                <p className="card-details_name">{name}</p>
                <div className="card-details_value">
                    <span className="card-details_value_price">{price}</span>
                    <span className="card-details_value_discount">{discount}</span>
                </div>
                <span className="card-details_shipment">{shipment}</span>
            </div>
        </div>
    )
}
Card.propTypes = {
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    discount: PropTypes.number.isRequired,
    shipment: PropTypes.string.isRequired,
}
export default Card