import Image from "next/image";
import React from "react";
import styles from "./HomeContent.module.scss";

function HomeContent() {
  return (
    <div className={styles.home_content}>
      <div
        className={
          styles.line +
          " " +
          "col-10 mx-auto d-flex flex-row justify-content-center"
        }
      >
        <div className="col text-center">
          <a href="#" className={styles.link}>
            house of unicornverse
          </a>
        </div>

        <div className="col text-center">
          <a href="#" className={styles.link}>
            why us
          </a>
        </div>

        <div className="col text-center">
          <a href="#" className={styles.link}>
            who we are
          </a>
        </div>

        <div className="col text-center">
          <a href="#" className={styles.link}>
            what we do
          </a>
        </div>

        <div className="col text-center">
          <button className={styles.btn_login}>login</button>
          <button className={styles.btn_join}>join</button>
        </div>
      </div>

      <div className="mt-5">
        <Image
          src="/images/unicornverse/hinh-1.jpg"
          alt="1"
          width={1920}
          height={800}
        />
      </div>

      <div className={styles.box + " " + "col-10 mx-auto d-flex flex-wrap"}>
        <div className="col-12 col-md-4 d-flex flex-column px-5 py-3 py-md-5">
          <p className={styles.box_title}>kết nối đầu tư</p>

          <div className={styles.box_decor}></div>

          <p className={styles.box_content}>
            Sân chơi của các doanh
            <br />
            nghiệp có khát vọng IPO, hỗ
            <br />
            trợ nhau trong vấn đề gọi vốn
            <br />
            rút ngắn thời gian
          </p>
        </div>

        <div className="col-12 col-md-4 d-flex flex-column px-5 py-3 py-md-5">
          <p className={styles.box_title}>phong cách sông mới</p>

          <div className={styles.box_decor}></div>

          <p className={styles.box_content}>
            Phong cách sống mới đầy trải
            <br />
            nghiệm đỉnh cao, trải nghiệm
            <br />
            "Giả lập" của 1 "Mafia" tài
            <br />
            chính
          </p>
        </div>

        <div className="col-12 col-md-4 d-flex flex-column px-5 py-3 py-md-5">
          <p className={styles.box_title}>mở rộng kênh phân phối</p>

          <div className={styles.box_decor}></div>

          <p className={styles.box_content}>
            Kết nỗi mở rộng kênh
            <br />
            phân phối đòn bẫy tốc độ
            <br />
            phát triển của các doanh
            <br />
            nghiệp
          </p>
        </div>
      </div>

      <div className="text-center mt-5">
        <p className="mb-0" style={{ fontSize: "22px", fontWeight: 700 }}>
          TỪ THIỆN
        </p>
        <p className="mb-0" style={{ fontSize: "16px", fontWeight: 500 }}>
          Thể hiện con số thực hiện có
        </p>
        <p className="mb-0" style={{ fontSize: "16px", fontWeight: 500 }}>
          của 3 quỹ từ thiện
        </p>
      </div>

      <div className="col-10 mx-auto d-flex flex-row">
        <div className="col-4 p-3">
          <Image
            src="/images/unicornverse/hinh-2.jpg"
            alt="1"
            width={450}
            height={520}
          />
        </div>

        <div className="col-4 p-3">
          <Image
            src="/images/unicornverse/hinh-3.jpg"
            alt="1"
            width={450}
            height={520}
          />
        </div>

        <div className="col-4 p-3">
          <Image
            src="/images/unicornverse/hinh-4.jpg"
            alt="1"
            width={450}
            height={520}
          />
        </div>
      </div>

      <div className="text-center mt-5">
        <Image
          src="/images/unicornverse/hinh-7.jpg"
          alt="1"
          width={1168}
          height={887}
        />
      </div>

      <div className="text-center mt-4">
        <Image
          src="/images/unicornverse/hinh-5.jpg"
          alt="1"
          width={1291}
          height={758}
        />

        <div className="col-8 mx-auto text-uppercase">
          <p className="fw-bold">ông đậu minh nhật,</p>

          <p>
            người sáng lập cộng đồng unicornverse toàn cầu với mục tiêu tạo dựng
            thế hệ
            <br />
            doanh nhân hiểu về cơ chế vốn ứng dụng và ipo thành công. tạo sự
            thuận lợi cho
            <br />
            các nhà đầu tư và doanh nghiệp kết nối đồng hành cùng nhau.
          </p>

          <p>
            đây là nơi mà các doanh nhân kết nối đầu tư, thể hiện phong cách
            sống chất với
            <br />
            những trải nghiệm đỉnh cao và mở rộng kênh phân phối.
            <br />
            ông được biết dến như một chuyên gia trong lĩnh vực đào tạo , tư vẫn
            và đầu tư cho
            <br />
            các dự án ứng dụng cơ chế vốn và có mục tiêu niêm yết(ipo). ông
            thành lập unicorn-
            <br />
            verse tai việt nam và ngày 16/07/2022 là ngày ra mắt đầu tiên, với
            khát vọng toàn cầu
            <br />
            unicornverse sẽ dần vươn đến thị trường quốc tế tạo nên cộng đồng
            các doanh
            <br />
            ngiệp vững mạnh.
          </p>

          <p>
            tất cả chỉ phụng sự cho một sứ mệnh chung: phát triển con người,
            phát triển doanh
            <br />
            nghiệp và phụng sự xã hội.
          </p>
        </div>
      </div>

      <div className="text-center mt-5">
        <Image
          src="/images/unicornverse/hinh-6.jpg"
          alt="1"
          width={1168}
          height={788}
        />

        <Image
          src="/images/unicornverse/hinh-8.jpg"
          alt="1"
          width={1172}
          height={512}
        />

        <Image
          src="/images/unicornverse/hinh-9.jpg"
          alt="1"
          width={1175}
          height={607}
        />
      </div>
    </div>
  );
}

export default HomeContent;