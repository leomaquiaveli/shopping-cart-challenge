import { ApolloClient, InMemoryCache } from "@apollo/client";


export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oomw7y0inh01xx85u692oi/master',
    cache: new InMemoryCache()
})