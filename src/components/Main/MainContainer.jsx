import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./MainContainer.module.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

//
import HomeContainer from "./Home/HomeContainer";
import ProductContainer from "./Products/ProductContainer";

const cx = classNames.bind(styles);

const MainContainer = () => {
  return (
    <>
      <div className={cx("main")}>
        <HomeContainer />
        <ProductContainer />
      </div>
    </>
  );
};

export default MainContainer;
