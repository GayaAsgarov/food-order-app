import React from "react";
import GeneralInfoImg from "./../../assets/img/general-info.png";

const GeneralInfo = () => {
  return (
    <section className="section-general-info">
      <div className="general-info">
        <div className="general-info-text-box">
          <h1 className="heading-primary">Sevdiyiniz yeməyi sifariş edin</h1>
          <p>
            Foodly sizə vaxtından əvvəl sifariş verməyə və yeməyinizi götürərkən
            xətti keçməyə imkan verir. Biz həmçinin seçilmiş iştirakçı
            restoranlara çatdırılma təklif edirik. Platformamız hazırda
            Kanadanın Britaniya Kolumbiyasındakı Böyük Vankuver ərazisini əhatə
            edir.
          </p>
        </div>
        <div className="general-info-img-box">
          <img src={GeneralInfoImg} alt="Drinks and meals" />
        </div>
      </div>
    </section>
  );
};

export default GeneralInfo;
