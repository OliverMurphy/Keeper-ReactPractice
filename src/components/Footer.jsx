import React from "react";

function Footer() {
    var year = new Date().getFullYear();
    return (
        <footer>
            <p>Copyright {'\u00a9'} {year}</p>
        </footer>  
    );
}

export default Footer;