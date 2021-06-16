import React from "react";

let currentDate = new Date();
let CurrentYear = currentDate.getFullYear();


function Footer() {
    return <div>
    <footer>
        <p>copyright © {CurrentYear}</p>
    </footer>
    </div>
}

export default Footer;