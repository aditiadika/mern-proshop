import React, {useState, useEffect} from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'

export default function Homescreen(props) {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true)
            const { data } = await axios.get('/api/products')
            setProducts(data)
            setLoading(false)
        }

        fetchProduct()
    }, []);

    return (
        <>
            {loading ? <p>Loading.....</p> : 
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
            }
        </>
    )
}
