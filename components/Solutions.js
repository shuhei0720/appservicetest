import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCheck } from "react-icons/fa";

function Solutions() {
  return (
    <section id="solutions">
      <div>
        <div>
          {/* 左 */}
          <div>
            <div>
              <div>
                <Image />
              </div>
              <div>
                {/* 下の段 */}
                <div>
                  <div>
                    <div />
                  </div>
                </div>
                <div>
                  <Image />
                </div>
              </div>
            </div>

            <div>
              <div>
                <div>
                  <div />
                </div>
                <div>
                  <Image />
                </div>
                <div>
                  <div>
                    <strong>20年</strong>
                    <span>支援されています</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 右 */}
          <div>
            <span>サブタイトル</span>
            <h2>タイトル</h2>
            <p>詳細</p>
            <ul>
              <li>
                <span>
                  <FaCheck />
                </span>
                <span>タイトル</span>
              </li>
            </ul>
            {/* ボタン */}
            <div>
              <Link href={""}>資料ダウンロード</Link>
              <Link href={""}>申し込み</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solutions;
