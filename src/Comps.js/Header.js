import "../Comps.css/Header.css";

function Header() {

  function handleCLick() {

  }


    return (
        <header className="header-container">
          <div className="logo">
            <h1 className="logo-text">SquaredTriangles</h1>
          </div>
            <nav className="nav">
              <button className="nav-learn">Learn</button>
              <button className="nav-new">What's new</button>
              <button className="nav-pricing">Pricing</button>
              <button className="nav-blog">Blog</button>
              <button className="nav-sign-in">Sign in</button>
           </nav>
        </header>
    )
};

export default Header;