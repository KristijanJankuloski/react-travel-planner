import '/favicon.svg';
import './Header.css';

function Header() {
    return ( <header className='text-black bg-light'>
        <div className="container d-flex justify-content-around align-items-center">
            <a className="" href="/"><img src="/favicon.svg" className='travel-img' alt="travel icon" /></a>  
            <h2 className='display-2'>Travel planner</h2>
        </div>
    </header> );
}

export default Header;