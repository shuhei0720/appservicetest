import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiChevronRight } from "react-icons/bi";

function Stats() {
  return (
    <section>
      <div>
        <div>
          {/* 左側 */}
          <div>
            <div>
              <strong>９９．９％</strong>
              <span>現役合格率</span>
            </div>
          </div>

          {/* 右側 */}
          <div>
            <div>
              <Image src={""} />
              <h3>タイトル</h3>
              <p>詳細</p>
              <Link href={""}>
                <span>もっと見る</span>
                <span>
                  <BiChevronRight />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
