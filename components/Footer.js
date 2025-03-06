import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";

function Footer() {
  return (
    <footer>
      <div>
        <div>
          {/* 左 */}
          <div>
            <Link href={"#"}>
              <Image src={""} />
            </Link>
            <p>description</p>
            <Link href={"#"}>
              <span>もっとみる</span>
              <span>
                <BiChevronRight />
              </span>
            </Link>
          </div>
          {/* 中央 */}
          <div>
            <div>
              <div>
                <h3>linkHeading</h3>
                <ul>
                  <li>
                    <Link href={"#"}>
                      <span>label</span>
                      <span>
                        <BiChevronRight />
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* 右 */}
          <div>
            <h3>contactHeading</h3>
            <p>contactDescription</p>
            <ul>
              <li>
                <FaLocationDot />
                <span>address</span>
              </li>
              <li>
                <FaPhoneAlt />
                <span>phone</span>
              </li>
              <li>
                <IoIosLink />
                <span>website</span>
              </li>
            </ul>
          </div>
        </div>
        <div>Copyright Shuhei 2025</div>
      </div>
    </footer>
  );
}

export default Footer;
