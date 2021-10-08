import { postClient } from '$lib/graphql-client'
import { gql } from 'graphql-request'
import slugify from 'slugify'

export const post = async req => {
  const { title, excerpt, markdownContent, tags } = req.body
  try {
    const query = gql`
      mutation AddPost(
        $title: String!
        $slug: String!
        $date: Date!
        $excerpt: String!
        $markdownContent: String!
        $tags: [String!]
      ) {
        createPost(
          data: {
            title: $title
            slug: $slug
            date: $date
            excerpt: $excerpt
            markdownContent: $markdownContent
            tags: $tags
          }
        ) {
          id
        }
      }
    `
    // variables
    const variables = {
      title,
      slug: slugify(title),
      date: new Date().toISOString(),
      excerpt,
      markdownContent,
      tags: [tags],
    }

    // set headers
    // client.setHeaders({
    //   authorization: `Bearer ${process.env['POST_TOKEN']}`,
    // })
    const id = await postClient.request(query, variables)
    // reset headers otherwise users can see posts in draft
    // client.setHeaders({})

    return {
      status: 200,
      body: id,
    }
  } catch (error) {
    return {
      status: 500,
      body: { error: error.message },
    }
  }
}
