const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const PostTemplate = path.resolve(`./src/templates/post.jsx`)

  const result = await graphql(`
    {
      allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 1000) {
        nodes {
          id
          slug
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic(result.errors)
  }

  // Create Posts and Post pages.
  // const { allMdx } = result.data
  const posts = result.data.allMdx.nodes

  // Create a page for each Post
  posts.forEach((post, index) => {
    const { slug } = post
    createPage({
      path: slug,
      component: PostTemplate,
      context: {
        id: post.id,
      },
    })
  })
}
