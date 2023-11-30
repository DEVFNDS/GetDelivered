
export default function Header({ openLoginModal, openRegistrationModal }) {
  return (
    <nav className="navbar">
      <img  className="logo" src="\assets\logo.png" alt=""/>    
            <div className="navbar-search">
                <input type="text" placeholder="Search for products"/>
                <button type="submit"><i className="fas fa-search"></i></button>
            </div>
            <div className="navbar-delivery">
                <a href="!#"><i className="fas fa-car"></i></a>
                <span>Delivery to L5R1R1</span>
            </div>

      <div className="navbar-login-register">
        <a href="!#" className="login-header" onClick={openLoginModal}>
          Login
        </a>
        <a href="!#" className="login-header" onClick={openRegistrationModal}>
          Register
        </a>
      </div>
      
      <div className="navbar-cart">
                <button ><i className="fas fa-shopping-cart"></i></button>
                <span id="count-header" className="cart-count">0</span>
            </div>
    </nav>
  );
}
