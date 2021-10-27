import React, { useState, useEffect} from 'react';
import RecipeInfo from './RecipeInfo';
import axios from 'axios'
import '../App.css'

const Testimonials = () => {
  
  const [recipeData, setRecipeData] = useState([])
  const [searchUrl, setSearchUrl] = useState('')
  const baseUrl = 'https://api.edamam.com/'
  const api = 'api/recipes/v2?type=public&q='
  const app_id = '&app_id=695c6d0d'
  const app_ket = '&app_key=e2ff1ff754b66b08aea4cbc4366d8f3d'
  const health = '&health=vegetarian'
  const asiaCuisine = '&cuisineType=Asian'
  

  async function fetchData () {
    axios.get(baseUrl+api+searchUrl+app_id+app_ket+health+asiaCuisine)
      //
      .then(response=>setRecipeData(response.data.hits))
      //.then(response=>console.log(response.data.hits))
      .catch(error => console.log(error))
      
  }

  useEffect(() => {
    fetchData()   
}, [])

    const handleChange = (e) => {
    setSearchUrl(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        fetchData()
        setSearchUrl('')
    }

    return (
        <div>  
          <h1 id="header" >Hungy for more!!</h1>
          <div>
            <form onSubmit={handleSubmit}>
              <label htmlFor="title" id="label">Search for more healthy foods:</label>
              <input type="text" id="title" value={searchUrl} onChange={handleChange}/>
              <button type="submit">Submit</button>
            </form>
          <RecipeInfo recipes= {recipeData} />
          </div>
        </div>
    );
};

export default Testimonials;