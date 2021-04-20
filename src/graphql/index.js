import { ApolloClient, InMemoryCache, ApolloLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
// import { ToastsStore } from "react-toasts";
import { createUploadLink } from "apollo-upload-client";
import { getToken } from "../helpers/localStorage";

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: getToken() ? `Bearer ${getToken()}` : "",
    },
  };
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      // ToastsStore.error(message)
      console.log(message)
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

let url = "https://ednotes.herokuapp.com/graphql";

const uploadLink = createUploadLink({ uri: url });

// combining auth, error and upload link
const link = ApolloLink.from([errorLink, authLink, uploadLink]);

const cache = new InMemoryCache();

const client = new ApolloClient({
  link,
  onError: errorLink,
  cache,
});
export default client;
