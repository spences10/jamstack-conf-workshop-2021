import { GraphQLClient } from 'graphql-request'
const GRAPHQL_ENDPOINT = process.env['GRAPHQL_ENDPOINT']
const POST_TOKEN = process.env['POST_TOKEN']

export const client = new GraphQLClient(GRAPHQL_ENDPOINT)

export const postClient = new GraphQLClient(GRAPHQL_ENDPOINT, {
  headers: { Authorization: `Bearer ${POST_TOKEN}` },
})
