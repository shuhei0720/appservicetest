import Image from "next/image";
import React from "react";

const servicesContent = {
  text: {
    subTitle: "ゼミの特徴",
    Title: "受験に強い テストに強い",
    description:
      " 「質の高い授業」と「学習の習慣化」で分かる→伸びる→楽しい→続く。だから、ワンランク上の志望校が見えてくる",
  },
  items: [
    {
      icon: "/assets/icon-1.svg",
      title: "受講形式",
      description: "校舎・オンラインいずれでもOK (併用も可)",
    },
    {
      icon: "/assets/icon-2.svg",
      title: "費用",
      description: "無料※入会金・テキスト代なども不要です。",
    },
    {
      icon: "/assets/icon-3.svg",
      title: "開講講座",
      description: "英語：31講座 数学：55講座 国語：42講座 理科：29講座",
    },
    {
      icon: "/assets/icon-4.svg",
      title: "小学生・中学受験生",
      description:
        "9月下旬からの4カ月で中学内容への基盤となる重要事項を中心に知識を確立させます。2月からの「新中1中学準備講座」では小学校の内容からステップアップし中学内容へつなげます。",
    },
    {
      icon: "/assets/icon-5.svg",
      title: "中学生（高校受験）",
      description:
        "生徒の第一志望校を最大限に尊重しています。生徒たちが高校受験を通じて人間として成長するための受験校指導を心がけており、合格実績のための安易な進路指導はいたしません。",
    },
    {
      icon: "/assets/icon-6.svg",
      title: "高校生・大学受験生",
      description:
        "クラス授業・オンライン授業ともに、各大学の入試傾向と対策法を知り尽くした実力派講師陣が、白熱した授業を展開しているハイレベルな授業です。",
    },
  ],
};

function Services() {
  return (
    <section id="services">
      <div>
        {/* 上の段 */}
        <div>
          <span>{servicesContent.text.subTitle}</span>
          <h2>{servicesContent.text.Title}</h2>
          <p>{servicesContent.text.description}</p>
        </div>

        {/* 下の段 */}
        <div>
          {servicesContent.items.map((item, index) => (
            <div key={index}>
              <div>
                <span>
                  <Image src={item.icon} width={60} height={60} alt="icon" />
                </span>
              </div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
