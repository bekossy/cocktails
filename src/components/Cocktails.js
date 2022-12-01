import React from "react";
import { Link } from "react-router-dom";

const Cocktails = (props) => {
  const { strDrink, strGlass, strAlcoholic, strDrinkThumb, idDrink } = props;
  return (
    <div className="cocktail">
      <div className="cocktail-img">
        <img src={strDrinkThumb} alt="" />
      </div>

      <div className="cocktail-body">
        <h2>{strDrink}</h2>
        <h3>{strGlass}</h3>
        <p>{strAlcoholic}</p>
      </div>

      <button className="btn">
        <Link to={`/cocktail/${idDrink}`}>Details</Link>
      </button>
    </div>
  );
};

export default Cocktails;
