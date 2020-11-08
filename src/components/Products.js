import React, { useEffect } from "react";
// import {Row} from 'react-bootstrap';
import Product from "./Product";

import data from "../dummyData/data";

const Products = (props) => {

    // Filtreleme İşlemi (kategori ve arama ürünleri burada etkileyecek)
    //   * Eğer ürün adı aramayı içermiyorsa, gösterme,
    //   * Herhangi bir kategori seçilmemişse, göster
    //   * Ürünün kategorileri seçili olan kategorilerden herhangi biri ile eşleşiyorsa, göster

    // Son Adım:
    //   En başta gelen ürünlere göre kategorileri ayarla

  const { searchKeyword, onSetCategories, selectedCategories, setCart, cart } = props;
  const categories = ["Tüm Kategoriler"];
  const productList = data
    .filter(
      (product) => {
        if (
          !product.name.toLowerCase().startsWith(searchKeyword.toLowerCase())
        ) {
          return false;
        }
        if (!selectedCategories.length) {
          return true;
        }
        if (
          product.categories.filter((arr1Item) =>
            selectedCategories.includes(arr1Item)
          ).length
        ) {
          return true;
        }
        return false;
      }
    )
    .map((product) => {
      product.categories.map((category) =>
        !categories.includes(category) ? categories.push(category) : null
      );

      return <Product product={product} key={product.id} setCart={setCart} cart={cart}/>;
    });

  const emptyList = <div className="text-center w-100 mb-5">
    <h2>Burada hiç ürün yok :(</h2>
    <span className="text-muted">Arama kriterlerini değiştirerek alışverişe devam edebilirsin.</span>
  </div>
    
  // onSetCategories(categories);
  useEffect(() => onSetCategories(categories), []);

  return <React.Fragment>
    {
      productList.length ? productList : emptyList
    }</React.Fragment>;
};

export default Products;
