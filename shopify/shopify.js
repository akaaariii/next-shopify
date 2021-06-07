import Client from "shopify-buy";

const client = Client.buildClient({
  domain: "home-appliances-ca.myshopify.com",
  storefrontAccessToken: "363669dc4fa52deb236c332d5427538f",
});

export default client;
