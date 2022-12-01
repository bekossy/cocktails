import React from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const Info = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useFetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  );

  return (
    <div className="info">
      <div className="container">
        {isLoading && <div className="loader"></div>}
        {data &&
          data.drinks.map((item) => {
            const {
              idDrink,
              strDrink,
              strDrinkThumb,
              strCategory,
              strAlcoholic,
              strGlass,
              strInstructions,
              strIngredient1,
              strIngredient2,
              strIngredient3,
              strIngredient4,
              strIngredient5,
            } = item;
            const ingredients = [
              strIngredient1,
              strIngredient2,
              strIngredient3,
              strIngredient4,
              strIngredient5,
            ];
            return (
              <section className="single" key={idDrink}>
                <button className="back">
                  <Link to={"/"}>Back Home</Link>
                </button>

                <h1>{strDrink}</h1>

                <div className="drink">
                  <img src={strDrinkThumb} alt="" />

                  <div className="drink-info">
                    <p>
                      <span className="drink-data">Name:</span> {strDrink}
                    </p>
                    <p>
                      <span className="drink-data">Category:</span>
                      {strCategory}
                    </p>
                    <p>
                      <span className="drink-data">Info:</span> {strAlcoholic}
                    </p>
                    <p>
                      <span className="drink-data">Glass:</span> {strGlass}
                    </p>
                    <p>
                      <span className="drink-data">Instructions:</span>
                      {strInstructions}
                    </p>
                    <p>
                      <span className="drink-data">ingredients :</span>
                      {ingredients.map((item, index) => {
                        return item ? <span key={index}> {item}</span> : null;
                      })}
                    </p>
                  </div>
                </div>
              </section>
            );
          })}
        {isError && <h2>{isError}</h2>}
      </div>
    </div>
  );
};

export default Info;
