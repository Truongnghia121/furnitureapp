import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Footer.module.scss";

import { DataBlog } from "../../utils/DataItem";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faGooglePlusG,
  faPinterestP,
} from "@fortawesome/free-brands-svg-icons";

import {
  faAnglesRight,
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import Payment from "../../assets/images/payment-support.png";

const cx = classNames.bind(styles);
const Footer = () => {
  return (
    <>
      <div className={cx("footer-all")}>
        <div id="ourBlog" className={cx("c-our_blog")}>
          <div className={cx("c-list_title")}>
            <h2 className={cx("list_title")}>Our Blog</h2>
            <p className={cx("list-p")}>
              But I must explain to you how all this mistaken idea
            </p>
          </div>
          <div className={cx("c-blog")}>
            {DataBlog &&
              DataBlog.map((n) => {
                return (
                  <div key={n.id} className={cx("c-blog_item")}>
                    <div className={cx("c-item_our")}>
                      <img src={n.img} alt="" className={cx("c-img_blog")} />
                    </div>
                    <div className={cx("c-blog_info")}>
                      <p className={cx("c-info_more_p")}>
                        <span className={cx("c-info_more_span")}>
                          <FontAwesomeIcon
                            icon={faClock}
                            className={cx("c-info_more_icon")}
                          />
                          &nbsp; {n.time}
                        </span>
                      </p>
                      <h2 className={cx("c-info_title")}>
                        <Link to="#" className={cx("c-info_more_title")}>
                          {n.title}
                        </Link>
                      </h2>
                      <p className={cx("c-info_p")}>{n.content}</p>
                      <Link className={cx("c-info_watch")} to="">
                        Xem Thêm
                        <FontAwesomeIcon
                          icon={faAnglesRight}
                          className={cx("c-info_watch_icon")}
                        />
                      </Link>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className={cx("footer")}>
          <div className={cx("f-content")}>
            <div className={cx("f-content_container")}>
              <div className={cx("c-content_all")}>
                <div className={cx("f-content_block")}>
                  <h4 className={cx("f-content_title")}> About us </h4>
                  <div className={cx("f-content_p")}>
                    <p className={cx("f-content_p1")}>
                      <FontAwesomeIcon icon={faLocationDot} />
                      &nbsp; 32/10, Phường 12, Võ Văn Kiệt,Quận 1 ,Hồ Chí Minh
                    </p>
                    <p className={cx("f-content_p1")}>
                      <FontAwesomeIcon icon={faPhone} />
                      &nbsp; 1900 2116
                    </p>
                    <p className={cx("f-content_p1")}>
                      <FontAwesomeIcon icon={faPhone} /> &nbsp; (04) 7308 6680
                    </p>
                    <p className={cx("f-content_p1")}>
                      <FontAwesomeIcon icon={faEnvelope} />
                      &nbsp; web.thietke@gmail.com
                    </p>
                  </div>
                  <div className={cx("f-content_connect")}>
                    <h4 className={cx("f-content_title")}> KẾT NỐI </h4>
                    <div className={cx("f-content_icon")}>
                      <div className={cx("f_content_link")}>
                        <Link to="#">
                          <FontAwesomeIcon
                            icon={faFacebookF}
                            className={cx("f-item_icon")}
                          />
                        </Link>
                      </div>
                      <div className={cx("f_content_link")}>
                        <Link to="#">
                          <FontAwesomeIcon
                            icon={faTwitter}
                            className={cx("f-item_icon")}
                          />
                        </Link>
                      </div>
                      <div className={cx("f_content_link")}>
                        <Link to="#">
                          <FontAwesomeIcon
                            icon={faGooglePlusG}
                            className={cx("f-item_icon")}
                          />
                        </Link>
                      </div>
                      <div className={cx("f_content_link")}>
                        <Link to="#">
                          <FontAwesomeIcon
                            icon={faPinterestP}
                            className={cx("f-item_icon")}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={cx("f-content_block")}>
                  <h4 className={cx("f-content_title")}> SUPPORT </h4>
                  <div className={cx("f-content_p")}>
                    <p className={cx("f-content_p1")}>
                      <Link to="#" className={cx("f-content_link")}>
                        FAQs
                      </Link>
                    </p>
                    <p className={cx("f-content_p1")}>
                      <Link to="#" className={cx("f-content_link")}>
                        Shipping policy
                      </Link>
                    </p>
                    <p className={cx("f-content_p1")}>
                      <Link to="#" className={cx("f-content_link")}>
                        Payment
                      </Link>
                    </p>
                    <p className={cx("f-content_p1")}>
                      <Link to="#" className={cx("f-content_link")}>
                        Check the order
                      </Link>
                    </p>
                    <p className={cx("f-content_p1")}>
                      <Link to="#" className={cx("f-content_link")}>
                        Exchange r
                      </Link>
                    </p>
                  </div>
                </div>
                <div className={cx("f-content_block")}>
                  <h4 className={cx("f-content_title")}> TRADEMARK </h4>
                  <div className={cx("f-content_p")}>
                    <p className={cx("f-content_p1")}>
                      <Link to="#" className={cx("f-content_link")}>
                        About-us
                      </Link>
                    </p>
                    <p className={cx("f-content_p1")}>
                      <Link to="#" className={cx("f-content_link")}>
                        Recruitment
                      </Link>
                    </p>
                    <p className={cx("f-content_p1")}>
                      <Link to="#" className={cx("f-content_link")}>
                        Shop system
                      </Link>
                    </p>
                    <p className={cx("f-content_p1")}>
                      <Link to="#" className={cx("f-content_link")}>
                        Contact us
                      </Link>
                    </p>
                  </div>
                </div>
                <div className={cx("f-content_block")}>
                  <h4 className={cx("f-content_title")}> Đăng ký nhận tin </h4>
                  <div className={cx("f-content_p")}>
                    <p className={cx("f-content_p1")}>
                      Nhận thông tin sản phẩm mới nhất, tin khuyến mãi và nhiều
                      hơn nữa.
                    </p>
                    <form action="">
                      <input
                        type="email"
                        placeholder="Email của bạn!"
                        name="email"
                        className={cx("f-content_input")}
                      />
                      <button className={cx("f-content_btn")}>Đăng Ký!</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("f-content_2")}>
          <div className={cx("f-content_2_coppyright")}>
            <p className={cx("f_fullleft")}>Copyright by Web4s.com</p>
            <div className={cx("f-fullright")}>
              <img src={Payment} alt="" className={cx("f-fullright_img")} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
