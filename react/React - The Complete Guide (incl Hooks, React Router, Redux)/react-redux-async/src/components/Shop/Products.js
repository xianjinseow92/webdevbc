import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const products = [
    {
      title: "Test",
      price: 6,
      description: "Dis be awesome",
    },
    {
      title: "prod",
      price: 2,
      description: "Dis be prod",
    },
  ];

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((product) => {
          return (
            <li>
              <ProductItem
                title={product.title}
                price={product.price}
                description={product.description}
              />
            </li>
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
