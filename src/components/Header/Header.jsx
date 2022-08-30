import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { RiRefreshLine, RiShoppingBag2Line } from "react-icons/ri";
import { motion } from "framer-motion";
import { Wrapper as PopperWrapper } from "../../components/index";
//
import HeadlessTippy from "@tippyjs/react/headless";

import Logo from "../../assets/images/pngegg.png";
import NavMenu from "../../assets/images//main-menu.jpg";

const cx = classNames.bind(styles);

const Header = () => {
  const [isMoblie, setIsMoblie] = useState(false);

  return (
    <div className={cx("header")}>
      <div className={cx("container")}>
        <div className={cx("h-logo")}>
          <img src={Logo} className={cx("h-logo_img")} alt="Logo" />
        </div>
        <div className={cx("h-nav")}>
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className={cx("h-nav_ul")}
          >
            <li className={cx("h-nav_li")}>
              <Link className={cx("h-nav_a")} to="">
                Home
              </Link>
            </li>

            <li className={cx("h-nav_li")}>
              <Link className={cx("h-nav_a")} to="">
                About Us
              </Link>
            </li>

            <HeadlessTippy
              // visible={true}
              interactive={true}
              placement={"bottom"}
              className={cx("PopperProd")}
              render={(attrs) => (
                <div className={cx("h-nav-tippy")} tabIndex="-1" {...attrs}>
                  <PopperWrapper>
                    <ul className={cx("h-menu_prod")}>
                      <li className={cx("h-prod_li")}>
                        <div className={cx("h-prod_a1")}>
                          <Link to="" className={cx("h-prod_a")}>
                            Chairs
                          </Link>
                        </div>
                        <ul className={cx("h-menu-child")}>
                          <li className={cx("h-child_li")}>
                            {" "}
                            <Link to="" className={cx("h-prod_a")}>
                              Chairs & Sofa
                            </Link>{" "}
                          </li>
                          <li className={cx("h-child_li")}>
                            <Link to="" className={cx("h-prod_a")}>
                              Counter & Bar Stool
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className={cx("h-prod_li")}>
                        <div className={cx("h-prod_a1")}>
                          <Link to="" className={cx("h-prod_a")}>
                            Tables
                          </Link>
                        </div>
                        <ul className={cx("h-menu-child")}>
                          <li className={cx("h-child_li")}>
                            <Link to="" className={cx("h-prod_a")}>
                              Sectionals 123
                            </Link>{" "}
                          </li>
                          <li className={cx("h-child_li")}>
                            <Link to="" className={cx("h-prod_a")}>
                              Queen Bed
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className={cx("h-prod_li")}>
                        <div className={cx("h-prod_a1")}>
                          <Link to="" className={cx("h-prod_a")}>
                            Living Room
                          </Link>
                        </div>
                        <ul className={cx("h-menu-child")}>
                          <li className={cx("h-child_li")}>
                            <Link to="" className={cx("h-prod_a")}>
                              Sofas
                            </Link>{" "}
                          </li>
                          <li className={cx("h-child_li")}>
                            <Link to="" className={cx("h-prod_a")}>
                              Loveseats
                            </Link>{" "}
                          </li>
                          <li className={cx("h-child_li")}>
                            <Link to="" className={cx("h-prod_a")}>
                              Sectionals
                            </Link>{" "}
                          </li>
                          <li className={cx("h-child_li")}>
                            <Link to="" className={cx("h-prod_a")}>
                              Chairs & Chaises
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className={cx("h-menu_img")}>
                        <img
                          src={NavMenu}
                          alt=""
                          className={cx("h-menu_img1")}
                        />
                      </li>
                    </ul>
                  </PopperWrapper>
                </div>
              )}
            >
              <li className={cx("h-nav_li")}>
                <Link className={cx("h-nav_a")} to="">
                  Product
                </Link>
              </li>
            </HeadlessTippy>
            <li className={cx("h-nav_li")}>
              <Link className={cx("h-nav_a")} to="#ourBlog">
                Our Blog
              </Link>
            </li>
            <HeadlessTippy
              interactive={true}
              placement={"bottom"}
              render={(attrs) => (
                <div className={cx("h-nav-gall")} tabIndex="-1" {...attrs}>
                  My tippy box
                </div>
              )}
            >
              <li className={cx("h-nav_li")}>
                <Link className={cx("h-nav_a")} to="">
                  Gallery
                </Link>
              </li>
            </HeadlessTippy>

            <li className={cx("h-nav_li")}>
              <Link className={cx("h-nav_a")} to="">
                Contact
              </Link>
            </li>
          </motion.ul>
        </div>
        <div className={cx("h-full_nav")}>
          <div className={cx("h-nav_right")}>
            <motion.div whileTap={{ scale: 0.75 }} className={cx("h-right_ww")}>
              <Link to="" className={cx("h-right_a")}>
                <BiSearch className={cx("h-right_icon")} />
              </Link>
            </motion.div>
            <motion.div whileTap={{ scale: 0.75 }} className={cx("h-right_ww")}>
              <Link to="" className={cx("h-right_a")}>
                <RiRefreshLine className={cx("h-right_icon")} />
                <span className={cx("h-number")}>0</span>
              </Link>
            </motion.div>
            <motion.div whileTap={{ scale: 0.75 }} className={cx("h-right_ww")}>
              <Link to="" className={cx("h-right_a")}>
                <RiShoppingBag2Line className={cx("h-right_icon")} />
                <span className={cx("h-number")}>0</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
