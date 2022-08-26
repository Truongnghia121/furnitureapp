import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
  faArrowsRotate,
} from "@fortawesome/free-solid-svg-icons";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { DataItem } from "../../../utils/DataItem";
import classNames from "classnames/bind";
import styles from "./ProductContainer.module.scss";
const cx = classNames.bind(styles);

const ProductContainer = () => {
  return (
    <div className={cx("products")}>
      <div className={cx("c-list")}>
        <div className={cx("c-list_title")}>
          <h2 className={cx("list_title")}>Best Seller</h2>
          <p className={cx("list-p")}>
            But I must explain to you how all this mistaken idea
          </p>
        </div>
        <div className={cx("c-product")}>
          {DataItem &&
            DataItem.map((n) => (
              <div key={n.id} className={cx("c-prod_1")}>
                <div className={cx("c-prod_card")}>
                  <img src={n.img} alt="" className={cx("c-prod_img")} />
                  <div className={cx("c-action_prod")}>
                    <Link to="#" className={cx("c-action_search")}>
                      <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        className={cx("c-icon_search")}
                      />
                    </Link>
                    <Link to="#" className={cx("c-action_search1")}>
                      <FontAwesomeIcon
                        icon={faCartShopping}
                        className={cx("c-icon_cart")}
                      />
                      <span className={cx("c-action_span")}> Mua Hàng</span>
                    </Link>
                    <Link to="#" className={cx("c-action_search2")}>
                      <FontAwesomeIcon
                        icon={faArrowsRotate}
                        className={cx("c-icon_refr")}
                      />
                    </Link>
                  </div>
                </div>
                <div className={cx("c-prod_tt")}>
                  <h4 className={cx("c-prod_h4")}>
                    <Link to="#" className={cx("c-prod_title")}>
                      {n.name}
                    </Link>
                  </h4>
                  <p className={cx("c-prod_p")}>{n.price} ₫</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductContainer;
