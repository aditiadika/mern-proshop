import React from 'react'
import products from '../products'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'

export default function Homescreen(props) {
    return (
        <>
            <h1>Latest products</h1>
            <Row>
                {products.map(product => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </>
    )
}
