import React, { useState } from "react";

function RecipeCreate({handleNewRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: ""
  }
  const [formData, setFormData] = useState({ ...initialFormState })
  
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    })
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formData)
    handleNewRecipe(formData)
    setFormData({ ...initialFormState })
  }
  
  
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                id="name"
                type="text"
                name="name"
                onChange={handleChange}
                value={formData.name}
                placeholder="Name"
              />
            </td>
            <td>
              <input
                id="cuisine"
                type="text"
                name="cuisine"
                onChange={handleChange}
                value={formData.cuisine}
                placeholder="Cuisine"
              />
            </td>
            <td>
              <input
                id="photo"
                type="text"
                name="photo"
                onChange={handleChange}
                value={formData.photo}
                placeholder="URL"
              />
            </td>
            <td>
              <textarea
                id="ingredients"
                name="ingredients"
                onChange={handleChange}
                value={formData.ingredients}
                placeholder="Ingredients"
                rows={3}
              />
            </td>
            <td>
              <textarea
                id="preparation"
                name="preparation"
                onChange={handleChange}
                value={formData.preparation}
                placeholder="Preparation"
                rows={3}
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
