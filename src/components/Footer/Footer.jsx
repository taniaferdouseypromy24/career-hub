import React from "react";
import facebookIcon from "../../assets/socialIcons/facebook.png";
import instaIcon from "../../assets/socialIcons/insta.png";
import twitterIcon from "../../assets/socialIcons/twitter.png";

const Footer = () => {
  return (
    <div className="mt-24 px-5 lg:ps-[200px] lg:pe-[200px] bg-black text-white ">
      <footer className=" footer pt-10 pb-10 ">
        <aside>
          <p className="text-2xl font-bold ">CareerHub</p>
          <p>
            There are many variations of passages <br /> of Lorem Ipsum , but
            the majority have <br /> suffered alteration in some form.
          </p>
          <div className="flex flex-wrap gap-3 py-5">
            <div className="bg-white p-2 rounded-full">
              <img src={facebookIcon} alt="" />
            </div>
            <div className="bg-white p-2 rounded-full">
              <img src={twitterIcon} alt="" />
            </div>
            <div className="bg-white p-2 rounded-full w-8">
              <img src={instaIcon} alt="" />
            </div>
          </div>
        </aside>
        <nav>
          <h6 className="text-lg font-semibold">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="text-lg font-semibold">Product</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="text-lg font-semibold">Support</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>

        <nav>
          <h6 className="text-lg font-semibold">Contact</h6>
          <a className="link link-hover">524 Broadway , NYC</a>
          <a className="link link-hover">+1 777 - 978 - 5570</a>
        </nav>
      </footer>
      <div className="border border-1 border-gray-500"></div>
      <div className="flex flex-wrap justify-between pt-8 pb-8">
        <p> @2023 CareerHub. All Rights Reserved</p>

     
        <p> Powered by CareerHub</p>

      </div>
    </div>
  );
};

export default Footer;
