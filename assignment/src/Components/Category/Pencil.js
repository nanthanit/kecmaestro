import React, { useState } from "react";
// import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import {Card, CardImg, CardBody,
  CardTitle,Row,Col,Container} from 'reactstrap';

import "./Pencil.css";
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
        <h3>PENCIL SKETCHING</h3>
    <br></br><br></br>
        <div className="App">
        <Container>
     <Row>
      <Col md={4}>   
      <Card>
        <CardImg top width="416px" src="https://www.creativeartcourses.org/wp-content/uploads/pencil-sketching-1024x768-1400x1050.jpg" alt="Card image cap" height={325} />
        <CardBody>
          <h2><CardTitle>Craft Works</CardTitle></h2>
         
        </CardBody>
      </Card>
      
      </Col>
      <Col md={4}>   
      <Card>
        <CardImg top width="416px" src="https://images.saatchiart.com/saatchi/1250006/art/8527502/7591459-HSC00923-6.jpg" alt="Card image cap" height={325} />
        <CardBody>
          <h2><CardTitle>Pencil Sketching</CardTitle></h2>
         
        </CardBody>
      </Card>
       
      </Col>


        

      <Col md={4}>   
      <Card>
      <a href="/Productoverview">
        <CardImg top width="416px" src="https://s32625.pcdn.co/wp-content/uploads/2018/04/lee-hammond_Swan_graphite-pencil-drawing-e1551989792469-1024x756.jpg.optimal.jpg" alt="Card image cap" height={325} />
        <CardBody>
          <h2><CardTitle>Painting Works</CardTitle></h2>
         
        </CardBody>
        </a>
      </Card>
      
      </Col>
      
      </Row>
      <br></br><br></br>
      <Row>
      <Col md={4}>   
      <Card>
        <CardImg top width="416px" src="https://ranartblog.com/imagespencil/mink-pencil-drawing.jpg" alt="Card image cap" height={325} />
        <CardBody>
          <h2><CardTitle>Clay Toys</CardTitle></h2>
          
        </CardBody>
      </Card>
      
      </Col>
      <Col md={4}>   
      <Card>
        <CardImg top width="416px" src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/107215812/original/77a3e417e0ad43488bc912df4c3c9ba20b214981/pencil-sketch-of-your-own-picture-can-be-drawn-at-low-cost.png" alt="Card image cap" height={325}/>
        <CardBody>
          <h2><CardTitle>Fuse Beads</CardTitle></h2>
          
        </CardBody>
      </Card>
      
      </Col>
      <Col md={4}>   
      <Card>
        <CardImg top width="416px" src="https://images.artbrokerage.com/artthumb/yerger_71175_10/360x322/John_Yerger_Untitled_Drawing_1967_17x21.jpg" alt="Card image cap" height={325} />
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
        <CardImg top width="416px" src="https://cc-prod.scene7.com/is/image/CCProdAuthor/AdobeStock_184434080?$pjpeg$&jpegSize=200&wid=690" alt="Card image cap" height={325} />
        <CardBody>
          <h2><CardTitle>Gifts</CardTitle></h2>
        
        </CardBody>
      </Card>
      
      </Col>
      <Col md={4}>   
      <Card>
        <CardImg top width="416px" src="data:image/jpeg;base64,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" alt="Card image cap" height={325}/>
        <CardBody>
          <h2><CardTitle>Basket Weaving</CardTitle></h2>
        
        </CardBody>
      </Card>
      
      </Col>
      <Col md={4}>   
      <Card>
        <CardImg top width="416px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIZu6jFWikT9dww5-SyCoYJpDAgnohApZe7A&usqp=CAU" alt="Card image cap" height={325} />
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