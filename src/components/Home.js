import React, { useState } from "react";
import Layout from "./Layout";
import SearchForm from "./SearchForm";
import useFetch from "./useFetch";

const Home = () => {
  const [searchForm, setSearchForm] = useState("");
  const { data, isLoading, isError } = useFetch(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + searchForm
  );

  return (
    <section className="home">
      <SearchForm searchForm={searchForm} setSearchForm={setSearchForm} />
      <div className="container">
        {isLoading && <div className="loader"></div>}
        {data && <Layout data={data.drinks} />}
        {isError && <h2>{isError}</h2>}
      </div>
    </section>
  );
};

export default Home;
