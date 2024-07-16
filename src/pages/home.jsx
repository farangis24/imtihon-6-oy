import React from "react";
import { OurProduct } from "./our-product";
import { Offer } from "./offer";
import { Button } from "../../button";
// icons
import { ButtonIcon } from "../../icons/button-icon";
import { AboutIcon } from "../../icons/about-icon";
import { AboutIcon2 } from "../../icons/about-icon2";
import { AdminIcon } from "../../icons/admin-icon";
// data
import { Product } from "../data/products";
import { offer } from "../data/offer";

export const Home = () => {
  return (
    <>
      <section
        style={{ backgroundImage: " url(../home/home.jpeg) " }}
        className="w-[1519px] h-screen bg-cover bg-center bg-no-repeat "
      >
        <div className="container pt-[247px]">
          <i className="text-secondary text-center text-base font-serif">
            100% Natural Food
          </i>
          <h1 className="mb-[23px] text-primary text-[60px] w-[480px] font-bold">
            Choose the best <br />
            healthier way <br /> of life
          </h1>
          <Button
            variant="primary"
            className="flex transition-transform transform hover:scale-105 hover:shadow-lg "
            endIcon={<ButtonIcon />}
            type="submit"
          >
            Explore Now
          </Button>
        </div>
      </section>
      <section className="py-[145px]">
        <div className="container ">
          <ul className="flex gap-[20px]">
            <li
              style={{ backgroundImage: " url(../home/home2.png) " }}
              className="w-[680px] rounded-[20px] h-[367px] bg-no-repeat pt-[115px] pl-[60px]   "
            >
              <i className="text-white text-[36px] font-serif">Natural!!</i>
              <h1 className="text-white text-[40px] w-[270px] font-bold">
                Get Garden Fresh Fruits
              </h1>
            </li>
            <li
              className="w-[680px] rounded-[20px] h-[367px] bg-no-repeat pt-[115px] pl-[60px] "
              style={{ backgroundImage: " url(../home/home3.png) " }}
            >
              <i className="text-secondary text-[36px] font-serif">Offer!!</i>
              <h1 className="text-primary text-[40px] w-[250px] font-bold">
                Get 10% off on Vegetables
              </h1>
            </li>
          </ul>
        </div>
      </section>
      <section className="bg-[#F9F8F8] py-[150px]">
        <div className="container  flex">
          <ul className="flex gap-[10px] ">
            <li>
              <img src="../home/home4.png" alt="img" />
            </li>
            <li className="w-[700px] mt-[100px]">
              <i className="text-secondary text-center text-base font-serif ">
                About Us
              </i>
              <p className="  text-3xl text-primary font-bold font-sans ">
                We Believe in Working Accredited Farmers
              </p>
              <p className="text-fourth pb-[40px] ">
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley.
              </p>{" "}
              <li className="flex">
                <div className="transition-transform transform hover:scale-105 hover:shadow-lg rounded-[20px] mb-[5px] mr-[5px]">
                  {" "}
                  <AboutIcon />
                </div>
                <span>
                  <h1 className="text-primary font-bold text-sm">
                    Organic Foods Only
                  </h1>
                  <p className="text-fourth">
                    Simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum
                  </p>
                </span>
              </li>
              <li className="flex pb-[30px]">
                <div className="transition-transform transform hover:scale-105 hover:shadow-lg rounded-[20px] mr-[5px]">
                  {" "}
                  <AboutIcon2 />
                </div>

                <span>
                  <h1 className="text-primary font-bold text-sm">
                    Quality Standards{" "}
                  </h1>
                  <p className="text-fourth">
                    Simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum
                  </p>
                </span>
              </li>
              <Button
                variant="secondary"
                className="flex transition-transform transform hover:scale-105 hover:shadow-lg "
                endIcon={<ButtonIcon />}
                type="submit"
              >
                Shop Now
              </Button>
            </li>
          </ul>
        </div>
      </section>

      <section className="py-[150px]">
        <div className="container text-center ">
          <i className="text-secondary text-center text-base font-serif ">
            Categories{" "}
          </i>
          <p className="text-primary text-3xl font-bold pb-[40px]">
            Our Products
          </p>
          <div className="flex flex-wrap gap-[25px] pb-[140px]">
            {Product.map((data) => (
              <OurProduct key={data.id} {...data} />
            ))}
          </div>
          <div className="px-[550px]">
            <Button
              variant="secondary"
              className=" 
            flex transition-transform transform hover:scale-105 hover:shadow-lg "
              endIcon={<ButtonIcon />}
              type="submit"
            >
              Load More
            </Button>
          </div>
        </div>
      </section>
      <section
        className="w-full h-[1000px] bg-cover bg-no-repeat py-[130px]"
        style={{ backgroundImage: "url(../home/Background.png)" }}
      >
        <div className="text-center">
          <i className="text-secondary text-center text-base font-serif">
            Testimonial
          </i>
          <h1 className="text-primary text-2xl font-bold pb-[50px]">
            What Our Customer Saying?
          </h1>
          <div className="text-center">
            {" "}
            <img
              src="../home/home11.png"
              className="px-[700px] pb-[10px]"
              alt="img"
            />
            <p>⭐️⭐️⭐️⭐️⭐️</p>
            <h3 className="pt-[25px]  px-[440px]  text-fourth pb-[20px]">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been.
            </h3>
            <h1 className="text-primary font-bold text-base">Sara Taylor</h1>
            <p className="text-fourth mb-[130px]">Consumer</p>{" "}
            <ul className="flex justify-center gap-[50px]">
              <li className="transition-transform transform hover:scale-105 hover:shadow-lg bg-#F1F1F1 border-solid border-4 border-fifth rounded-full w-[150px] h-[150px]">
                <h1 className="text-primary font-bold text-2xl pt-[15px] pl-[5px]">
                  100%
                </h1>
                <p className="text-primary text-sm">Organic</p>
              </li>
              <li className="transition-transform transform hover:scale-105 hover:shadow-lg bg-#F1F1F1 border-solid border-4 border-fifth rounded-full w-[150px] h-[150px]">
                <h1 className="text-primary font-bold text-2xl pt-[15px] pl-[5px]">
                  285
                </h1>
                <p className="text-primary text-sm">Active Product</p>
              </li>
              <li className="transition-transform transform hover:scale-105 hover:shadow-lg bg-#F1F1F1 border-solid border-4 border-fifth rounded-full w-[150px] h-[150px]">
                <h1 className="text-primary font-bold text-2xl pt-[15px] pl-[5px]">
                  350+
                </h1>
                <p className="text-primary text-sm">Organic Orchads</p>
              </li>
              <li className="transition-transform transform hover:scale-105 hover:shadow-lg bg-#F1F1F1 border-solid border-4 border-fifth rounded-full w-[150px] h-[150px]">
                <h1 className="text-primary font-bold text-2xl pt-[15px] pl-[5px]">
                  25+
                </h1>
                <p className="text-primary text-sm">Years of Farming</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-primary py-[200px]">
        <div className="container  ">
          <ul className="flex justify-between">
            <li className="w-[470px] ">
              {" "}
              <i className="text-secondary  text-base font-serif">Offer</i>
              <p className="text-white font-semibold text-2xl">
                We Offer Organic For You
              </p>
            </li>
            <li className="pt-[50px] pb-[30px] ">
              <Button
                variant="primary"
                className="flex transition-transform transform hover:scale-105 hover:shadow-lg "
                endIcon={<ButtonIcon />}
                type="submit"
              >
                View All Product{" "}
              </Button>
            </li>
          </ul>
          <div className="flex flex-wrap gap-[25px]">
            {offer.map((data) => (
              <Offer key={data.id} {...data} />
            ))}
          </div>
        </div>
      </section>
      <section className="flex">
        <div
          className="w-[750px] h-[700px] bg-cover bg-no-repeat  "
          style={{ backgroundImage: "url(../home/home5.png)" }}
        ></div>
        <div className="absolute left-[700px] mt-[100px] py-[100px] bg-white pt-[50px] pl-[70px] rounded-[20px] w-[550px] h-[530px]   ">
          <i className="text-secondary text-base font-serif font-semibold">
            Eco Friendly
          </i>
          <p className="text-primary text-2xl font-bold pb-[20px]">
            Econis is a Friendly Organic Store
          </p>
          <ul>
            <li className="pb-[20px]">
              <h1 className="text-primary text-sm font-semibold ">
                Start with Our Company First
              </h1>
              <p className="text-fourth text-[12px]">
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremque laudantium. Sed ut perspiciatis.
              </p>
            </li>
            <li className="pb-[20px]">
              <h1 className="text-primary text-sm font-semibold ">
                Learn How to Grow Yourself{" "}
              </h1>
              <p className="text-fourth text-[12px]">
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremque laudantium. Sed ut perspiciatis.
              </p>
            </li>
            <li>
              <h1 className="text-primary text-sm font-semibold ">
                Farming Strategies of Today{" "}
              </h1>
              <p className="text-fourth text-[12px]">
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremque laudantium. Sed ut perspiciatis.
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section className="py-[150px] bg-[#F1F8F4]">
        <ul className="flex justify-between gap-[20px]">
          <li
            className="w-[495px] h-[500px] py-[200px] px-[100px] bg-cover bg-no-repeat"
            style={{ backgroundImage: "url(../home/home6.png)" }}
          >
            <button className="text-primary text-sm font-semibold   py-[30px] px-[80px] bg-white rounded-[10px]">
              Organic Juice
            </button>
          </li>
          <li
            className=" w-[495px] h-[500px]    py-[200px] px-[100px] bg-cover bg-no-repeat"
            style={{ backgroundImage: "url(../home/home7.png)" }}
          >
            <button className=" text-primary text-sm font-semibold py-[30px] px-[80px] bg-white rounded-[10px]">
              Organic Food
            </button>
          </li>
          <li
            className=" w-[495px] h-[500px] py-[200px] px-[100px] bg-cover bg-no-repeat"
            style={{ backgroundImage: "url(../home/home8.png)" }}
          >
            <button className="text-primary text-sm font-semibold  py-[30px] px-[80px] bg-white rounded-[10px]">
              Nuts Cookis
            </button>
          </li>
        </ul>
      </section>
      <section>
        <div className="container py-[100px]">
          <div className="flex justify-between pb-[45px]">
            <div className="w-[700px]">
              <i className="text-secondary text-base font-serif font-semibold">
                News
              </i>
              <p className="text-primary text-2xl font-bold">
                Discover weekly content about organic food, & more
              </p>
            </div>
            <div className="pt-[20px]">
              <Button
                variant="thirdy"
                className="flex transition-transform transform hover:scale-105 hover:shadow-lg "
                endIcon={<ButtonIcon />}
                type="submit"
              >
                More News{" "}
              </Button>
            </div>
          </div>
          <ul className="flex gap-[20px] ">
            <li
              className=" rounded-[20px] bg-cover bg-no-repeat w-[677px] h-[524px]"
              style={{ backgroundImage: "url(../home/home9.png)" }}
            >
              <div
                className="absolute  mt-[280px]   bg-white pt-[0px] pl-[40px] mx-[40px] rounded-[20px] w-[560px] h-[300px]
              transition-transform transform scale-105 shadow-lg"
              >
                <div className="w-[500px]">
                  {" "}
                  <span className="flex mt-[45px] mb-[10px] gap-[8px] ">
                    <AdminIcon />{" "}
                    <h4 className="text-primary font-semibold">
                      By Rachi Card
                    </h4>
                  </span>
                  <span className="">
                    <h1 className="text-primary text-base font-bold">
                      The Benefits of Vitamin D & How to Get It
                    </h1>
                    <p className="text-fourth text-sm">
                      Simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum
                    </p>
                  </span>
                  <Button
                    variant="primary"
                    className="flex mt-[18px] transition-transform transform hover:scale-105 hover:shadow-lg "
                    endIcon={<ButtonIcon />}
                    type="submit"
                  >
                    More News{" "}
                  </Button>
                </div>
              </div>
            </li>
            <li
              className="rounded-[20px] bg-cover bg-no-repeat w-[677px] h-[524px]"
              style={{ backgroundImage: "url(../home/home10.png)" }}
            >
              <div
                className="absolute  mt-[280px]   bg-white pt-[0px] pl-[40px] mx-[40px] rounded-[20px] w-[560px] h-[300px]
              transition-transform transform scale-105 shadow-lg"
              >
                <div className="w-[500px]">
                  {" "}
                  <span className="flex mt-[45px] mb-[10px] gap-[8px] ">
                    <AdminIcon />{" "}
                    <h4 className="text-primary font-semibold">
                      By Rachi Card
                    </h4>
                  </span>
                  <span className="">
                    <h1 className="text-primary text-base font-bold">
                      Our Favourite Summertime Tommeto{" "}
                    </h1>
                    <p className="text-fourth text-sm">
                      Simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum
                    </p>
                  </span>
                  <Button
                    variant="primary"
                    className="flex mt-[18px] transition-transform transform hover:scale-105 hover:shadow-lg "
                    endIcon={<ButtonIcon />}
                    type="submit"
                  >
                    More News{" "}
                  </Button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};
