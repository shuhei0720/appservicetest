import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";

const footerContent = {
  text: {
    logo: "/assets/logo.png",
    description:
      "成績はもう上がらないとあきらめていませんか？ 成績が上がらないのは能力のせいではありません。今までのやり方を変えるだけで、学力・成績は短期間で飛躍的に伸びます！",
  },
  footerLinks: [
    {
      heading: "概要",
      links: [
        {
          href: "#",
          label: "ホーム",
        },
        {
          href: "#",
          label: "サービス",
        },
        {
          href: "#",
          label: "ソリューション",
        },
        {
          href: "#",
          label: "カスタマー",
        },
        {
          href: "#",
          label: "ブログ・ニュース",
        },
      ],
    },
    {
      heading: "その他",
      links: [
        {
          href: "#",
          label: "ブログ・ニュース",
        },
        {
          href: "#",
          label: "サポート",
        },
        {
          href: "#",
          label: "サイトマップ",
        },
        {
          href: "#",
          label: "プライバシーポリシー",
        },
      ],
    },
  ],
  contact: {
    heading: "連絡先",
    description: "お気軽にお電話ください",
    address: {
      street: "東京都港区芝公園１",
      phone: "(0120) 123-4567",
      website: "https://origindoc.com",
    },
  },
};

function Footer() {
  return (
    <footer>
      <div>
        <div>
          {/* 左 */}
          <div>
            <Link href={"#"}>
              <Image
                src={footerContent.text.logo}
                width={90}
                height={60}
                alt="logo"
              />
            </Link>
            <p>{footerContent.text.description}</p>
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
              {footerContent.footerLinks.map((footerLink, index) => (
                <div key={index}>
                  <h3>{footerLink.heading}</h3>
                  <ul>
                    {footerLink.links.map((link, index) => (
                      <li key={index}>
                        <Link href={"#"}>
                          <span>{link.label}</span>
                          <span>
                            <BiChevronRight />
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          {/* 右 */}
          <div>
            <h3>{footerContent.contact.heading}</h3>
            <p>{footerContent.contact.description}</p>
            <ul>
              <li>
                <FaLocationDot />
                <span>{footerContent.contact.address.street}</span>
              </li>
              <li>
                <FaPhoneAlt />
                <span>{footerContent.contact.address.phone}</span>
              </li>
              <li>
                <IoIosLink />
                <span>{footerContent.contact.address.website}</span>
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
