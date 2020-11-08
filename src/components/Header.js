import { useState, useEffect } from "react";
import {
  Container,
  Button,
  OverlayTrigger,
  Popover,
  Badge,
  ProgressBar,
  Col
} from "react-bootstrap";
import Logo from "../assets/img/svg/Logo.svg";
import IconCart from "../assets/img/svg/icon-cart.svg";
import IconShock from "../assets/img/svg/icon-price-shock.svg";

import Search from "./Search";

const Header = (props) => {

  Number.prototype.round = function(places) {
		return +(Math.round(this + "e+" + places)  + "e-" + places);
  }
  
  const targetCartPrice= 500;
  const [totalCartQuantity, setTotalCartQuantity] = useState(0);
  const [totalCartPrice, setTotalCartPrice] = useState(0);
  const { setSearchKeyword, cart } = props;

  useEffect(() => {
    let tempTotalCart = 0, 
        tempTotalQuantity = 0;
    Object.keys(cart).map(key => {
      tempTotalCart += (cart[key].price*cart[key].quantity);
      tempTotalQuantity += cart[key].quantity;
    })
    setTotalCartPrice(tempTotalCart);
    setTotalCartQuantity(tempTotalQuantity)
  }, [cart]);

  let currentShipmentStatusInfo = (
    <span>
      <span className="price">{targetCartPrice} TL</span> ürün daha ekleyin kargo bedava
    </span>
  );
  if (totalCartPrice < targetCartPrice) {
    currentShipmentStatusInfo = (
      <span>
        <span className="price">{(targetCartPrice - totalCartPrice).round(2)} TL</span> ürün daha
        ekleyin kargo bedava
      </span>
    );
  } else {
    currentShipmentStatusInfo = (
      <span>
        <span className="price">Kargonuz ücretsiz</span>
      </span>
    );
  }

  let currentQuantityStatusInfo;
  if (totalCartQuantity > 0) {
    if(totalCartQuantity > 9) {
      currentQuantityStatusInfo = (
        <Badge pill variant="danger">
          9+
        </Badge>
      );
    } else 
      currentQuantityStatusInfo = (
        <Badge pill variant="danger">
          {totalCartQuantity}
        </Badge>
      );
  } else {
    currentQuantityStatusInfo = null;
  }

  // useEffect(() => {

  // }, [totalCartPrice])
  return (
    <header>
      <Container>
        <div className="header">
          <img src={Logo} alt="Logo" />
          <Col lg={7} md={6} sm={12}>
            <Search setSearchKeyword={setSearchKeyword} />
          </Col>
          <div className="cart-container">
            <OverlayTrigger
              trigger="click"
              key="bottom"
              placement="bottom-end"
              overlay={
                <Popover className="cart-summary">
                  <Popover.Content>
                    <div className="mb-2">
                      <img src={IconShock}  alt="IconShock"/>
                      {currentShipmentStatusInfo}
                    </div>
                    <ProgressBar
                      variant="warning"
                      now={totalCartPrice}
                      max={targetCartPrice}
                    />
                  </Popover.Content>
                </Popover>
              }
            >
              <Button className="cart">
                <img src={IconCart} className="mr-2" alt="IconCart"/>
                Sepetim
                {currentQuantityStatusInfo}
              </Button>
            </OverlayTrigger>
          </div>
        </div>
      </Container>
      <div className="py-3 bg-blue-pattern">
        <Container>
          <h1 className="text-white font-weight-light">Çiçek Sepeti H1</h1>
        </Container>
      </div>
      <div className="py-2">
        <Container>
          <small>Çiçek Sepeti Market &gt; </small>
          <small>İstanbul &gt; </small>
          <small className="text-success">CiceksepetiBreadCrumb</small>
        </Container>
      </div>
    </header>
  );
};

export default Header;
