import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

/* instalar iconos:
npm install --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-brands-svg-icons
npm install --save @fortawesome/react-fontawesome
*/

const Footer = () => {
      return (
        <footer className="bg-secondary text-light py-4">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h2>OrtFlix</h2>
                <p>Todos los derechos reservados.</p>
              </div>
              <div className="col-md-6">
                <ul className="list-unstyled social-icons">
                  <li>
                    <a href="https://www.facebook.com/tu_pagina_de_facebook">
                    <FontAwesomeIcon icon={faFacebook} />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/tu_cuenta_de_twitter">
                    <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/tu_cuenta_de_instagram">
                    <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
  );
};

export default Footer;