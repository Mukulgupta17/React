import { Col, Container, PlaceholderButton, Row } from 'react-bootstrap';
import './App.css';
import Footer from './component/Footer/Footer';
import Footer1 from './component/Footer/Footer1';
import Cart from './component/Header/Cart';
import Header from './component/Header/Header';
import Prj1 from './component/Header/Prj1';
import Img from './component/Navbar/Img';
import Navbar from './component/Navbar/Navbar';
import Pp from './component/Pp';

function App() {
  // const footerArr = [
  //   {
  //     text: '1st txt for footer container',
  //     button: '1st button text'
  //   },
  //   {
  //     text: '2st txt for footer container',
  //     button: '2st button text'
  //   },
  //   {
  //     text: '3st txt for footer container',
  //     button: '3st button text'
  //   }
  // ]
  return (
    <div className=''>

      {/* <Header type={'text'} placeHol={'my-num'} /> */}
      {/* <Header type={'text'} placeHol={'my-val'} value={'mukul'} /> */}
      {/* <Navbar/> */}
      {/* <h1>mukul</h1> */}
      <Container>
      {/* <Img/> */}
      {/* <Footer/> */}
{/*      
      {<Row>
        {footerArr.map((val,index) =>
        <Col key={index} lg={3} sm={4} xs={6}>
       <Footer1  text={val.text} btn={val.button}/>
       </Col>
        )}
       </Row> }  */}
       <Prj1/>
  

       {/* <div className='d-flex justify-content-around'>
       <Footer1  text={"this is mukul gupta i am from khagone and i am still a student"} btn={"submit"}/>
       <Footer1  text={"this is mukul gupta i am from khagone and i am still a student"} btn={"submit"}/>
       <Footer1  text={"this is mukul gupta i am from khagone and i am still a student"} btn={"submit"}/>
       <Footer1  text={"this is mukul gupta i am from khagone and i am still a student"} btn={"submit"}/>

       </div> */}
       
       
       </Container>

       <Cart/>
       <Pp/>
       
    </div>
  );
}

export default App;

// import React from 'react'
// import './App.css'


// function App() {
//   return (
//     <>
//     <div className='header'>
//       amazon
//     </div>
//     <ol>
//         <li>
//            mukul 
//         </li>
//         <li>gupta</li>
//       </ol>
//       </>
//   )
// }
//  export default App;
