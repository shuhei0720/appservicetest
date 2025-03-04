import Image from "next/image";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <section>
      <div>
        <div>
          {/* 左 */}
          <div>
            <span>サブタイトル</span>
            <h1>タイトル</h1>
            <p>詳細</p>
            <div>
              <Link href={""}>資料ダウンロード</Link>
              <Link href={""}>申し込み</Link>
            </div>
          </div>

          {/* 右 */}
          <div>
            {/* 上の段 */}
            <div>
              <div>
                <Image />
              </div>
              <div>
                <div>
                  <div>
                    <Image />
                  </div>
                  <div></div>
                </div>
                <div>
                  <Image />
                </div>
              </div>
            </div>

            {/* 下の段 */}
            <div>
              <div>
                <div>
                  <div>
                    <Image />
                  </div>
                </div>
                <div>
                  <Image />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
