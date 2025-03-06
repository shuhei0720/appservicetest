import Link from "next/link";
import React from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

function Blog() {
  return (
    <section id="blog">
      <div>
        <div>
          {/* 左 */}
          <div>
            <span>subtitle</span>
            <h2>title</h2>
            <p>description</p>
          </div>

          {/* 右 */}
          <div>
            <div>
              <div>
                <FaChevronRight />
              </div>
              <div>
                <FaChevronLeft />
              </div>
            </div>
          </div>

          {/* スライド */}

          {/* ボタン */}
          <div>
            <Link href={""}>
              過去のニュースは
              <strong>こちら</strong>
              <span>|</span>
              <span>
                <FaChevronRight />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
