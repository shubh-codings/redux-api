import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../app/slices/cartSlice';

function Cart() {
  var cartItems = useSelector(state => state.cart)
  // const [total, setTotal] = useState(0)
  const dispatch = useDispatch()
  const removeFromCart = (product) => {
    // console.log(product)
    dispatch(remove(product))
  }
  return (
    <Container fluid>
      <Row>
        <Col lg="9">
          <Row>
            {/* {cartItems} */}
            {cartItems.map((product) => (
              <Col md="6" key={product.id}>
                <Card className='p-2 mb-3 flex-row'>
                  <Card.Img variant="top" style={{ height: "300px", width: "250px" }} src={product.image} />
                  <Card.Body className='text-center d-flex flex-column align-items-center justify-content-center'>
                    <Card.Title>{product.title.slice(0, 18)}</Card.Title>
                    <Card.Text className='text-center'>
                      INR {product.price}
                    </Card.Text>
                    <Button variant="danger" type="danger" onClick={() => removeFromCart(product)}>Remove</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
        <Col lg="3">
          <h4>Total Price</h4>
          {/* <p>{total}</p> */}
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;