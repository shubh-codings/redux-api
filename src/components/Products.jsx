import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../app/slices/productSlice';
import { Container, Col, Row } from 'react-bootstrap';
import {add} from '../app/slices/cartSlice'

function Products() {
  const dispatch = useDispatch()
  const products = useSelector(state => state.products)
  const data = useSelector(state => state.products.data)
  const addToCart = (product)=>{
    dispatch(add(product))
  }
  useEffect(() => {
    dispatch(getProducts())
  }, [])

  if (products.isLoading === 'loading') {
    return (
      <div>
        <h2>Loading....</h2>
      </div>
    )
  }
  if (products.isLoading === 'error') {
    return (
      <div>
        <h2>SomeThing Went Wrong, Please try again</h2>
      </div>
    )

  }
  const productCard = data.map((product) => (
    <Col md="3"  key={product.id}>
      <Card className='p-2 mb-3'>
        <Card.Img variant="top"style={{height:"300px"}} src={product.image} />
        <Card.Body className='text-center'>
          <Card.Title>{product.title.slice(0,18)}</Card.Title>
          <Card.Text className='text-center'>
            INR {product.price}
          </Card.Text>
          <Button variant="primary" onClick={()=>addToCart(product)}>Add to Cart</Button>
        </Card.Body>
      </Card>
    </Col>
  ))
  // console.log(data)
    return (
      <Container fluid>
        <Row className='text-center'>
        <h1>Products</h1>
        {productCard}
        </Row>
      </Container>
    )
  }

export default Products;

