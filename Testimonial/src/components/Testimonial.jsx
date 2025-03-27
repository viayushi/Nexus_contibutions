import React from "react";
import ladki from "../Assets/pngegg.png";
import bannertwo from "../Assets/bannertwo.jpeg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";

export const Testimonial = () => {
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="p-3 bg-slate-100 hover:text-orange-600 hover:bg-black cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute left-0 top-1/2"
        onClick={onClick}
      >
        <PiCaretLeftLight />
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="p-3 bg-slate-100 hover:text-orange-600 hover:bg-black cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute right-0 top-1/2"
        onClick={onClick}
      >
        <PiCaretRightLight />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const testy = [
    {
      name: "Taanya Kamal",
      img: ladki,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptas quo modi vero ipsum consequuntur dolor, culpa voluptatem nostrum minus nemo placeat nam saepe autem!",
    },
    {
      name: "Navam",
      img: bannertwo,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptas quo modi vero ipsum consequuntur dolor, culpa voluptatem nostrum minus nemo placeat nam saepe autem!",
    },
    {
      name: "Shivam",
      img: bannertwo,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptas quo modi vero ipsum consequuntur dolor, culpa voluptatem nostrum minus nemo placeat nam saepe autem!",
    },
    {
      name: "Jay",
      img: bannertwo,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptas quo modi vero ipsum consequuntur dolor, culpa voluptatem nostrum minus nemo placeat nam saepe autem!",
    },
  ];

  return (
    <div className="w-3/4 m-auto">
      <div className="mt-20">
        <Slider {...settings}>
          {testy.map((d, index) => (
            <div key={index} className="bg-white h-[500px] text-black rounded-xl">
              <div className="h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center">
                <img src={d.img} alt="" className="h-44 w-44 rounded-full bg-white" />
              </div>
              <div className="flex flex-col justify-center items-center gap-4 p-4">
                <p className="text-xl font-semibold">{d.name}</p>
                <p className="text-center">{d.review}</p>
                <button className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl flex">Read More</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
