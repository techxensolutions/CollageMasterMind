'use client';
import Link from "next/link";
import Button from "./Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Accommodations",
      description:
        "Alex had dyslexia, and he was still able to raise a low ACT score by 13 points!",
      image: "/images/accommodations.png",
    },
    {
      id: 2,
      title: "Motivation",
      description:
        "Sophia had trouble with motivation at first and ended up with 3 perfect sections!",
      image: "/images/motivation.png",
    },
    {
      id: 3,
      title: "One Subject",
      description:
        "Emily struggled in math, and she was able to increase her ACT score by 8 points!",
      image: "/images/one-subject.png",
    },
    {
      id: 4,
      title: "Careless Errors",
      description:
        "Cynthia was making careless errors, and she increased her SAT from a 1420 to a 1580.",
      image: "/images/careless-errors.png",
    },
  ];

  var settings = {
    infinite: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="relative py-16">
      <div
        className="absolute right-0 top-0 w-[250px] h-[585px] bg-contain bg-no-repeat"
        style={{ backgroundImage: "url('/images/ScoresBG.png')" }}
      ></div>
      <div className="relative max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-0">
        <h2 className="text-3xl font-[500] text-center text-gray-900 sm:text-4xl">
          Case Studies
        </h2>
        <div className="mt-14">
          <Slider {...settings}>
            {caseStudies.map((caseStudy) => (
              <div key={caseStudy.id} className="px-4 w-1/4">
                <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h3 className="case-study-title text-center">
                    {caseStudy.title}
                  </h3>
                  <p className="mt-4 text-gray-700">{caseStudy.description}</p>
                  <div className="mt-8">
                    <Link
                      href="#"
                      className="inline-block px-6 py-2 border border-transparent text-base font-medium rounded-md bg-primary text-white hover:bg-primary-dark"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="mt-8 text-center">
          <Button title="BOOK YOUR STRATEGY SESSION!" type="filled" />
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
