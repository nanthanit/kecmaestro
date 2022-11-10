import React, { useState } from "react";
// import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import {Card, CardImg, CardBody,
  CardTitle,Row,Col,Container} from 'reactstrap';

import "./Wood.css";
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
        <h3>WOOD CARVING</h3>
    <br></br><br></br>
        <div className="App">
        <Container>
     <Row>
      <Col md={4}>   
      <Card>
        <CardImg top width="416px" src="https://nebula.wsimg.com/b6d346e97bd886f7412c6d50eb44efc0?AccessKeyId=0AEDCBEE75EDEBF920BC&disposition=0&alloworigin=1" alt="Card image cap" height={325} />
        <CardBody>
          <h2><CardTitle>Craft Works</CardTitle></h2>
         
        </CardBody>
      </Card>
      
      </Col>
      <Col md={4}>   
      <Card>
        <CardImg top width="416px" src="https://medias.gazette-drouot.com/prod/medias/mediatheque/70058.jpg" alt="Card image cap" height={325} />
        <CardBody>
          <h2><CardTitle>Pencil Sketching</CardTitle></h2>
         
        </CardBody>
      </Card>
       
      </Col>


        

      <Col md={4}>   
      <Card>
        <CardImg top width="416px" src="https://yokosojapanesegardens.com/media/catalog/23/buy-ranma-suzaku-antique-japanese-wood-carving-panel-for-sale-23010130-03.jpg" alt="Card image cap" height={325} />
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
        <CardImg top width="416px" src="https://webneel.com/daily/sites/default/files/images/daily/02-2014/6-wooden-carvings.preview.jpg" alt="Card image cap" height={325} />
        <CardBody>
          <h2><CardTitle>Clay Toys</CardTitle></h2>
          
        </CardBody>
      </Card>
      
      </Col>
      <Col md={4}>   
      <Card>
        <CardImg top width="416px" src="https://artincontext.org/wp-content/uploads/2022/06/Wood-Carving-Art.jpg" alt="Card image cap" height={325}/>
        <CardBody>
          <h2><CardTitle>Fuse Beads</CardTitle></h2>
          
        </CardBody>
      </Card>
      
      </Col>
      <Col md={4}>   
      <Card>
        <CardImg top width="416px" src="https://mymodernmet.com/wp/wp-content/uploads/2017/01/wood-carving-6.jpg" alt="Card image cap" height={325} />
        <CardBody>
          <h2><CardTitle>Wood Carving</CardTitle></h2>
          
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