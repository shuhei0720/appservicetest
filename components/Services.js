import Image from "next/image";
import React from "react";

function Services() {
  return (
    <section id="services">
      <div>
        {/* 上の段 */}
        <div>
          <span>サブタイトル</span>
          <h2>タイトル</h2>
          <p>詳細</p>
        </div>

        {/* 下の段 */}
        <div>
          <div>
            <div>
              <span>
                <Image src={""} />
              </span>
            </div>
            <div>
              <h3>タイトル</h3>
              <p>詳細</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
