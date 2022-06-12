import React, { useState, useEffect } from "react";
import FlashCard from "./FlashCard";
import "./flash-style.css";
import Slider from "react-slick";
import { useSelector, useDispatch } from "react-redux";
import { getProducts as AllProducts } from "../../redux/actions/productAction";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <IoArrowForward className="arrow_icon" />
      </button>
    </div>
  );
};
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <IoArrowBack className="arrow_icon" />
      </button>
    </div>
  );
};

const FlashDeals = () => {
  // console.log('--------flash deals', productItems)
  const dispatch = useDispatch();
  const getProducts = useSelector((state) => state.getProducts);
  console.log("redux succcesss FROM FLASH----->", getProducts);
  useEffect(() => {
    dispatch(AllProducts());
  }, [dispatch]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <section className="flash">
        <div className="container">
          <div className="heading f_flex">
            <i className="fa fa-bolt"></i>
            <h1>Flash Delas</h1>
          </div>
          {getProducts.loading ? (
            <h2>Loading...</h2>
          ) : (
            <Slider {...settings}>
              {getProducts.products.map((item) => {
                return <FlashCard item={item} />;
              })}
            </Slider>
          )}
        </div>
      </section>
    </>
  );
};

export default FlashDeals;
