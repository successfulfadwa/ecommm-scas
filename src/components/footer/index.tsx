import Logo from "../../assets/icons/logo";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__description">
            <h6>
              <Logo /> <span>Hanan Jari Sacs</span>
            </h6>
            <p>
              Hanan Jari Sacs crée des sacs pour tous les âges, mais avant tout, pour ceux qui recherchent la mode.
            </p>
            <ul className="site-footer__social-networks">
              <li>
                <a href="#">
                  <i className="icon-facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-linkedin" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-instagram" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-youtube-play" />
                </a>
              </li>
            </ul>
          </div>

          <div className="site-footer__links">
            <ul>
              <li>Shopping en ligne</li>
              <li>
                <a href="#">Suivi de commande</a>
              </li>
              <li>
                <a href="#">Expédition et livraison</a>
              </li>
              <li>
                <a href="#">Retours</a>
              </li>
              <li>
                <a href="#">Options de paiement</a>
              </li>
              <li>
                <a href="#">Contactez-nous</a>
              </li>
            </ul>
            <ul>
              <li>Informations</li>
              <li>
                <a href="#">Cartes-cadeaux</a>
              </li>
              <li>
                <a href="#">Trouver un magasin</a>
              </li>
              <li>
                <a href="#">Newsletter</a>
              </li>
              <li>
                <a href="#">Devenir membre</a>
              </li>
              <li>
                <a href="#">Commentaires sur le site</a>
              </li>
            </ul>
            <ul>
              <li>Contact</li>
              <li>
                <a href="#">store@hananjari.com</a>
              </li>
              <li>
                <a href="#">Hotline : +1 131 138 138</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container">
        <p>DESIGN PAR ICEO.CO - © 2024. TOUS DROITS RÉSERVÉS HANAN JARI SACS.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
