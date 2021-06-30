import Client from "shopify-buy";

const client = Client.buildClient({
  domain: "home-appliances-ca.myshopify.com",
  // Storefront API access tokens are not secret. You can place them in a JavaScript file or any public HTML document.
  storefrontAccessToken: "363669dc4fa52deb236c332d5427538f",
});

export default client;
