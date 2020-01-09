import React from "react";
import productModel from "~s/products.js";
import { Card, Button } from "react-bootstrap";
import { urlBuilder } from "~/routes";
import { Link } from "react-router-dom";
import styles from "./index.module.css";
import { reaction } from "mobx";
import cart from "~s/cart.js";
import { observer } from "mobx-react";

@observer
class Products extends React.Component {
  render() {
    let productsCards = productModel.items.map(product => {
      let btn;

      if (cart.inCart(product.id)) {
        btn = (
          <Button
            variant="danger"
            onClick={() => {
              cart.remove(product.id);
            }}
          >
            remove from cart
          </Button>
        );
      } else {
        btn = (
          <Button
            variant="success"
            onClick={() => {
              cart.add(product.id);
            }}
          >
            add to cart
          </Button>
        );
      }

      return (
        <div className={"col col-4 " + styles.col} key={product.id}>
          <Card>
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
                <strong>Price: {product.price}</strong>
              </Card.Text>
              <Link to={urlBuilder("product", { id: product.id })}>
                Get more...
              </Link>
              <hr />
              {btn}
            </Card.Body>
          </Card>
        </div>
      );
    });
    return (
      <React.Fragment>
        <h1>Products Page</h1>
        <div className="row">{productsCards}</div>
      </React.Fragment>
    );
  }
}

export default Products;
