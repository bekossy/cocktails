import React from "react";
import Cocktails from "./Cocktails";

const Layout = (props) => {
  return (
    <div className="content">
      <h2>Cocktails</h2>
      {props.data ? (
        <div className="cocktail-container">
          {props.data.map((cocktails) => {
            return <Cocktails {...cocktails} key={cocktails.idDrink} />;
          })}
        </div>
      ) : (
        <div>
          <h2>No Cocktails Matched Your Search Criteria</h2>
        </div>
      )}
    </div>
  );
};

export default Layout;
