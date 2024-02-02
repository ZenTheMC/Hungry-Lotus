import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>Experience a culinary journey of Asian cuisines.</p>
            </div>
            <p className="mid">
              Hungry Lotus is a dearly beloved local restaurant in Queens, New York, deep in the heart of flushing, one of the most dense Asian cultures in America.
              Our mission is to embody tradition, passion, and deliver the most authentic Asian food experience to our customers. We strive to bring a taste of
              Asia to the mouths of New Yorkers. Whether you're a New York local or visiting from abroad, we implore you to check us out. You won't regret it! 
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;