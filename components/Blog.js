"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

const blogContent = {
  text: {
    subTitle: "ブログ・ニュース",
    title: "新着ニュース",
    description: "日々のブログや最新ニュースを投稿しています",
  },
  blog: [
    {
      link: "#",
      img: "/assets/post-1.jpg",
      title: "冬季講習の受講受付開始しました",
      description:
        "限定募集 20名→残り2名※ 在籍中の塾生は別枠で確保しています。満席になり次第、募集を締め切ります。検討中の方はお早めにご相談ください。",
      date: "2023年10月",
    },
    {
      link: "#",
      img: "/assets/post-2.jpg",
      title: "夏期講習満席になりました",
      description:
        "受講生の時間割調整後に追加募集を予定しています。 ご検討中の方はご相談ください。",
      date: "2023年7月",
    },
    {
      link: "#",
      img: "/assets/post-3.jpg",
      title: "春期講習満席（※塾生は除く）になりました。",
      description:
        "受講生の時間割調整後に追加募集を予定しています。 ご検討中の方はご相談ください",
      date: "2023年4月",
    },
    {
      link: "#",
      img: "/assets/post-4.jpg",
      title: "今年の最終日について",
      description:
        "2022年の通常授業は28日（火）が最終日になります。年末年始の特別講習および冬期講習は時間割通り行います。自習室は年末年始も含め朝6：00から夜10：30まで利用可能です。どうぞご利用ください。",
      date: "2022年12月",
    },
  ],
};

function Blog() {
  const [isBeginning, setIsBeginning] = useState(null);
  const [isEnd, setIsEnd] = useState(null);
  return (
    <section id="blog" className="py-20 bg-light overflow-x-hidden">
      <div className="container px-4 mx-auto">
        {/* 左 */}
        <div className="lg:w-5/12 mb-10 lg:mb-0">
          <span className='inline-block py-1 pl-3 text-heading font-semibold relative mb-7 before:content-[" "] before:absolute before:w-2/3 before:bg-pinkLight before:left-0 before:top-0 before:bottom-0 before:-z-10 z-50'>
            {blogContent.text.subTitle}
          </span>
          <h2 className="text-heading text-2xl lg:text-4xl font-bold mb-5">
            {blogContent.text.title}
          </h2>
          <p className="text-body leading-relaxed">
            {blogContent.text.description}
          </p>
        </div>

        {/* 右 */}
        <div className="lg:w-5/12 text-left lg:text-right">
          <div className="inline-flex ml-auto space-x-3">
            <div
              className={`${
                isBeginning == true ? "" : ""
              } group transition-all duration-300 ease-in-out w-12 h-12 cursor-pointer bg-[#E1E7EA]
            rounded-full inline-flex justify-center items-center
            `}
            >
              <FaChevronLeft
                className={`${isBeginning == true ? "" : ""}
              text-3xl text-green transition-all duration-300 ease-in-out group-hover:text-white`}
              />
            </div>
            <div
              className={`${
                isEnd == true ? "" : ""
              } group transition-all duration-300 ease-in-out w-12 h-12 cursor-pointer bg-[#E1E7EA]
            rounded-full inline-flex justify-center items-center`}
            >
              <FaChevronRight
                className={`${
                  isEnd == true ? "" : ""
                } text-3xl text-green transition-all duration-300 ease-in-out group-hover:text-white`}
              />
            </div>
          </div>
        </div>

        {/* スライド */}
        <Swiper>
          {blogContent.blog.map((item, index) => (
            <SwiperSlide key={index}>
              <div>
                <Link href={item.link}>
                  <Image
                    src={item.img}
                    width={782}
                    height={467}
                    alt="blogImage"
                  />
                </Link>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <span>{item.date}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ボタン */}
        <div className="mx-auto flex-col items-center justify-center w-fit">
          <Link
            href={""}
            className="duration-300 transition-all ease-in-out py-3 px-6 flex border rounded-full space-x-3 items-center hover:border-gray-400"
          >
            過去のニュースは
            <strong className="text-green px-1 font-semibold">こちら</strong>
            <span className="text-body">|</span>
            <span className="bg-green rounded-full w-8 h-8 flex items-center justify-center">
              <FaChevronRight className="text-white text-2xl" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Blog;
