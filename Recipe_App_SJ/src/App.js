import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  const handleNewRecipe = (newRecipe) => {
    setRecipes([...recipes,newRecipe])
  }
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.
  const handleDeleteRecipe = (deleteRecipeIndex) => {
    const filteredRecipes = recipes.filter(
      (result, index) => index !== deleteRecipeIndex
    )
    setRecipes(filteredRecipes)
  }

  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} handleDeleteRecipe={handleDeleteRecipe} />
      <RecipeCreate handleNewRecipe={handleNewRecipe} />
    </div>
  );
}

export default App;
