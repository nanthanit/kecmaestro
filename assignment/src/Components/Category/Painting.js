import React, { useState } from "react";
// import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import {Card, CardImg, CardBody,
  CardTitle,Row,Col,Container} from 'reactstrap';

import "./Painting.css";
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
        <h3>PAINTING WORKS</h3>
    <br></br><br></br>
        <div className="App">
        <Container>
     <Row>
      <Col md={4}>   
      <Card>
        <CardImg top width="416px" src="https://thumbs.dreamstime.com/b/new-stylish-painting-work-your-expensive-design-high-resolution-photo-142705507.jpg" alt="Card image cap" height={325} />
        <CardBody>
          <h2><CardTitle>Craft Works</CardTitle></h2>
         
        </CardBody>
      </Card>
      
      </Col>
      <Col md={4}>   
      <Card>
        <CardImg top width="416px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2z5cSKNGZZvmPUiKFiO_Xy9Jl9_x5fvrnWQ&usqp=CAU" alt="Card image cap" height={325} />
        <CardBody>
          <h2><CardTitle>Pencil Sketching</CardTitle></h2>
         
        </CardBody>
      </Card>
       
      </Col>


        

      <Col md={4}>   
      <Card>
        <CardImg top width="416px" src="https://artdependence.com/media/10939/screenshot-2021-10-08-at-90912-am.png?width=723&height=504" alt="Card image cap" height={325} />
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
        <CardImg top width="416px" src="https://www.cmuse.org/wp-content/uploads/2020/05/learn-oil-painting-lessons-online.jpg" alt="Card image cap" height={325} />
        <CardBody>
          <h2><CardTitle>Clay Toys</CardTitle></h2>
          
        </CardBody>
      </Card>
      
      </Col>
      <Col md={4}>   
      <Card>
        <CardImg top width="416px" src="https://www.samanthasbell.com/wp-content/uploads/2016/12/20161229_203135.jpg" alt="Card image cap" height={325}/>
        <CardBody>
          <h2><CardTitle>Fuse Beads</CardTitle></h2>
          
        </CardBody>
      </Card>
      
      </Col>
      <Col md={4}>   
      <Card>
        <CardImg top width="416px" src="https://cdn.britannica.com/33/6933-004-CBC98485/Peasant-Dance-wood-Elder-Pieter-Bruegel-Kunsthistorisches.jpg" alt="Card image cap" height={325} />
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
        <CardImg top width="416px" src="https://cdn.homedit.com/wp-content/uploads/2020/10/Abstract-wall-painting-on-budget.jpg" alt="Card image cap" height={325} />
        <CardBody>
          <h2><CardTitle>Gifts</CardTitle></h2>
        
        </CardBody>
      </Card>
      
      </Col>
      <Col md={4}>   
      <Card>
        <CardImg top width="416px" src="https://royalthaiart.com/wp-content/uploads/2020/11/abstract-pagoda-painting.jpg" alt="Card image cap" height={325}/>
        <CardBody>
          <h2><CardTitle>Basket Weaving</CardTitle></h2>
        
        </CardBody>
      </Card>
      
      </Col>
      <Col md={4}>   
      <Card>
        <CardImg top width="416px" src="https://thumbs.dreamstime.com/b/oil-painting-landscape-colorful-autumn-trees-abstract-style-hand-painted-impressionist-191757951.jpg" alt="Card image cap" height={325} />
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