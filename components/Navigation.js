import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiOutlineBars3 } from "react-icons/hi2";

const navigationMenu = [
  {
    href: "#home",
    label: "ホーム",
  },
  {
    href: "#services",
    label: "サービス",
  },
  {
    href: "#solutions",
    label: "ソリューション",
  },
  {
    href: "#testimonials",
    label: "カスタマー",
  },
  {
    href: "#blog",
    label: "ブログ・ニュース",
  },
];

function Navigation() {
  return (
    <>
      {/* WEBメニュー */}
      <header>
        <div>
          <div>
            {/* ロゴ */}
            <div>
              <Link href={"/"}>
                <Image
                  src={"/assets/logo.png"}
                  width={90}
                  height={60}
                  alt="ロゴ"
                />
              </Link>
            </div>
            {/* メニュー */}
            <div>
              <ul>
                {navigationMenu.map((item, index) => (
                  <li key={index}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* ボタン */}
            <div>
              <Link href={""}>申し込み</Link>

              {/* モバイル用 */}
              <button>
                <HiOutlineBars3 />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* モバイルメニュー */}
    </>
  );
}

export default Navigation;
