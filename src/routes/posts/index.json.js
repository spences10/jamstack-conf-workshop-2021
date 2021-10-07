import { client } from '$lib/graphql-client'
import { gql } from 'graphql-request'

export const get = async (req, res) => {
  try {
    const query = gql`
      query Posts {
        posts {
          title
          slug
          date
          excerpt
          tags
          coverImage {
            url
          }
        }
      }
    `
    const { posts } = await client.request(query)
    return {
      status: 200,
      body: { posts },
    }
  } catch (error) {
    return {
      status: 500,
      body: { error: error.message },
    }
  }
}
