
// import Footer from './Footer';
import { Col, Row } from 'react-bootstrap';
import Footer from './Footer';
import './footer1.css'






const Footer1 =({text,btn ,imgs,Rs})=> {
//  const fot = <Footer/>   

    return (
         <Row>

            < Col lg={4} sm={6} xs={12}>
        <div className='cnt' >
         {/* <img src={img1}/> */}
         <br/>
         <h3 className='h3'>MG Courier</h3>
                <img className='imag' src={imgs}/>;
            <p className='para'>
              {text} 
            </p>
            <h4>{Rs}</h4>
            <button className='butn'  >{btn}</button>
        </div>
        </Col>
        
        </Row>

//        <Col   lg={4} sm={6} xs={12}>

//        <div className='cnt'>
//          {/* <img src={img1}/> }
//          <br/>
//          <h3>MG Courier</h3>

//                 <img className='img' src={img2}/>
//             <p className='para'>
//               {text} 
//             </p>
//             <button className='butn' >{btn}</button>
//         </div>
//        </Col>



// <Col lg={4} sm={6} xs={12}>
// <div className='cnt'>
//          {/* <img src={img1}/> */}
//          <br/>
//          <h3>MG Courier</h3>

//                 <img className='img' src={img3}/>
//             <p className='para'>
//               {text} 
//             </p>
//             <button className='butn' >{btn}</button>
//         </div>

// </Col> */



      
        
    );
};

// const play =({text,imgs,Rs,btn})=>{
//     return(
//         // <div>
//         <div className='cnt' >
        
        
//         <h3 className='h3'>MG Courier</h3>
//                <img className='img' src={imgs}/>
//            <p className='para'>
//              {text} 
//            </p>
//            <h4>{Rs}</h4>
//            <button className='butn' onClick={play}>{btn}</button>;

//        </div>
//         // console.log("this is mukul gupta and from khargone mp")

//     ); 
// };
export default Footer1;