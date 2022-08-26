import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./ProductContainer.module.scss";
const cx = classNames.bind(styles);

const ProductContainer = () => {
  return <div className={cx("products")}>ProductContainer</div>;
};

export default ProductContainer;
