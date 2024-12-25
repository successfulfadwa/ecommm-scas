import Footer from "@/components/footer"; 
import PageIntro from "@/components/page-intro";
import ProductsFeatured from "@/components/products-featured";
import Subscribe from "@/components/subscribe";

import Layout from "../layouts/Main";

const IndexPage = () => {
  return (
    <Layout>
      <PageIntro />

      <section className="featured">
        <div className="container">
          <article
            style={{ backgroundImage: "url(/images/featured-1.jpg)" }}
            className="featured-item featured-item-large"
          >
            <div className="featured-item__content">
              <h3>Les nouvelles collections de sacs sont arrivées !</h3>
              <a href="#" className="btn btn--rounded">
                Voir la collection
              </a>
            </div>
          </article>

          <article
            style={{ backgroundImage: "url(/images/featured-2.jpg)" }}
            className="featured-item featured-item-small-first"
          >
            <div className="featured-item__content">
              <h3>Sacs à main en édition limitée à partir de 99,99 $</h3>
              <a href="#" className="btn btn--rounded">
                Plus de détails
              </a>
            </div>
          </article>

          <article
            style={{ backgroundImage: "url(/images/featured-3.jpg)" }}
            className="featured-item featured-item-small"
          >
            <div className="featured-item__content">
              <h3>Vente d'été sur les sacs</h3>
              <a href="#" className="btn btn--rounded">
                VOIR TOUT
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <header className="section__intro">
            <h4>Pourquoi choisir Hanan Naji ?</h4>
          </header>

          <ul className="shop-data-items">
            <li>
              <i className="icon-shipping" />
              <div className="data-item__content">
                <h4>Livraison gratuite</h4>
                <p>
                  Toutes les commandes supérieures à 199 $ bénéficient de la
                  livraison gratuite via USPS First Class Mail.
                </p>
              </div>
            </li>

            <li>
              <i className="icon-payment" />
              <div className="data-item__content">
                <h4>Paiements faciles</h4>
                <p>
                  Tous les paiements sont traités instantanément via un
                  protocole de paiement sécurisé.
                </p>
              </div>
            </li>

            <li>
              <i className="icon-cash" />
              <div className="data-item__content">
                <h4>Garantie de remboursement</h4>
                <p>
                  Si un article arrive endommagé ou si vous changez d'avis,
                  vous pouvez le renvoyer pour un remboursement complet.
                </p>
              </div>
            </li>

            <li>
              <i className="icon-materials" />
              <div className="data-item__content">
                <h4>Qualité supérieure</h4>
                <p>
                  Conçu pour durer, chaque produit est fabriqué avec les meilleurs matériaux.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <ProductsFeatured />
      <Subscribe />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
