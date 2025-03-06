import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

function Testimonials() {
  return (
    <section id="testimonials">
      <div>
        <div>
          {/* 右 */}
          <div>
            <span>subtitle</span>
            <h2>title</h2>
            <p>description</p>
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
                    <div>
                      <Image />
                      <span>
                        <FaQuoteLeft />
                      </span>
                    </div>
                    <div>
                      <strong>name</strong>
                      <span>titlerole</span>
                    </div>
                  </div>
                  <div>
                    <blockquote>『testimony』</blockquote>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div />
                  <div>
                    <div>
                      <div>
                        <Image />
                        <span>
                          <FaQuoteLeft />
                        </span>
                      </div>
                      <div>
                        <strong>name</strong>
                        <span>titlerole</span>
                      </div>
                    </div>
                    <blockquote>『testimony』</blockquote>
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
