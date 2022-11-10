import React from 'react'
import {Card, CardImg, CardBody,
    CardTitle,Row,Col,Container} from 'reactstrap';
import Navbar from '../Navbar/Navbar';
import Carousel from '../Carousel/Carousel';
import './Catalog.css';



export default function Catalog() {
  return (
    <div className="App">
        
        <Navbar />
      <Carousel/><br></br>
    
<Container>
     <Row>
        
      <Col md={4}> 
      <a href='/Craft'>  
      <Card>
        <CardImg top width="416px" src="https://rukminim1.flixcart.com/image/416/416/l13whow0/paper/s/6/3/paper-for-origami-set-of-100-1-craft-paper-sharma-business-original-imagcranf4fyj6ug.jpeg?q=70" alt="Card image cap" height={416} />
        <CardBody>
          <center><h4><CardTitle>Craft Works</CardTitle></h4></center>
         
        </CardBody>
      </Card>
      </a>
      </Col>
      
      <Col md={4}> 
      <a href='/Pencil'>    
      <Card>
        <CardImg top width="416px" src="https://i.pinimg.com/236x/f5/10/e8/f510e8471bb0208a1a16999f8e7038bc--simple-tree-house-tree-house-art.jpg" alt="Card image cap" height={416} />
        <CardBody>
          <center><h4><CardTitle>Pencil Sketching</CardTitle></h4></center>
         
        </CardBody>
      </Card>
      </a>
       
      </Col>


        

      <Col md={4}>   
      <a href='/Painting'>
      <Card>
        <CardImg top width="416px" src="https://i.pinimg.com/236x/a8/43/5d/a8435d51c2ac19bb4271b642a8b7f506.jpg" alt="Card image cap" height={416} />
        
        <CardBody>
          <center><h4><CardTitle>Painting Works</CardTitle></h4></center>
          
         
        </CardBody>
      </Card>
      </a>
      </Col>
     
      
      </Row>
      <br></br><br></br>
      {/* <Row>
      
      <Col md={4}> 
      <a href='/Wood'>  
      <Card>
        <CardImg top width="416px" src="https://i.pinimg.com/originals/6d/7b/61/6d7b61c52c3dd52323310e8e9e1a8a85.jpg" alt="Card image cap" height={416} />
        <CardBody>
          <center><h4><CardTitle>Wood Carving</CardTitle></h4></center>
          
        </CardBody>
      </Card>
      </a>
      
      </Col>
      <Col md={4}> 
      <a href='/Clay'>  
      <Card>
        <CardImg top width="416px" src="https://i0.wp.com/blog.treasurie.com/wp-content/uploads/2020/01/polymer-clay-tutorial-4.jpg" alt="Card image cap" height={416} />
        <CardBody>
          <center><h4><CardTitle>Clay Toys</CardTitle></h4></center>
          
        </CardBody>
      </Card>
      </a>
      </Col>
      <Col md={4}>   
      <Card>
        <a href='/Gift'>
        <CardImg top width="416px" src="https://png.pngtree.com/png-clipart/20201123/ourlarge/pngtree-gold-ribbon-gift-box-with-big-and-small-size-png-image_2471319.jpg" alt="Card image cap" height={416} />
        <CardBody>
          <center><h4><CardTitle>Gifts</CardTitle></h4></center>
        
        </CardBody>
        </a>
      </Card>
      
      </Col>
      
      </Row> */}

      <br></br><br></br>
      
      
      
      </Container>
      
      </div>
  )
}
