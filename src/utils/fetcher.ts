// https://swr.vercel.app/docs/data-fetching
// https://dev.to/aryanjnyc/i-migrated-away-from-apollo-client-to-vercel-swr-and-prisma-graphql-request-and-you-can-too-245b
import axios from 'axios'
import { request } from 'graphql-request'
export const fetcherREST = (url) => axios.get(url).then((res) => res.data)
export const fetcherGQL = (query) => request('/api/graphql', query)
