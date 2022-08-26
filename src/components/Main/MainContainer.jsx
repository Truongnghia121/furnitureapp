import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./MainContainer.module.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

//
import SliderContainer from "./Slider/SliderContainer";
import ProductContainer from "./Products/ProductContainer";

const cx = classNames.bind(styles);

const MainContainer = () => {
  return (
    <>
      <div className={cx()}>
        <SliderContainer />
      </div>
      <div>
        <ProductContainer />
      </div>
    </>
  );
};

export default MainContainer;
