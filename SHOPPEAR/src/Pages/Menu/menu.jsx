import React from "react";
import Banner from "../../Components/Banner/banner";
import SectionProductDisplay from "../../Components/SectionProductDisplay/SectionProductDisplay";

function menuPrincipal() {
  return (
    <div>
      <Banner />
      <div className="titulo-centrado">
        <h2>Nuestros Productos</h2>
        <div className="hr-container">
          <hr />
        </div>
      </div>
      <br />
      <SectionProductDisplay />
    </div>
  );
}

export default menuPrincipal;
