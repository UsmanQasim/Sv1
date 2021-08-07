import React from "react";
import smalllogo from "../sv-logo.svg";
import style from "./About.module.css";
import small3 from "../GalleryPhotos/About Slider/AfraAward1.png";
import small4 from "../GalleryPhotos/About Slider/asiancurryawards.png";
import small5 from "../GalleryPhotos/About Slider/british-curry-awards_1.jpg";
import small6 from "../GalleryPhotos/About Slider/Evening-Standard.png";
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplayspeed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const About = () => {
  return (
    <>
      <div className={style.section}>
        <img src={smalllogo} alt="logo" className={style.imgstory} />
        <p className={style.title_story}>DIRECTOR'S MESSAGE</p>
        <p className={style.text}>
          At Spice Village, every meal has a story. Sometimes two love birds
          meet once and like the way they break the bread together. Sometimes
          business partnerships happen while cherishing the taste buds.
          Sometimes we gather around food to celebrate. At times, to reconcile
          after a rift. I believe food is just not eaten to curb our animalistic
          hunger pangs but to share, celebrate, connect and collaborate.
          Restaurants have played an essential role in the business, social,
          intellectual and many aspects of our day to day lives. Most of us have
          met our significant others in restaurants creating lasting memories.
          In business, we’ve sketched world changing ideas and planned
          billion-dollar success stories in restaurants, sometimes on a napkin.
        </p>
        <p className={style.text}>
          At Spice Village, the premise is simple; we tell our story through the
          food we serve. Thus, every meal tells a different story. The same goes
          for naming the restaurant Spice Village. Our customers do ask me the
          rhyme or reason behind this unique name. In my view, spices not only
          add flavour to food, but also contain many beneficial nutrients. Once
          an expensive commodity, and one that men would risk their lives for,
          herbs and spices have played an important part in the development of
          civilization. Village denotes to me a small and closely knitted
          community where almost everyone knows everyone. So Spice Village to me
          is a place where strangers come together for revival and renewal, to
          form and forge bonds and relationships through the infinite healing
          power of spices.
        </p>
        <p className={style.text}>
          The Story of Spice Village is a story of taste, passion and
          excellence. From a small corner shop in Tooting in 2004, Spice Village
          expanded to become a multi-award-winning restaurant chain with fans
          from Hollywood & Bollywood including the Mayor of London. We envisaged
          a magic mix of spices, service and ambiance to deliver the healthiest
          Pakistani and Indian cuisines in the UK. Our spicy fish, incredible
          curries, delicious tikkas and mouth-watering kebabs vowed the
          cosmopolitan audience of London. Thanks to Almighty’s blessings and
          your trust and support, in 2019, we are bracing ourselves to expand to
          Scotland and Wales with a nationwide network of franchises.
        </p>
        <p className={style.text}>
          Today, while we continue serving your favourite Indian, Pakistani,
          Bengali, Sri Lankan or Lebanese cuisine to titillate your gastronomic
          senses while creating your luxurious and unforgettable events at the
          most iconic venues. We still retain the same basic philosophy. Every
          meal has a story and may yours be an interesting and a spicy one.
        </p>
        <p className={style.text}>
          <b>Profound regards,</b>
        </p>
        <p className={style.text}>
          <b>Raja Suleman Raza</b>
        </p>
      </div>
      <div className={style.slidercontainer}>
        <Slider {...settings}>
          <div style={{ padding: 8 }} className={style.sliderDiv}>
            <img src={small3} alt="placeholder" className={style.sliderImg} />
          </div>
          <div style={{ padding: 8 }} className={style.sliderDiv}>
            <img src={small4} alt="placeholder" className={style.sliderImg} />
          </div>
          <div style={{ padding: 8 }} className={style.sliderDiv}>
            <img src={small5} alt="placeholder" className={style.sliderImg} />
          </div>
          <div style={{ padding: 8 }} className={style.sliderDiv}>
            <img src={small6} alt="placeholder" className={style.sliderImg} />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default About;
