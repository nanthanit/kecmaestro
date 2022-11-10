import React from "react";
// import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import './Profile.css';
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
    <center><h1><u>STUDENT PROFILE FORM</u></h1></center><br></br>
    <form method="post" action="">
    <h5>Name</h5>
      <input type="text"  className="form-control" placeholder="Name" name="name" required/>
        <h5>Roll No</h5>
      <input type="text"   className="form-control" placeholder="Roll No" name="rollno" required/><br></br>
      <h5>Age</h5>
      <input type="text"  className="form-control" name="age" placeholder="Age" required/>
      <h5>Skills</h5>
      <input type="text"  className="form-control" name="skill" placeholder="Skill" required/>
      <h5>Department</h5>
      <input type="text"  className="form-control" name="dept" placeholder="Department" required/>
      <h5>Bio</h5>
      <input type="text"  className="form-control" name="bio" placeholder="Bio" required/>
      <h5>Email</h5>
      <input type="email"  className="form-control" name="email" placeholder="Email" required/>
      <h5>Contact Number</h5>
      <input type="text"  className="form-control" name="phno" placeholder="Contact Number" required/>
      <h5>Personal Insta Id (If Available)</h5>
      <input type="text"  className="form-control" name="instaID" placeholder="Insta Id"/>
      <h5>GitHub ID</h5>
      <input type="text"  className="form-control" name="githubID" placeholder="Github Id"/> 
     
    
      <h5>Upload Your Photo Picture</h5><br></br>
      <input type="file" name="dp" id="fileToUpload" required/><br></br><br></br>
      
  
    
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