
import React  from "react";


const Navbar =({ brand }) => {
    return(
        <nav class="navbar navbar-dark bg-dark border-info border border-3">
            <div class="container">           
            <img src="logo192.png" alt="" width="100" height="75"/>     
                <a className="navbar-brand text-uppercase mx-auto "  href="/">{brand}
                <img src="Rick-and-Morty.png" alt="" width="300" height="150" className="d-block mx-auto"/>
                </a>
            </div>
       </nav>
    )
}
export default Navbar