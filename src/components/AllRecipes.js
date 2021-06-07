import React from "react"
import TagsList from "./TagsList"
import RecipesList from "./RecipesList"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allContentfulEntry {
      nodes {
        id
        ... on ContentfulRecipes {
          id
          prepTime
          servings
          cookTime
          title
          image {
            gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
          }
          content {
            tags
          }
        }
      }
    }
  }
`

const AllRecipes = () => {
  const data = useStaticQuery(query)
  const recipes = data.allContentfulEntry.nodes

  return (
    <section className="recipes-container">
      <TagsList recipes={recipes} />
      <RecipesList recipes={recipes} />
    </section>
  )
}

export default AllRecipes
