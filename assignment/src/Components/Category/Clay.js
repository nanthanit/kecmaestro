import React, { useState } from "react";
// import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import {Card, CardImg, CardBody,
  CardTitle,Row,Col,Container} from 'reactstrap';

import "./Clay.css";
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
        <CardImg top width="416px" src="https://thumbs.dreamstime.com/b/vinnytsia-ukraine-handmade-authorial-ceramic-clay-funny-animal-mouse-cat-toys-sale-vinnytsia-ukraine-handmade-hand-148769159.jpg" alt="Card image cap" height={325} />
        <CardBody>
          <h2><CardTitle>Craft Works</CardTitle></h2>
         
        </CardBody>
      </Card>
      
      </Col>
      <Col md={4}>   
      <Card>
        <CardImg top width="416px" src="https://i.etsystatic.com/21308837/r/il/26c1c0/3540293650/il_fullxfull.3540293650_dohr.jpg" alt="Card image cap" height={325} />
        <CardBody>
          <h2><CardTitle>Pencil Sketching</CardTitle></h2>
         
        </CardBody>
      </Card>
       
      </Col>


        

      <Col md={4}>   
      <Card>
        <CardImg top width="416px" src="https://thumbs.dreamstime.com/b/ceramic-clay-figure-toys-handmade-handcrafted-fantastic-imaginary-animals-sale-ethno-festival-ceramic-clay-figure-163492312.jpg" alt="Card image cap" height={325} />
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
        <CardImg top width="416px" src="https://i.dawn.com/primary/2015/10/5624b2604c011.jpg" alt="Card image cap" height={325} />
        <CardBody>
          <h2><CardTitle>Clay Toys</CardTitle></h2>
          
        </CardBody>
      </Card>
      
      </Col>
      <Col md={4}>   
      <Card>
        <CardImg top width="416px" src="http://dhruvaart.com/uploads/media/2021/thumb-sm/screen-1.jpg" alt="Card image cap" height={325}/>
        <CardBody>
          <h2><CardTitle>Fuse Beads</CardTitle></h2>
          
        </CardBody>
      </Card>
      
      </Col>
      <Col md={4}>   
      <Card>
        <CardImg top width="416px" src="http://dhruvaart.com/uploads/media/2021/thumb-sm/nandi-ganesh.jpg" alt="Card image cap" height={325} />
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