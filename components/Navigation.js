import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiOutlineBars3 } from "react-icons/hi2";

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
                <li>
                  <Link href={""}>ホーム、、、</Link>
                </li>
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
