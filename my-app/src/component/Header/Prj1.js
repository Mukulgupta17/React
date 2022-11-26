import { Col, Container, Row } from "react-bootstrap";
import Footer1 from "../Footer/Footer1";
import NavbarBootstrap from "../Navbar/Navbar";

const img1 = "./images/shirt.png"
const img2 = "./images/shoes.png"
const img3 = "./images/tshirt.png"
var imgs;

const Prj1 = ()=>{
    return (
     <>
          <NavbarBootstrap />

     <Container>
     <br/>
     <div className=''>
     <Row>
        <Col  lg={4} sm={6} xs={12}>
     <Footer1   imgs={img1} text={"Mens Shirt"} btn={"Add To Cart"} Rs={"Rs.  $60"}/>
     </Col>

     <Col  lg={4} sm={6} xs={12}>    
      <Footer1   imgs={img2} text={"Mens shoes"} btn={"Add To Cart"} Rs={"Rs.  $80"}/> 
     </Col>
     <Col  lg={4} sm={6} xs={12}>    

     <Footer1   imgs={img3} text={"Mens T-Shirt"} btn={"Add To Cart"} Rs={"Rs.  $50"}/>
     </Col>

     </Row>
     </div>
     </Container>
     </>
    );
};

export default Prj1;