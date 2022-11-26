import './header.css'
const Header = ({type, placeHol, value}) => {
    console.log('log',type,placeHol);
    return(
        <div>
            <h1>header</h1>
            <input className='bg-info' type={type} placeholder={placeHol} value={value}></input>
        </div>
        
    );
};

export default Header;