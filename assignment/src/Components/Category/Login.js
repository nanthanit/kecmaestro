import React from "react";
// import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import './Login.css';
import {Card, CardImg, CardBody,
  CardTitle,Row,Col,Container} from 'reactstrap';


const Navbar = () => {
 
  return (
    <>
    
    <center><br></br>
       
    <br></br><br></br>
        <div className="App">
<Container>
     <Row>
      <Col md={5}>   
      <Card>
        <CardImg top width="555px" src="https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201201191109145173-5d9880e6e35211e8b0f10242ac110002.jpg" alt="Card image cap" height={555} />
        
      </Card>
      </Col>

      <Col md={1}>   
      
      </Col>
      <Col md={6}><br></br><br></br><br></br>
      <div class="container">
  <div class="login">
    <h1><u>LOGIN FORM</u></h1><br></br>
    <form method="post" action="">
        <h4>Enter Username</h4>
      <input type="text"   className="form-control" placeholder="Username "/><br></br>
      <h4>Enter Password</h4>
      <input type="password"  className="form-control" placeholder="Password"/>
      
     <div className="buttons">
    
      <button type="reset" class="btn btn-danger">Reset</button>
      <button type="button" class="btn btn-primary">Login</button>
     </div>
    </form>
  </div>
 
 
</div>
        
   
      </Col>

      
      </Row>
      </Container>
      </div>
    </center>
   </>
  );
};

export default Navbar;