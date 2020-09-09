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
          id="1"
          title="HUAWEI MediaPad T5 - 10.1 Inch Android 8.0 Tablet, 1080P Full HD Display, Kirin 695 Octa-Core Processor, RAM 3GB, ROM 32GB, Dual Stereo Speakers, 5100mAh Large Battery, Black"
          price={161.81}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51UQTXsgQnL._AC_SL1000_.jpg"
        />
        <Product
          id="2"
          title="BingoFit Smart Watch for Men, Full Touch Screen Activity Tracker Heart Rate Monitor Blood Pressure Fitness Smartwatch"
          price={42.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81sHBwAjBjL._AC_SL1500_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="3"
          title="ELEGIANT Computer Speakers, 10W 3 in 1 USB 2.0 & Bluetooth 5.0 PC Speakers with Stereo Sound"
          price={32.99}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/71awumYtXDL._AC_SL1500_.jpg"
        />
        <Product
          id="4"
          title="Wahoo ELEMNT BOLT GPS Bike Computer"
          price={172.04}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61UBBDLhtJL._AC_SL1500_.jpg"
        />
        <Product
          id="5"
          title="Mega Bloks DCH55 Big Building Bag, Blue, 60 Pieces"
          price={6.45}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71k3HritYNL._AC_SL1020_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="6"
          title="BenQ GW2280 22 Inch 1080p Eye Care LED Monitor, Anti-Glare, Dual HDMI, B.I. Sensor for Home Office - Black"
          price={114.23}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61HfWFv8FgL._AC_SL1400_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
