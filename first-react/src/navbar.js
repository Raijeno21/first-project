const Navbar = ({ setFlav }) => {
    return (
      <nav>
        <div className="navigate-cakes">
          <div className="nav allcakes" onClick={() => setFlav('all')}>ALL CAKES</div>
          <div className="nav chocolatemoist" onClick={() => setFlav('chocolate moist')}>CHOCOLATE MOIST</div>
          <div className="nav redvelvet" onClick={() => setFlav('red velvet')}>RED VELVET</div>
          <div className="nav chiffon" onClick={() => setFlav('vanilla chiffon')}>CHIFFON</div>
          <div className="nav mango" onClick={() => setFlav('mango madness')}>MANGO MADNESS</div>
          <div className="nav ube" onClick={() => setFlav('ube')}>UBE</div>
        </div>
        <div className="footer">
          <h1>footer here</h1>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  