import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiChevronRight } from "react-icons/bi";

const statsContent = {
  stats: [
    {
      number: "99.9%",
      label: "現役合格率",
    },
    {
      number: "3912",
      label: "生徒数",
    },
    {
      number: "12.8",
      label: "偏差値上昇",
    },
  ],
  text: {
    title: "担当アドバイザーによるサポート",
    description: "学習の目的や目標の合わせてあなただけの目標を設定しています。",
    img: "/assets/illustration.svg",
  },
};

function Stats() {
  return (
    <section>
      <div>
        <div>
          {/* 左側 */}
          <div>
            <div>
              {statsContent.stats.map((item, index) => (
                <div key={index}>
                  <strong>{item.number}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 右側 */}
          <div>
            <div>
              <Image
                src={statsContent.text.img}
                width={100}
                height={200}
                alt="img"
              />
              <p>{statsContent.text.description}</p>
              <h3>{statsContent.text.title}</h3>
              <p>{statsContent.text.description}</p>
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
