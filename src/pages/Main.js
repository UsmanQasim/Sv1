import React from "react";
import { Link } from "react-router-dom";
import style from "../pages/Main.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import img1 from "../GalleryPhotos/Anarkali-Chat-1.jpg";
import img2 from "../GalleryPhotos/garden-room-at-syon-park.jpg";
import img3 from "../GalleryPhotos/The-Walled-Garden-At-Syon.jpg";
import logo from "../sv-logo.svg";
import pakwed from "../GalleryPhotos/pakwed.jpg";
import lastmin from "../GalleryPhotos/lastmin.jpg";
import small1 from "../GalleryPhotos/sponsor slides/clifton.png";
import small2 from "../GalleryPhotos/sponsor slides/csc-min.png";
import small3 from "../GalleryPhotos/sponsor slides/diversey-min.png";
import small4 from "../GalleryPhotos/sponsor slides/food-hygiene-min.png";
import small5 from "../GalleryPhotos/sponsor slides/food-standards-agency-min.png";
import small6 from "../GalleryPhotos/sponsor slides/hmc-min.png";
import small7 from "../GalleryPhotos/sponsor slides/hsqc-min.png";
import small8 from "../GalleryPhotos/sponsor slides/ISO-9001-min.png";
import small9 from "../GalleryPhotos/sponsor slides/qms-min.png";

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplayspeed: 500,
  slidesToShow: 4,
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

const Main = () => {
  return (
    <>
      <div>
        <div className={style.coursal_container}>
          <Carousel className="carousel-style">
            <Carousel.Item className="slider-item-div">
              <img className={style.images} src={img2} alt="First slide" />
              <Carousel.Caption className={style.coursal_text}>
                <p className={style.text}>
                  Last Minute Catering & Events{" "}
                  <p className={style.textby}>By Spicy Village</p>
                </p>
              </Carousel.Caption>
              <Carousel.Caption className={style.buttonArea}>
                <button className={style.btnCou}>Enquire Now</button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="slider-item-div">
              <img className={style.images} src={img1} alt="Second slide" />
              <Carousel.Caption className={style.coursal_text}>
                <p className={style.text}>
                  Last Minute Catering & Events{" "}
                  <p className={style.textby}>By Spicy Village</p>
                </p>
              </Carousel.Caption>
              <Carousel.Caption className={style.buttonArea}>
                <button className={style.btnCou}>Enquire Now</button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="slider-item-div">
              <img className={style.images} src={img3} alt="Third slide" />
              <Carousel.Caption className={style.coursal_text}>
                <p className={style.text}>
                  Last Minute Catering & Events{" "}
                  <p className={style.textby}>By Spicy Village</p>
                </p>
              </Carousel.Caption>
              <Carousel.Caption className={style.buttonArea}>
                <button className={style.btnCou}>Enquire Now</button>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <div className={style.section_3}>
          <img src={logo} alt="little" className={style.imgstory} />
          <p className={style.title_story}>OUR STORY</p>
          <p>
            <b>
              MULTI - AWARD - WINNING BRITISH PAKISTANI RESTAURANTS GROUP &
              EVENT CATERERS
            </b>
          </p>
          <div className={style.paragraph}>
            <p>
              The Story of Spice Village is a story of taste, passion and
              excellence. It all started by Suleman Raza, a teenager who
              migrated to London in pursuit of a better life in early 2000,
              found himself sweating as a chef in a Brixton based eatery in
              South London inspired by his mother's secret recipes of homemade
              Desi style food with an aspiration to start his own restaurant.
              Eventually, his dream became a reality, and In 2004, Suleman and
              his brother managed to open up a small 15 seater takeaway in
              Tooting with true British Pakistani identity. His sheer passion,
              determination and culinary vision has always been to claim
              recognition for the authentic Pakistani cuisine in the UK
              connecting you with its rich culture through its distinct taste,
              desi flavors and infinite healing power of spices, offering a
              journey to passionate food lovers from every walk of life to
              celebrate good food and sharing intriguing food love stories .
            </p>
            <p>
              Today, Spice Village group has expanded to become a
              multi-award-winning British Pakistani restaurant chain to UK's
              leading events caterer due to its demand with profile followers
              from Hollywood & Bollywood.
            </p>
            <p>
              Suleman has been recently awarded the 'Curry King in Greater
              London 2019 Award" and has also been ranked amongst the 100 most
              influential persons in the British food & hospitality industry.
              Suleman Regularly appears on radio, newspapers and TV, including
              BBC as a restaurateur, food and business expert, contributing his
              expertise to inspire, build and reflect the true British success
              story.
            </p>
          </div>
        </div>

        <div className={style.section_4}>
          <div className={style.section_4_left_div}>
            <figure className={style.figure}>
              <img
                src={pakwed}
                className={style.imgleft}
                alt="Pakistan Weddings"
              />
            </figure>
          </div>
          <div className={style.section_4_right_div}>
            <p className={style.text_section_4_head}>
              <b className={style.headertitle}>Pakistan Wedding</b>
            </p>
            <p className={style.right_div_text_sec4}>
              HMC certified halal Pakistani menu Pakistani cuisine can be
              characterized by a blend of various regional cooking traditions of
              the South Asian subcontinent, Central Asia as well as elements
              from its Mughal legacy. The various cuisines are derived from
              Pakistan's ethnic and cultural diversity. The blend of Indian, Far
              Eastern and Middle Eastern cooking techniques creates a
              distinctive mix of complex flavours. Spice Village is pioneer in
              introducing the authentic Pakistani cuisine in the UK, that was
              previously confused with its well known South Asian neighbour,
              India. We distinguished the Pakistani cuisine giving it unique,
              rich and distinguishable Indus Valley identity. Spice Village
              excel in serving sumptuous and uniquely tasteful Pakistani
              cuisine. Our expert team of chefs use only the finest of
              ingredients and freshest of spices to create the most sought-after
              traditional Pakistani dishes. Thousands of reviews from the
              world’s most trusted review sites including Tripadvisors to
              Squaremeal put Spice Village as a leading caterer in Pakistani
              cuisine.
            </p>
          </div>
        </div>

        <div className={style.section_5}>
          <div className={style.section_5_right_div}>
            <p className={style.text_section_5_head}>
              <b className={style.headertitle}>Last Minute Catering</b>
            </p>
            <p className={style.right_div_text_sec5}>
              HMC certified halal Pakistani menu Pakistani cuisine can be
              characterized by a blend of various regional cooking traditions of
              the South Asian subcontinent, Central Asia as well as elements
              from its Mughal legacy. The various cuisines are derived from
              Pakistan's ethnic and cultural diversity. The blend of Indian, Far
              Eastern and Middle Eastern cooking techniques creates a
              distinctive mix of complex flavours. Spice Village is pioneer in
              introducing the authentic Pakistani cuisine in the UK, that was
              previously confused with its well known South Asian neighbour,
              India. We distinguished the Pakistani cuisine giving it unique,
              rich and distinguishable Indus Valley identity. Spice Village
              excel in serving sumptuous and uniquely tasteful Pakistani
              cuisine. Our expert team of chefs use only the finest of
              ingredients and freshest of spices to create the most sought-after
              traditional Pakistani dishes. Thousands of reviews from the
              world’s most trusted review sites including Tripadvisors to
              Squaremeal put Spice Village as a leading caterer in Pakistani
              cuisine.
            </p>
          </div>
          <div className={style.section_5_left_div}>
            <figure className={style.figure}>
              <img
                src={lastmin}
                alt="Pakistan Weddings"
                className={style.imgright}
              />
            </figure>
          </div>
        </div>

        <div className={style.strip}>
          <div className={style.strip_container}>
            <img src={logo} alt="little" className={style.smallicon} />
            <div className={style.strip_left_text}>
              <p className={style.pr}>Want to view & book your next event?</p>
              <h3 className={style.callpr}>
                Call Us Now{" "}
                <a
                  href="tel:020 8680 8844"
                  data-tip=""
                  style={{
                    textDecoration: "none",
                    color: "white",
                    wordSpacing: "1px",
                  }}
                >
                  020 8680 8844
                </a>
              </h3>
            </div>
          </div>
        </div>

        <section className={style.catering_section}>
          <div className={style.container}>
            <h1 className={style.container_text_h1}>Catering</h1>
            <p className={style.container_text_p}>Every Menu Has a Story</p>
          </div>
          <div className={style.floating_goldbar}>
            <div className={style.goldbar_container}>
              <h2 className={style.golhead}>SPICE VILLAGE EXPERIENCE</h2>
              <p className={style.exppra}>
                At Spice Village, every menu has its unique story and origin.
                Spice Village specialises in Halal Indian catering and Pakistani
                catering where all delectable dishes are handpicked by our
                award-winning chefs offering a wide range of choices while using
                the finest and freshest of healthy ingredients. Our expert team
                will organise complementary food tasting session helping you
                design a bespoke menu for your unforgettable event.
              </p>
              <div className={style.btnwrap}>
                <Link
                  to="/download/SV_menu.pdf"
                  target="_blank"
                  download
                  style={{ fontDecoration: "none" }}
                >
                  <button className={style.btn_exp}>View Our Menu </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className={style.slidercontainer}>
          <Slider {...settings}>
            <div style={{ padding: 8 }} className={style.sliderDiv}>
              <img src={small1} alt="placeholder" className={style.sliderImg} />
            </div>
            <div>
              <div style={{ padding: 8 }} className={style.sliderDiv}>
                <img src={small2} alt="placeholder" />
              </div>
            </div>
            <div>
              <div style={{ padding: 8 }} className={style.sliderDiv}>
                <img src={small3} alt="placeholder" />
              </div>
            </div>
            <div>
              <div style={{ padding: 8 }} className={style.sliderDiv}>
                <img src={small4} alt="placeholder" />
              </div>
            </div>
            <div>
              <div style={{ padding: 8 }} className={style.sliderDiv}>
                <img src={small5} alt="placeholder" />
              </div>
            </div>
            <div>
              <div style={{ padding: 8 }} className={style.sliderDiv}>
                <img src={small6} alt="placeholder" />
              </div>
            </div>
            <div>
              <div style={{ padding: 8 }} className={style.sliderDiv}>
                <img src={small7} alt="placeholder" />
              </div>
            </div>
            <div>
              <div style={{ padding: 8 }} className={style.sliderDiv}>
                <img src={small8} alt="placeholder" />
              </div>
            </div>
            <div>
              <div style={{ padding: 8 }} className={style.sliderDiv}>
                <img src={small9} alt="placeholder" />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Main;
