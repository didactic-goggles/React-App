import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

// Row 1
import ImgDevices from "../assets/img/footer-devices.png";
import ImgQRCode from "../assets/img/footer-qrCode.png";
import ImgPlayStore from "../assets/img/svg/footer-playstore.svg";
import ImgAppStore from "../assets/img/svg/footer-appstore.svg";
// Row 1

// Row 2
import Logo from "../assets/img/svg/Logo.svg";
import SocialFacebook from '../assets/img/svg/footer-soc-facebook.svg';
import SocialTwitter from '../assets/img/svg/footer-soc-twitter.svg';
import SocialInstagram from '../assets/img/svg/footer-soc-instagram.svg';
import SocialYoutube from '../assets/img/svg/footer-soc-youtube.svg';
import Social1 from '../assets/img/svg/footer-soc-icon-1.svg';
// Row 2

const Footer = React.memo((props) => {
  return (
    <footer className="footer bg-light">
      <Container className="py-5">
        <Row className="footer-banner">
          <Col lg={6} md={3} className="mb-1">
            <img
              src={ImgDevices}
              className="footer-img-static d-none d-md-block"
              alt="imgDevices"
            />
          </Col>
          <Col lg={6} md={9} className="py-4">
            <div className="d-flex mb-3">
              <span>
                <img
                  src={ImgQRCode}
                  style={{ maxWidth: 60 }}
                  alt="imgQRCode"
                />
              </span>
              <span className="ml-sm-4">
                <h6>Çiçek Sepeti Mobil Uygulamayı İndirin</h6>
                <p>Mobil Uygulamayı QR Kod ile İndirin.</p>
              </span>
            </div>
            <div>
              <img
                src={ImgPlayStore}
                alt="ImgPlayStore"
                className="mr-sm-3"
              />
              <img
                src={ImgAppStore}
                alt="imgAppStore"
              />
            </div>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={4} className="mb-3">
            <div className="mb-3">
              <img src={Logo} alt="Logo"/>
            </div>
            <div className="mb-3">
              <a target="_blank" rel="noreferrer" href="https://www.facebook.com/ciceksepeti"><img className="mr-3" src={SocialFacebook} alt="Social Icon"/></a>
              <a target="_blank" rel="noreferrer" href="https://twitter.com/ciceksepeti"><img className="mr-3" src={SocialTwitter} alt="Social Icon"/></a>
              <a target="_blank" rel="noreferrer" href="https://instagram.com/ciceksepeti/"><img className="mr-3" src={SocialInstagram} alt="Social Icon"/></a>
              <a target="_blank" rel="noreferrer" href="https://www.youtube.com/user/CicekSepeti"><img className="mr-3" src={SocialYoutube} alt="Social Icon"/></a>
              <a target="_blank" rel="noreferrer" href="https://blog.ciceksepeti.com/"><img className="mr-3" src={Social1} alt="Social Icon"/></a>
            </div>
            <div>
              <small className="footer-description text-left p-0">CicekSepeti.com olarak kişisel verilerinizin gizliliğini önemsiyoruz. 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında oluşturduğumuz aydınlatma metnine buradan ulaşabilirsiniz.</small>
            </div>
          </Col>
          <Col md={8} className="border-left border-md-none">
            <Row>
              <Col className="footer-link-group" sm={3} xs={6}>
                <span className="footer-link-group-header">Faydalı Linkler</span>
                <a href="!#" className="footer-item">Çiçek Bakımı</a>
                <a href="!#" className="footer-item">Çiçek Eşliğinde Notlar</a>
                <a href="!#" className="footer-item">Çiçek Anlamları</a>
                <a href="!#" className="footer-item">Özel Günler</a>
                <a href="!#" className="footer-item">Mevsimlere Göre Çiçekler</a>
                <a href="!#" className="footer-item">BonnyFood Saklama Koşulları</a>
                <a href="!#" className="footer-item">Site Haritası</a>
              </Col>
              <Col className="footer-link-group" sm={3} xs={6}>
                <span className="footer-link-group-header">Kurumsal</span>
                <a href="!#" className="footer-item">Hakkımızda</a>
                <a href="!#" className="footer-item">Kariyer</a>
                <a href="!#" className="footer-item">ÇiçekSepeti’nde Satış Yap</a>
                <a href="!#" className="footer-item">Kurumsal Müşterilerimiz</a>
                <a href="!#" className="footer-item">Reklamlarımız</a>
                <a href="!#" className="footer-item">Basında Biz</a>
                <a href="!#" className="footer-item">Kampanyalar</a>
                <a href="!#" className="footer-item">Vizyonumuz</a>
              </Col>
              <Col className="footer-link-group" sm={3} xs={6}>
                <span className="footer-link-group-header">İletişim</span>
                <a href="!#" className="footer-item">Bize Ulaşın</a>
                <a href="!#" className="footer-item">Sıkça Sorulan Sorular</a>
              </Col>
              <Col className="footer-link-group" sm={3} xs={6}>
                <span className="footer-link-group-header">Gizlilik Sözleşmesi</span>
                <a href="!#" className="footer-item">Mesafeli Satış Sözleşmesi</a>
                <a href="!#" className="footer-item">Bilgi Toplumu Hizmetleri</a>
                <a href="!#" className="footer-item">Gizlilik Sözleşmesi</a>
                <a href="!#" className="footer-item">Ödeme Seçenekleri</a>
                <a href="!#" className="footer-item">Hesap Bilgileri</a>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <small className="footer-description">Türkiyenin en büyük online çiçek sitesi ÇiçekSepeti ile sevdiklerinizi mutlu etmek çok kolay! Çiçek göndermenin ve “Mutlu etmenin adresi” Çiçek Sepeti ile sevdiklerinize özel günlerde online çiçek gönderebilirsiniz. Geniş çiçekçi ağı sayesinde çiçek siparişleriniz Türkiye’nin dört bir yanına hızlı ve sorunsuz şekilde gönderilir. Taze çiçeklerle hazırlanan mis kokulu şık çiçek aranjmanları arasından beğendiğiniz ürünü seçerek, hızlı bir şekilde online sipariş verebilirsiniz. Sevdiklerinizin doğum günü, yıldönümü gibi mutlu günlerinde onların sevincine ortak olmak için yapmanız gereken sadece birkaç tıkla sipariş vermek. Sevgililer Günü, Kadınlar Günü, Anneler Günü gibi özel günlerde de çiçek, hediye ve lezzetli bonnyFood ürünleriyle sevdiklerinizi mutlu edebilirsiniz. Çünkü mutlu etmenin adresi; ÇiçekSepeti.</small>
        </Row>
      </Container>
      <div className="bg-lighter text-center py-3">
        <small>Copyright © 2019 Çiçek Sepeti İnternet Hizmetleri A.Ş</small>
      </div>
    </footer>
  );
});

export default Footer;
