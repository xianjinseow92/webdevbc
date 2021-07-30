import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const products = [
    {
      title: "Test",
      price: 6,
      total: 1,
      description: "Dis be awesome",
    },
    {
      title: "prod",
      price: 2,
      total: 1,
      description: "Dis be prod",
    },
  ];

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((product) => {
          return (
            <ProductItem
              key={product.title}
              title={product.title}
              price={product.price}
              description={product.description}
            />
          );
        })}
        {/* <ProductItem
          title="Test"
          price={6}
          description="This is a first product - amazing!"
        /> */}
      </ul>
    </section>
  );
};

export default Products;
