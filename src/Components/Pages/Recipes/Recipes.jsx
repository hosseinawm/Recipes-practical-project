import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import RecipesList from "./RecipesList";
import RecipesNumber from "./RecipesNumber";
import PaginationSelector from "./Pagination";
import SkeletonLoading from "./SkeletonLoading";
import { Typography } from "@mui/material";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [recipesPerPage, setRecipesPerPage] = useState(12);
  const [page, setPage] = useState(1);
  const [totalRecipes, setTotalRecipes] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/recipes", {
          params: {
            limit: recipesPerPage,
            skip: (page - 1) * recipesPerPage,
          },
        });

        setRecipes(response.data.recipes);
        setTotalRecipes(response.data.total);
        setLoading(false);
      } catch (error) {
        console.log("this is error : ", error);
      }
    };
    fetchData();
  }, [recipesPerPage, page]);

  const totalPage = Math.ceil(totalRecipes / recipesPerPage);

  const handleChange = (e) => {
    setRecipesPerPage(e.target.value);
  };

  const onChange = (e, value) => {
    setPage(value);
  };

  return (
    <>
      <Typography variant="h3" sx={{ marginBottom: 3 }} color="#081c15">
        Recipes List
      </Typography>
      <RecipesNumber
        recipesPerPage={recipesPerPage}
        handleChange={handleChange}
      />
      {loading ? (
        <SkeletonLoading recipesPerPage={recipesPerPage} loading={loading} />
      ) : (
        <RecipesList recipes={recipes} />
      )}

      <PaginationSelector
        onChange={onChange}
        totalPage={totalPage}
        page={page}
      />
    </>
  );
};
export default Recipes;
