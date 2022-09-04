import React from "react";
import Slider from "react-slick";
import classNames from "classnames/bind";
import styles from "./HomeContainer.module.scss";
import { Link } from "react-router-dom";
import { FaInfo } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// img
import Slider1 from "../../../assets/images/creative-slider-1.jpg";
import Slider2 from "../../../assets/images/xclusive-slider-2.jpg";
import Chairs from "../../../assets/images/chairs-chairs.jpg";
import Tables from "../../../assets/images/tables-table.jpg";
import Room from "../../../assets/images/living-room-bedrum.jpg";
import Dining from "../../../assets/images/dining-room-special-cat1-1.jpg";
import Bedrum from "../../../assets/images/bedroom.jpg";
import Custom from "../../../assets/images/custom-2.png";

const photos = [
  { name: "CREATIVE", image: Slider1 },
  { name: " XCLUSIVE ", image: Slider2 },
];

const cx = classNames.bind(styles);

const SliderContainer = () => {
  return (
    <>
      <div className={cx("content")}>
        <Slider
          dots={false}
          fade={true}
          Infinte={true}
          slidesToShow={1}
          arrows={false}
          slidesToScroll={1}
          autoplay={true}
          speed={2000}
          autoplaySpeed={5000}
          classNames={cx("slides")}
        >
          {photos.map((photo) => {
            return (
              <div className={cx("c-img")} key={photo}>
                <img src={photo.image} alt="" className={cx("c-img_src")} />
                <div className={cx("c-name")}>{photo.name}</div>
              </div>
            );
          })}
        </Slider>
      </div>
      <div className={cx("content-list")}>
        <div className={cx("c-list")}>
          <div className={cx("c-list_title")}>
            <h2 className={cx("list_title")}>New Arrivals</h2>
            <p className={cx("list-p")}>
              But I must explain to you how all this mistaken idea
            </p>
          </div>
          <div className={cx("c-cate_list")}>
            <div className={cx("c-cate-item")}>
              <figure className={cx("c-cate_item_1")}>
                <Link to="#">
                  <img src={Chairs} alt="" className={cx("cate-item_img")} />
                </Link>
              </figure>
              <div className={cx("c-cate_title")}>
                <Link to="" className={cx("c-cate_link")}>
                  Chairs
                </Link>
              </div>
            </div>
            <div className={cx("c-cate-item")}>
              <figure className={cx("c-cate_item_1")}>
                <Link to="#">
                  <img src={Tables} alt="" className={cx("cate-item_img")} />
                </Link>
              </figure>
              <div className={cx("c-cate_title")}>
                <Link to="#" className={cx("c-cate_link")}>
                  Tables
                </Link>
              </div>
            </div>
            <div className={cx("c-cate-item")}>
              <figure className={cx("c-cate_item_1")}>
                <Link to="#">
                  <img src={Room} alt="" className={cx("cate-item_img")} />
                </Link>
              </figure>
              <div className={cx("c-cate_title")}>
                <Link to="#" className={cx("c-cate_link")}>
                  Living Room
                </Link>
              </div>
            </div>
          </div>
          <div className={cx("c-cate_list")}>
            <div className={cx("c-cate-item")}>
              <figure className={cx("c-cate_item_1")}>
                <Link to="#" className={cx("c-cate_link")}>
                  <img src={Dining} alt="" className={cx("cate-item_img")} />
                </Link>
              </figure>
              <div className={cx("c-cate_title")}>
                <Link to="#" className={cx("c-cate_link")}>
                  Dining Room
                </Link>
              </div>
            </div>
            {/*  */}
            <div className={cx("c-cate-item_760")}>
              <figure className={cx("c-cate_item_2")}>
                <Link to="#" className={cx("c-cate_link2")}>
                  <img src={Bedrum} alt="" className={cx("cate-item_img1")} />
                </Link>
              </figure>
              <div className={cx("c-cate_title_2")}>
                <Link to="#" className={cx("c-cate_link2")}>
                  Bedroom
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("content-info")}>
        <div className={cx("in-container")}>
          <div className={cx("in-read")}>
            <h2 className={cx("in-read-h2")}>
              Contrary to popular belief is simply rand.
            </h2>
            <h3 className={cx("in-read-h3")}>
              Professor at Hamp deny dney College.
            </h3>
            <Link to="" className={cx("in-read-link")}>
              Read More
            </Link>
          </div>
          <div className={cx("in-img")}>
            <img src={Custom} alt="Custom" className={cx("in-img_cus")} />
            <div className={cx("in-banner_info")}>
              <div className={cx("in-banner_1")}>
                <FaInfo className={cx("in-info_icon")} />
                <div className={cx("in-tooltip__box")}>
                  <h4 className={cx("in-tooltip_h4")}>Tooltip Left</h4>
                  <p className={cx("in-tooltip_p")}>
                    Lorem ipsum pisaci volupt atem accusa saes ntisdumtiu loperm
                    asaerks.
                  </p>
                </div>
              </div>
              <div className={cx("in-banner_2")}>
                <FaInfo className={cx("in-info_icon")} />
                <div className={cx("in-tooltip__box2")}>
                  <h4 className={cx("in-tooltip_h42")}>Tooltip Top</h4>
                  <p className={cx("in-tooltip_p2")}>
                    Lorem ipsum pisaci volupt atem accusa saes ntisdumtiu loperm
                    asaerks.
                  </p>
                </div>
              </div>
              <div className={cx("in-banner_3")}>
                <FaInfo className={cx("in-info_icon")} />
                <div className={cx("in-tooltip__box3")}>
                  <h4 className={cx("in-tooltip_h43")}>Tooltip Bottom</h4>
                  <p className={cx("in-tooltip_p3")}>
                    Lorem ipsum pisaci volupt atem accusa saes ntisdumtiu loperm
                    asaerks.
                  </p>
                </div>
              </div>
              <div className={cx("in-banner_4")}>
                <FaInfo className={cx("in-info_icon")} />
                <div className={cx("in-tooltip__box4")}>
                  <h4 className={cx("in-tooltip_h44")}>Tooltip Top</h4>
                  <p className={cx("in-tooltip_p4")}>
                    Lorem ipsum pisaci volupt atem accusa saes ntisdumtiu loperm
                    asaerks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderContainer;
