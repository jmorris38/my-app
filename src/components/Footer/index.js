import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <h2>Crafted by Justin Morris©</h2>
      <p>
        <ul>
          <a href="">
            <li className="logo">
              <VscGithubAlt />
            </li>
          </a>
          <a href="">
            <li className="logo">
              <AiOutlineLinkedin />
            </li>
          </a>
          <a href="">
            <li className="logo">
              <FaInstagram />
            </li>
          </a>
        </ul>
      </p>
    </footer>
  );
}

export default Footer;
