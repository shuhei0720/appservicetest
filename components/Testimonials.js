import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonialsContent = {
  text: {
    subTitle: "2023年度 合格者の声",
    title: "難関大へ2023合格者の声",
    description: "Docゼミから志望大学に合格した方の声がたくさん届いています！",
  },
  testimonials: [
    {
      img: "/assets/person1.png",
      name: "匿名希望さん",
      titleRole: "スペシャルコースを利用",
      testimony:
        "通信教育をもともとやっていたこともあり、教室にも通い始めました。高校2年生からはじめて塾に通い始めたので最初は不安もありましたが、教室は温かい雰囲気で、変に馴れ合うようなこともなく良かったです。講師の先生方は気さくに質問に応じて下さり、とても感謝しています。",
    },
    {
      img: "/assets/person2.png",
      name: "小林さん",
      titleRole: "夏期講習を利用",
      testimony:
        "私が合格できたのは、明らかにゼミのおかげです。 教室はアットホームで、自分の行きたい方向に正しい努力をさせてくれました。特に教室長の方は一人ひとりの特性を見て指導してくださり、講師の先生方も、私たち生徒を見守り時には厳しく指導してくださいました。",
    },
    {
      img: "/assets/person3.png",
      name: "STさん",
      titleRole: "冬季講習を利用",
      testimony:
        "個別指導教室では、東大の実際の過去問を演習形式で行うことができたので、本番と同じレベルの問題を添削付きで何回も練習することができとても良かったです。また、教室では、Z会の共通テスト教材を貸し出ししてもらえるので、ぜひ活用してください。",
    },
  ],
};

function Testimonials() {
  return (
    <section id="testimonials">
      <div>
        <div>
          {/* 右 */}
          <div>
            <span>{testimonialsContent.text.subTitle}</span>
            <h2>{testimonialsContent.text.title}</h2>
            <p>{testimonialsContent.text.description}</p>
            <div>
              <Link href={""}>資料ダウンロード</Link>
            </div>
          </div>

          {/* 左 */}
          <div>
            <div>
              {/* 2番目だけ弾く */}
              <div>
                <div>
                  <div>
                    {testimonialsContent.testimonials.map((item, index) => {
                      if (index == 1) return null;
                      return (
                        <div key={index}>
                          <div>
                            <Image
                              src={item.img}
                              width={579}
                              height={720}
                              alt="img1"
                            />
                            <span>
                              <FaQuoteLeft />
                            </span>
                          </div>
                          <div>
                            <strong>{item.name}</strong>
                            <span>{item.titleRole}</span>
                          </div>
                          <div>
                            <blockquote>『{item.testimony}』</blockquote>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div />
                  <div>
                    <div>
                      <div>
                        <Image
                          src={testimonialsContent.testimonials[1].img}
                          width={579}
                          height={720}
                          alt="img2"
                        />
                        <span>
                          <FaQuoteLeft />
                        </span>
                      </div>
                      <div>
                        <strong>
                          {testimonialsContent.testimonials[1].name}
                        </strong>
                        <span>
                          {testimonialsContent.testimonials[1].titleRole}
                        </span>
                      </div>
                    </div>
                    <blockquote>
                      『{testimonialsContent.testimonials[1].testimony}』
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
