import React from 'react';
function Footer() {
    const year=new Date().getFullYear();
    return (
        <div>
       <footer><p>Copyrights {year}</p></footer>
       </div>
    );
}
export default Footer;