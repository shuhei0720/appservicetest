import Image from "next/image";
import Link from "next/link";
import React from "react";

const heroContent = {
  text: {
    subTitle: "Shuheiゼミ",
    title: "一つ上を目指せる！",
    discription:
      "ようこそ！  未来のために、共に学び、成長しましょう。Shuheiゼミでは、生徒一人ひとりに合わせたカリキュラムで、確かな学力向上を目指します。私たちは教育のプロフェッショナルが揃い、生徒たちが自信を持ち、自ら考え、進んで学ぶ力を身に着けられるようサポートしています。",
  },
  images: {
    img1: "/assets/hero-img-1.jpg",
    img2: "/assets/hero-img-2.jpg",
    img3: "/assets/hero-img-3.jpg",
    img4: "/assets/hero-img-4.jpg",
    img5: "/assets/hero-img-5.jpg",
  },
};

function Hero() {
  return (
    <section id="home" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="lg:flex justify-between items-center">
          {/* 左 */}
          <div className="lg:w-5/12 mb-10 lg:mb-0">
            <span
              className='inline-block py-1 pl-3 text-heading
            font-semibold relative mb-7 before:content-[" "]
            before:absolute before:w-2/3 before:bg-pinkLight
            before:left-0 before:top-0 before:bottom-0 before:z-[-1]'
            >
              {heroContent.text.subTitle}
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-heading mb-5">
              {heroContent.text.title}
            </h1>
            <p className="leading-relaxed text-body mb-10">
              {heroContent.text.discription}
            </p>
            <div className="flex space-x-3">
              <Link href={""} className="btnGreen">
                資料ダウンロード
              </Link>
              <Link href={""} className="btnBlue">
                申し込み
              </Link>
            </div>
          </div>

          {/* 右 */}
          <div className="lg:w-6/12">
            {/* 上の段 */}
            <div>
              <div>
                <Image
                  src={heroContent.images.img1}
                  width={397}
                  height={406}
                  alt="img1"
                />
              </div>
              <div>
                <div>
                  <div>
                    <Image
                      src={heroContent.images.img2}
                      width={437}
                      height={437}
                      alt="img2"
                    />
                  </div>
                  <div></div>
                </div>
                <div>
                  <Image
                    src={heroContent.images.img3}
                    width={374}
                    height={392}
                    alt="img3"
                  />
                </div>
              </div>
            </div>

            {/* 下の段 */}
            <div>
              <div>
                <div>
                  <div>
                    <Image
                      src={heroContent.images.img4}
                      width={394}
                      height={394}
                      alt="img4"
                    />
                  </div>
                </div>
                <div>
                  <Image
                    src={heroContent.images.img5}
                    width={446}
                    height={495}
                    alt="img5"
                  />
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
