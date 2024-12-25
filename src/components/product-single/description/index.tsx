type ProductDescriptionType = {
  show: boolean;
};

const Description = ({ show }: ProductDescriptionType) => {
  const style = {
    display: show ? "flex" : "none",
  };

  return (
    <section style={style} className="product-single__description">
      <div className="product-description-block">
        <i className="icon-cart" />
        <h4>Détails et description du produit</h4>
        <p>
          Sac "Summer Vibes" avec un design chic et moderne. <br />
          Fabriqué en matériaux résistants, parfait pour toutes vos tenues.
        </p>
      </div>
      <div className="product-description-block">
        <i className="icon-cart" />
        <h4>Détails et description du produit</h4>
        <p>
          Sac pratique et élégant. <br />
          Idéal pour un usage quotidien ou une sortie spéciale.
        </p>
      </div>
    </section>
  );
};

export default Description;
