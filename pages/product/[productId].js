import { useRouter, userRouter } from "next/router";
const ProductPage = () => {
  const router = useRouter();
  const { productId } = router.query;
  return <div>hi this is product page {productId}</div>;
};

export default ProductPage;

// ("http://localhost:3000/product/1234512")
