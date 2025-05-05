import React from "react";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className=" h-[400px] border  ">
      <div className="mb-24">
        <h2 className=" text-3xl font-bold border-b-3 w-fit m-3 pb-3 hover:border-orange-400 ">
          FOOTER PAGE
        </h2>
      </div>
      <div className="flex justify-center gap-8">
        <a className=" flex gap-2 items-center hover:text-orange-400" href="">
          <FaFacebookF size={20} /> <span>FACE BOOK</span>
        </a>
        <a className=" flex gap-2 items-center hover:text-orange-400" href="">
          <FaGithub size={20} /> <span>GIT HUB</span>
        </a>
        <a className=" flex gap-2 items-center hover:text-orange-400" href="">
          <FaSquareXTwitter size={20} /> <span>TWITTER</span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
