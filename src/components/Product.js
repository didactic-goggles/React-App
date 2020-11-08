import React, {useState} from "react";
import { Col, Button } from "react-bootstrap";
import IconMinus from '../assets/img/svg/icon-minus.svg';
import IconPlus from '../assets/img/svg/icon-plus.svg';

const Product = (props) => {
  const {setCart, product, cart} = props;
  
  // Ürün sepette ise değeri al, yoksa sıfır olsun
  const [productQuantity, setProductQuantity] = useState(cart[product.id] ? cart[product.id].quantity : 0);
  const productImage = require(`../assets/img/products/product-${product.imageURL}.png`).default;
  const productImage2x = require(`../assets/img/products/product-${product.imageURL}@2x.png`).default;
  const showQuantityContainer = event => {
    event.target.nextSibling.classList.remove('d-none');
    event.target.classList.add('d-none');
    hideOtherQuantityContainer(event.target);
  }

  const hideOtherQuantityContainer = activeProductAddCartButton => {
    [...document.querySelectorAll('.product')].map( productElement => {
      if(productElement.querySelector('.product-add-cart') != activeProductAddCartButton) {
        productElement.querySelector('.product-add-cart').nextSibling.classList.add('d-none');
        productElement.querySelector('.product-add-cart').classList.remove('d-none');
      }
    })
  }

  /*
    Ürün adedi değiştirme
      * Mevcut sepeti çek,
      * Eğer ürün adedi sıfırdan büyük ise
         - Ürün adedini değiştir
         - Ürün adedini sepette de değiştir
      * Eğer ürün adedi sıfır ise
         - Ürün adedini sıfır yap,
         - Ürünü sepetten sil
  */
  const changeProductQuantity = (selectedProductQuantity) => {
    let tempCart = cart;
    if(selectedProductQuantity > 0) {
      setProductQuantity(parseInt(selectedProductQuantity));
      tempCart[product.id] = {...product, quantity: parseInt(selectedProductQuantity) };
    } else if(selectedProductQuantity === 0) {
      setProductQuantity(0);
      delete tempCart[product.id];
    }
    setCart({...tempCart});
  }

  // Ürün adedi 05 gibi bir şey yazılabiliyordu, onu engelle (parseInt)
  // Ürün adedinin sıfırdan küçük olması durumunu engelle 
  const productQuantityInputHandler = (event) => {
    if(parseInt(event.target.value) > 0) {
      changeProductQuantity(parseInt(event.target.value));
      event.target.value = parseInt(event.target.value)
    } else {
      changeProductQuantity(0);
    }
  }

  return (
    <Col lg={3} md={4} sm={6} className="mb-3">
      <div className="product">
        <div className="product-body">
          <picture>
            <source media="(min-width:650px)" srcset={productImage2x} />
            <source media="(min-width:465px)" srcset={productImage} />
            <img src={productImage} alt={product.name} className="product-image"/>
          </picture>
          <p className="product-name">{product.name}</p>
          <p className="product-price mt-auto">{new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format(product.price)}</p>
          <div>
            <Button variant="outline-primary" block className="product-add-cart" onClick={(event) => showQuantityContainer(event)}>{productQuantity === 0 ? "Sepete Ekle" : "Sepette"}</Button>
            <div className="product-quantity-container d-none">
              <Button variant="link" onClick={(event) => changeProductQuantity(productQuantity -1)}><img src={IconMinus} alt="IconMinus"/></Button>
              <input type="number" className="product-quantity" min={0} value={productQuantity} onChange={event => productQuantityInputHandler(event)}/>
              <Button variant="link" onClick={(event) => changeProductQuantity(productQuantity + 1)}><img src={IconPlus} alt="IconPlus"/></Button>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default Product;
