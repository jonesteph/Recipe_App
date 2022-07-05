import React, { useState } from "react";

function SingleRecipe({recipe, index, handleDeleteRecipe}){
  const clickDelete = () => handleDeleteRecipe(index)
  let recipeRow = (
    <tr>
      <td><p>{(recipe.name)}</p></td>
      <td><p>{(recipe.cuisine)}</p></td>
      <td><img src={recipe.photo} /></td>
      <td className="content_td"><p>{(recipe.ingredients)}</p></td>
      <td className="content_td"><p>{(recipe.preparation)}</p></td>
      <td><button name="delete" onClick={clickDelete}>Delete</button></td>
    </tr>
  )
  return recipeRow
}

export default SingleRecipe;