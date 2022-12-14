import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { RiRefreshLine, RiShoppingBag2Line } from "react-icons/ri";
import { motion, useSpring } from "framer-motion";
import { Wrapper as PopperWrapper } from "../../components/index";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

//
import HeadlessTippy from "@tippyjs/react/headless";

import Logo from "../../assets/images/pngegg.png";
import NavMenu from "../../assets/images//main-menu.jpg";

const cx = classNames.bind(styles);
//
const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

const Header = () => {
  const [show, setShow] = useState(false);

  const springConfig = { damping: 15, stiffness: 300 };
  const initialScale = 0.5;
  const opacity = useSpring(0, springConfig);
  const scale = useSpring(initialScale, springConfig);

  function onMount() {
    scale.set(1);
    opacity.set(1);
  }

  function onHide({ unmount }) {
    const cleanup = scale.onChange((value) => {
      if (value <= initialScale) {
        cleanup();
        unmount();
      }
    });

    scale.set(initialScale);
    opacity.set(0);
  }
  return (
    <>
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
              <motion.li whileTap={{ scale: 0.9 }} className={cx("h-nav_li")}>
                <Link className={cx("h-nav_a")} to="">
                  Home
                </Link>
              </motion.li>

              <motion.li whileTap={{ scale: 0.9 }} className={cx("h-nav_li")}>
                <Link className={cx("h-nav_a")} to="">
                  About Us
                </Link>
              </motion.li>

              <HeadlessTippy
                // visible={true}
                interactive={true}
                animation={true}
                onMount={onMount}
                onHide={onHide}
                placement={"bottom"}
                className={cx("PopperProd")}
                render={(attrs) => (
                  <motion.div
                    style={{ scale, opacity }}
                    className={cx("h-nav-tippy")}
                    tabIndex="-1"
                    {...attrs}
                  >
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
                  </motion.div>
                )}
              >
                <motion.li whileTap={{ scale: 0.9 }} className={cx("h-nav_li")}>
                  <Link className={cx("h-nav_a")} to="">
                    Product
                  </Link>
                </motion.li>
              </HeadlessTippy>
              <motion.li whileTap={{ scale: 0.9 }} className={cx("h-nav_li")}>
                <Link className={cx("h-nav_a")} to="#ourBlog">
                  Our Blog
                </Link>
              </motion.li>
              <HeadlessTippy
                // animation={true}
                // visible={true}
                animation={true}
                onMount={onMount}
                onHide={onHide}
                interactive={true}
                placement={"bottom"}
                className={cx("PopperProd")}
                render={(attrs) => (
                  <motion.div
                    style={{ scale, opacity }}
                    className={cx("h-nav-gall")}
                    tabIndex="-1"
                    {...attrs}
                  >
                    <PopperWrapper>
                      <ul className={cx("h-nav_gall_ul")}>
                        <li>
                          <Link to="#" className={cx("h-gall_link")}>
                            Ch??? ????? th???i trang
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className={cx("h-gall_link")}>
                            Ch??? ????? c??ng ngh???
                          </Link>
                        </li>
                      </ul>
                    </PopperWrapper>
                  </motion.div>
                )}
              >
                <motion.li whileTap={{ scale: 0.9 }} className={cx("h-nav_li")}>
                  <Link className={cx("h-nav_a")} to="">
                    Gallery
                  </Link>
                </motion.li>
              </HeadlessTippy>

              <motion.li whileTap={{ scale: 0.9 }} className={cx("h-nav_li")}>
                <Link className={cx("h-nav_a")} to="">
                  Contact
                </Link>
              </motion.li>
            </motion.ul>
          </div>
          <div className={cx("h-full_nav")}>
            <div className={cx("h-nav_right")}>
              <motion.div
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.2 }}
                className={cx("h-right_ww")}
              >
                <Link to="" className={cx("h-right_a")}>
                  <BiSearch className={cx("h-right_icon")} />
                </Link>
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.2 }}
                className={cx("h-right_ww")}
              >
                <Link to="" className={cx("h-right_a")}>
                  <RiRefreshLine className={cx("h-right_icon")} />
                  <span className={cx("h-number")}>0</span>
                </Link>
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.2 }}
                className={cx("h-right_ww")}
              >
                <Link to="" className={cx("h-right_a")}>
                  <RiShoppingBag2Line className={cx("h-right_icon")} />
                  <span className={cx("h-number")}>0</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      {/* isMobile */}

      <div className={cx("header_nav")}>
        <motion.nav
          className={cx("nav")}
          animate={show ? "open" : "closed"}
          variants={variants}
          transition={{ duration: 0.5 }}
        >
          <motion.div className={cx("inner-nav")}>
            <ul>
              <motion.li
                whileHover={{ backgroundColor: "rgba(252,113,210,1)" }}
                whileTap={{ scale: 0.9 }}
              >
                <Link to="#">Home</Link>
              </motion.li>
              <motion.li
                whileHover={{ backgroundColor: "rgba(252,113,210,1)" }}
                whileTap={{ scale: 0.9 }}
              >
                <Link to="#">About us</Link>
              </motion.li>
              <motion.li
                whileHover={{ backgroundColor: "rgba(252,113,210,1)" }}
                whileTap={{ scale: 0.9 }}
              >
                <Link to="#">Product</Link>
              </motion.li>
              <motion.li
                whileHover={{ backgroundColor: "rgba(252,113,210,1)" }}
                whileTap={{ scale: 0.9 }}
              >
                <Link to="#">Ourblog</Link>
              </motion.li>
              <motion.li
                whileHover={{ backgroundColor: "rgba(252,113,210,1)" }}
                whileTap={{ scale: 0.9 }}
              >
                <Link to="#">Gallery</Link>
              </motion.li>
              <motion.li
                whileHover={{ backgroundColor: "rgba(252,113,210,1)" }}
                whileTap={{ scale: 0.9 }}
              >
                <Link to="#">Contact</Link>
              </motion.li>
            </ul>
          </motion.div>
        </motion.nav>
        <motion.button
          className={cx("toggle")}
          onClick={() => setShow((show) => !show)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {show ? (
            <FontAwesomeIcon icon={faCircleXmark} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </motion.button>
      </div>
    </>
  );
};

export default Header;
