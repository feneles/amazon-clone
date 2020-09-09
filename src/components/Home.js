import React from "react";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg"
        alt="home banner"
      />
      <div className="home_row">
        <Product
          id="123123213213"
          title="to ejst title"
          price={20.22}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61mXrcMU6LL._AC_SL1500_.jpg"
        />
        <Product
          id="123123213213"
          title="to ejst title"
          price={20.22}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61mXrcMU6LL._AC_SL1500_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
