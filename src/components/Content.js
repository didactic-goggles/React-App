import { useState } from "react";

import { Container, Row, Col, Card } from "react-bootstrap";

import Categories from "./Categories";
import Products from "./Products";
import Sale from './Sale';

const Content = (props) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const { searchKeyword, setCart, cart } = props;

  return (
    <main>
      <Container className="pb-5">
        <Row>
          <Col lg={12}>
            <Categories
              categories={categories}
              setSelectedCategories={setSelectedCategories}
            />
          </Col>
          <Col lg={12}>
            <Row>
              <Products
                cart={cart}
                setCart={setCart}
                searchKeyword={searchKeyword}
                selectedCategories={selectedCategories}
                onSetCategories={setCategories}
              />
            </Row>
          </Col>
          <Col lg={12}>
            <Row className="sale-container">
              <Sale />
            </Row>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Content;
