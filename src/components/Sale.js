import React from "react";
import { Col, Badge } from "react-bootstrap";

import ImgSale1 from '../assets/img/sale/sale-1.png';
import ImgSale2 from '../assets/img/sale/sale-2.png';
import ImgSale3 from '../assets/img/sale/sale-3.png';

const Sale = React.memo(() => {
  return (
    <React.Fragment>
      <Col md={4} sm={12}>
        <div class="card mb-3 sale bg-light-pink p-2">
          <div class="row no-gutters">
            <div class="img-container col-md-5 col-sm-3">
              <img src={ImgSale1} class="card-img" alt="..." />
            </div>
            <div class="col-md-7 col-sm-9">
              <div class="card-body px-3 py-1">
                <p class="sale-text mb-1">
                    75 TL Üzerine Teslimat Ücreti Bizden
                </p>
                <Badge pill variant="light" className="sale-badge">Detaylı Bilgi</Badge>
              </div>
            </div>
          </div>
        </div>
      </Col>
      <Col md={4} sm={12}>
        <div class="card mb-3 sale bg-light-turquoise p-2">
          <div class="row no-gutters">
            <div class="img-container col-md-5 col-sm-3">
              <img src={ImgSale2} class="card-img" alt="..." />
            </div>
            <div class="col-md-7 col-sm-9">
              <div class="card-body px-3 py-1">
                <p class="sale-text mb-1">
                Hediye Kategorisi için Sepette %15 İndirim
                </p>
                <Badge pill variant="light" className="sale-badge">Detaylı Bilgi</Badge>
              </div>
            </div>
          </div>
        </div>
      </Col>
      <Col md={4} sm={12}>
        <div class="card mb-3 sale bg-light-green p-2">
          <div class="row no-gutters">
            <div class="img-container col-md-5 col-sm-3">
              <img src={ImgSale3} class="card-img" alt="..." />
            </div>
            <div class="col-md-7 col-sm-9">
              <div class="card-body px-3 py-1">
                <p class="sale-text mb-1">
                    Kırtasiye Kategorisi için Sepette %15 İndirim
                </p>
                <Badge pill variant="light" className="sale-badge">Detaylı Bilgi</Badge>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </React.Fragment>
  );
});

export default Sale;
