import React from "react";
import marketStall from "./../img/market-stall.jpg"

function Header() {
  return (
    <React.Fragment>
    <div className="header-container" style={{ backgroundImage: `url(${marketStall})` }}>
    <h1>Avery's Organics</h1>
    {/* <img src={marketStall} alt="Market stall with vegetables"  /> */}
    </div>
    <br/><br/>
    </React.Fragment>
  );
}

export default Header;