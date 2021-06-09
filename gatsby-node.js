const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const queryResult = await graphql(`
    {
      postQuery: allWpPost(sort: { fields: date }) {
        nodes {
          title
          excerpt
          content
          slug
        }
      }
      recipeQuery: allWpRecipe(sort: { fields: date }) {
        nodes {
          title
          excerpt
          content
          slug
        }
      }
    }
  `)
  if (queryResult.errors) {
    reporter.panic("error loading events", queryResult.errors)
    return
  }

  const recipes = queryResult.data.recipeQuery.nodes
  recipes.forEach(node => {
    createPage({
      path: `/recipes/${node.slug}`,
      component: path.resolve(`./src/templates/recipe-post.js`),
      context: {
        slug: node.slug,
      },
    })
  })

  const posts = queryResult.data.postQuery.nodes
  posts.forEach(node => {
    createPage({
      path: `/blog/${node.slug}`,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        slug: node.slug,
      },
    })
  })
}
