import Category from "../../Component/Category/Category";
import Layout from "../../Component/Layout/Layout";
import Carouselp from "../../Component/Carousel/Carousel";
import Product from "../../Component/Product/Product";

const Landing = () => {
  return (
    <Layout>
      <Carouselp />
      <Category />
      <Product />
    </Layout>
  );
};

export default Landing;
