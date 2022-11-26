import Footer1 from "../Footer/Footer1";
import './cart.css'


// const img2 = "./images/shoes.png"




const Cart=()=>{
    let number ;
    let img1;
    return(
    
        <div className="contn">
            {/* <Footer1/> */}
            <Footer1   imgs={img1} text={"Mens Shirt"} btn={"Add To Cart"} Rs={"Rs.  $60"}/> 
             <div  className="paym">
             <button className="dec">-</button>
             <input  type={number} placeholder={60} />
             <button className="inc">+</button>
             </div>
               
            </div>
    );
};
// export default Cart;
export default Cart;