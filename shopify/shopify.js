import Client from "shopify-buy";

const client = Client.buildClient({
  domain: "home-appliances-ca.myshopify.com",
  // Storefront API access tokens are not secret. You can place them in a JavaScript file or any public HTML document.
  storefrontAccessToken: process.env.NEXT_PUBLIC_STOREFRONT_ACCESS_TOKEN,
});

export default client;
