import React, { useState } from "react";
// import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import {Card, CardImg, CardBody,
  CardTitle,Row,Col,Container} from 'reactstrap';

import "./Basket.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <div className="Navbar">
      <span className="nav-logo"><i>VenueLook</i></span>
      <div className={`nav-items ${isOpen && "open"}`}>
      <a href="#">Home</a>
        <a href="#">Search Halls</a>
        <a href="#">Become a Seller</a>
        <a href="#">Login</a>
        <a href="#">Register</a>
        <a href="#">Contact Us  </a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div><br></br>
    <center>
        <h3>CLAY TOYS</h3>
    <br></br><br></br>
        <div className="App">
        <Container>
     <Row>
      <Col md={4}>   
      <Card>
        <CardImg top width="416px" src="https://cdn.pixabay.com/photo/2012/10/15/12/32/wicker-61260__340.jpg" alt="Card image cap" height={325} />
        <CardBody>
          <h2><CardTitle>Craft Works</CardTitle></h2>
         
        </CardBody>
      </Card>
      
      </Col>
      <Col md={4}>   
      <Card>
        <CardImg top width="416px" src="https://images.unsplash.com/photo-1590751518505-1fc2d227ef9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFza2V0JTIwd2VhdmluZ3xlbnwwfHwwfHw%3D&w=1000&q=80" alt="Card image cap" height={325} />
        <CardBody>
          <h2><CardTitle>Pencil Sketching</CardTitle></h2>
         
        </CardBody>
      </Card>
       
      </Col>


        

      <Col md={4}>   
      <Card>
        <CardImg top width="416px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN5egzRzFGyvRpRyS6gX5wJeFVsArR0zX2-A&usqp=CAU" alt="Card image cap" height={325} />
        <CardBody>
          <h2><CardTitle>Painting Works</CardTitle></h2>
         
        </CardBody>
      </Card>
      
      </Col>
      
      </Row>
      <br></br><br></br>
      <Row>
      <Col md={4}>   
      <Card>
        <CardImg top width="416px" src="https://cdn.eventfinda.co.nz/uploads/events/transformed/1487810-651821-35.jpg" alt="Card image cap" height={325} />
        <CardBody>
          <h2><CardTitle>Clay Toys</CardTitle></h2>
          
        </CardBody>
      </Card>
      
      </Col>
      <Col md={4}>   
      <Card>
        <CardImg top width="416px" src="https://images.squarespace-cdn.com/content/v1/61d4c04fae7e617a7b97a7a5/98e28331-72b5-43e3-9b63-e8773d6cb879/Joy-Farms-craft-courses-surrey-basket-weaving-asymetric.JPEG?format=1000w" alt="Card image cap" height={325}/>
        <CardBody>
          <h2><CardTitle>Fuse Beads</CardTitle></h2>
          
        </CardBody>
      </Card>
      
      </Col>
      <Col md={4}>   
      <Card>
        <CardImg top width="416px" src="https://www.dhresource.com/260x260/f2/albu/g19/M00/DC/DB/rBVapmC_4xyAUBwdAAEBPphud5c873.jpg" alt="Card image cap" height={325} />
        <CardBody>
          <h2><CardTitle>Wood Carving</CardTitle></h2>
          
        </CardBody>
      </Card>
      
      </Col>
      
      </Row>

      <br></br><br></br>
      <Row>
      <Col md={4}>   
      <Card>
        <CardImg top width="416px" src="https://cultureandheritage.org/wp-content/uploads/2022/06/image-1.png" alt="Card image cap" height={325} />
        <CardBody>
          <h2><CardTitle>Gifts</CardTitle></h2>
        
        </CardBody>
      </Card>
      
      </Col>
      <Col md={4}>   
      <Card>
        <CardImg top width="416px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuW8wvUXeoxW3yjIpmo9ajR29F2d08xYURrQ&usqp=CAU" alt="Card image cap" height={325}/>
        <CardBody>
          <h2><CardTitle>Basket Weaving</CardTitle></h2>
        
        </CardBody>
      </Card>
      
      </Col>
      <Col md={4}>   
      <Card>
        <CardImg top width="416px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmQt4HgHeuWdMyaPahAWRhcKD5-HzGO6WzLal4etAYecvOuDxO0Rs8aPyOGeV_fbDLFUo&usqp=CAU" alt="Card image cap" height={325} />
        <CardBody>
          <h2><CardTitle>Floral Design</CardTitle></h2>
          
        </CardBody>
      </Card>
      
      </Col>
     
      </Row>
      
      
      </Container><br></br>
      </div>
    </center>
   </>
  );
};

export default Navbar;