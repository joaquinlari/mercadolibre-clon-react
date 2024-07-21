import React from 'react'
import './cards.scss'
import Card from './Card'
import { INFO_CARD } from '../../data/constants'


const Cards = () => {
    return (
        <>
            <section className='container'>
                {
                    INFO_CARD.map(({ title, img, name, price, discount, shipment }) => (
                        <Card
                            title={title}
                            img={img}
                            name={name}
                            price={price}
                            discount={discount}
                            shipment={shipment}
                            key={name}
                        >
                        </Card>
                    ))
                }
            </section>
        </>
    )
}

export default Cards