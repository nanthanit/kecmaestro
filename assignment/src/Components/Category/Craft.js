import React, { useState } from "react";
// import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import {Card, CardImg, CardBody,
  CardTitle,Row,Col,Container} from 'reactstrap';

import "./Craft.css";
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
        <h3>CRAFT WORKS</h3>
    <br></br><br></br>
        <div className="App">
        <Container>
     <Row>
      <Col md={4}>   
      <Card>
        <CardImg top width="416px" src="https://m.media-amazon.com/images/I/71ZI8quxmZL._SL1500_.jpg" alt="Card image cap" height={325} />
        <CardBody>
          <h2><CardTitle>Craft Works</CardTitle></h2>
         
        </CardBody>
      </Card>
      
      </Col>
      <Col md={4}>   
      <Card>
        <CardImg top width="416px" src="https://c1.wallpaperflare.com/preview/992/229/146/pottery-souvenir-traditional-art-travel-craft.jpg" alt="Card image cap" height={325} />
        <CardBody>
          <h2><CardTitle>Pencil Sketching</CardTitle></h2>
         
        </CardBody>
      </Card>
       
      </Col>


        

      <Col md={4}>   
      <Card>
        <CardImg top width="416px" src="https://www.wallpaperbetter.com/wallpaper/927/1011/828/small-paper-boats-in-water-1080P-wallpaper-middle-size.jpg" alt="Card image cap" height={325} />
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
        <CardImg top width="416px" src="https://i.ytimg.com/vi/0jDCK_RHQuI/maxresdefault.jpg" alt="Card image cap" height={325} />
        <CardBody>
          <h2><CardTitle>Clay Toys</CardTitle></h2>
          
        </CardBody>
      </Card>
      
      </Col>
      <Col md={4}>   
      <Card>
        <CardImg top width="416px" src="https://c0.wallpaperflare.com/preview/109/959/806/arts-and-crafts-background-bags-bright.jpg" alt="Card image cap" height={325}/>
        <CardBody>
          <h2><CardTitle>Fuse Beads</CardTitle></h2>
          
        </CardBody>
      </Card>
      
      </Col>
      <Col md={4}>   
      <Card>
        <CardImg top width="416px" src="https://image.made-in-china.com/2f0j00ZKjRIaSsbTcU/Cute-Panda-Ornaments-Desk-Decoration-Resin-Craft-Statue-Gold-Color-Small-Size-Gift-for-Children-Friend-Parents.jpg" alt="Card image cap" height={325} />
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
        <CardImg top width="416px" src="https://i.ytimg.com/vi/PQ-TKtODLp0/maxresdefault.jpg" alt="Card image cap" height={325} />
        <CardBody>
          <h2><CardTitle>Gifts</CardTitle></h2>
        
        </CardBody>
      </Card>
      
      </Col>
      <Col md={4}>   
      <Card>
        <CardImg top width="416px" src="https://static-01.daraz.lk/p/a9fe2225eb049fd0d24eab3f3277ea5d.jpg" alt="Card image cap" height={325}/>
        <CardBody>
          <h2><CardTitle>Basket Weaving</CardTitle></h2>
        
        </CardBody>
      </Card>
      
      </Col>
      <Col md={4}>   
      <Card>
        <CardImg top width="416px" src="https://i.ytimg.com/vi/iRAaptxuH3w/maxresdefault.jpg" alt="Card image cap" height={325} />
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