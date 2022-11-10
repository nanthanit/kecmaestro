import React, { useState } from "react";
// import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import {Card, CardImg, CardBody,
  CardTitle,Row,Col,Container} from 'reactstrap';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
 
        
    <br></br><br></br>
    <center>
        <h3>WOOD CARVING</h3>
    <br></br><br></br>
        <div className="App">
        <Container>
     <Row>
      <Col md={4}>   
      <Card>
        <CardImg top width="416px" src="https://s32625.pcdn.co/wp-content/uploads/2018/04/lee-hammond_Swan_graphite-pencil-drawing-e1551989792469-1024x756.jpg.optimal.jpg" alt="Card image cap" height={325} />
        
      </Card>

      <div className="buttons">
    
    <button type="button" class="btn btn-danger">Add to Cart</button>
    <button type="button" class="btn btn-primary">Buy Now</button>
   </div>
       
      
      </Col>
      <Col md={1}>   
      
      </Col>
     
      <Col md={7}><br></br><br></br>
      
        <h3>Duck Drawing using pencil</h3>
        <h4>₹2,899</h4>      
        <h4>Contact Details</h4>
        <center>
        <table>
            <tr>
                <td>Phone:</td>
                <td></td>
                <td>9675857575</td>
            </tr>
           
            <tr>
                <td>Email:</td>
                <td></td>
                <td>saravanannanthan@gmail.com</td>
            </tr>
        </table><br></br>
        </center>
        <h4>Profile Details</h4>
     
        <table>
            <tr>
                <td>Profile Name:</td>
                <td></td>
                <td>Maari Painting</td>
            </tr>
           
            <tr>
                <td>Email:</td>
                <td></td>
                <td>saravanannanthan@gmail.com</td>
            </tr>
        </table>
      </Col>
      

      
      
      </Row>

      
      
      </Container><br></br>
      </div>
    </center>
   </>
  );
};

export default Navbar;