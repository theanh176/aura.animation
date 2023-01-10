import Image from "next/image";
import React from "react";
import styles from "./HomeContent.module.scss";
import Slider from "react-slick";

function HomeContent() {
	const ArrowNext = ({ currentSlide, slideCount, ...props }) => (
		<button {...props} className={styles.btn_next}>
			<i class="fal fa-chevron-right	"></i>
		</button>
	);

	const ArrowPrev = ({ currentSlide, slideCount, ...props }) => (
		<button {...props} className={styles.btn_prev}>
			<i class="fal fa-chevron-left"></i>
		</button>
	);
	const settings = {
		nextArrow: <ArrowNext />,
		prevArrow: <ArrowPrev />,
		customPaging: function (i) {
			return (
				<a>
					<Image
						alt="image"
						src={`/images/slide/solar0${i + 1}.png`}
						width={160}
						height={160}
					/>
				</a>
			);
		},
		dots: true,
		dotsClass: "slick-dots slick-thumb",
		infinite: true,
		// autoplay: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrow: true,
		pauseOnHover: true,
	};
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

			<div
				className="mt-5"
				data-aos="fade-up"
				data-aos-easing="linear"
				data-aos-duration="1500"
			>
				<Image
					src="/images/unicornverse/Banner_home.jpg"
					alt="1"
					width={3841}
					height={1606}
				/>
			</div>

			<div
				className={styles.box + " " + "col-10 mx-auto d-flex flex-wrap"}
				data-aos="fade-up"
				data-aos-easing="linear"
				data-aos-duration="1500"
			>
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
						&quot;Giả lập&quot; của 1 &quot;Mafia&quot; tài
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

			<div
				className="text-center mt-5"
				data-aos="fade-up"
				data-aos-easing="linear"
			>
				<p
					className="mb-0"
					style={{ fontSize: "22px", fontWeight: 700 }}
				>
					TỪ THIỆN
				</p>
				<p
					className="mb-0"
					style={{ fontSize: "16px", fontWeight: 500 }}
				>
					Thể hiện con số thực hiện có
				</p>
				<p
					className="mb-0"
					style={{ fontSize: "16px", fontWeight: 500 }}
				>
					của 3 quỹ từ thiện
				</p>
			</div>

			<div className="col-10 mx-auto d-flex flex-row">
				<div
					className="col-4 p-3"
					data-aos="fade-right"
					data-aos-offset="300"
					data-aos-easing="ease-in-sine"
					data-aos-duration="2000"
				>
					<Image
						src="/images/unicornverse/hinh-2.jpg"
						alt="1"
						width={450}
						height={520}
					/>
				</div>

				<div
					className="col-4 p-3"
					data-aos="fade-up"
					data-aos-offset="300"
					data-aos-easing="ease-in-sine"
					data-aos-duration="2000"
				>
					<Image
						src="/images/unicornverse/hinh-3.jpg"
						alt="1"
						width={450}
						height={520}
					/>
				</div>

				<div
					className="col-4 p-3"
					data-aos="fade-left"
					data-aos-offset="300"
					data-aos-easing="ease-in-sine"
					data-aos-duration="2000"
				>
					<Image
						src="/images/unicornverse/hinh-4.jpg"
						alt="1"
						width={450}
						height={520}
					/>
				</div>
			</div>

			<div className={styles.session_4 + " " + "text-center mt-5"}>
				<h1
					data-aos="fade-up"
				>
					QUYỀN LỢI HỘI VIÊN
				</h1>
				<hr
					data-aos="fade-up"
				/>
				<div className="col-10 mx-auto d-flex flex-row justify-content-between my-5">
					<div
						className="col-2"
						data-aos="flip-left"
						data-aos-offset="300"
						data-aos-easing="ease-in-sine"
						data-aos-duration="2000"
					>
						<p>1</p>
						<span>
							Thu thập 30% trên phí thu về của unicornverse/ năm.
						</span>
					</div>
					<div
						className="col-2"
						data-aos="flip-right"
						data-aos-offset="300"
						data-aos-easing="ease-in-sine"
						data-aos-duration="2000"
					>
						<p>2</p>
						<span>Là một giám đốc quỹ đầu tư.</span>
					</div>
					<div
						className="col-2"
						data-aos="flip-left"
						data-aos-offset="300"
						data-aos-easing="ease-in-sine"
						data-aos-duration="2000"
					>
						<p>3</p>
						<span>
							có thể viết quy chế vận hành quỹ và thu hoa hồng
							quản lý từ lợi nhuận của quỹ.
						</span>
					</div>
					<div
						className="col-2"
						data-aos="flip-right"
						data-aos-offset="300"
						data-aos-easing="ease-in-sine"
						data-aos-duration="2000"
					>
						<p>4</p>
						<span>được làm thương hiệu cá nhân mạnh.</span>
					</div>
				</div>
				<hr data-aos="fade-up" />
				<div className="col-10 mx-auto d-flex flex-row justify-content-between my-5">
					<div
						className="col-2"
						data-aos="flip-left"
						data-aos-offset="300"
						data-aos-easing="ease-in-sine"
						data-aos-duration="2000"
					>
						<p>5</p>
						<span>có cộng đồng.</span>
					</div>
					<div
						className="col-2"
						data-aos="flip-right"
						data-aos-offset="300"
						data-aos-easing="ease-in-sine"
						data-aos-duration="2000"
					>
						<p>6</p>
						<span>
							hoa hồng nếu thành viên đi học cơ chế vốn của aura
							capital tổ chức.
						</span>
					</div>
					<div
						className="col-2"
						data-aos="flip-left"
						data-aos-offset="300"
						data-aos-easing="ease-in-sine"
						data-aos-duration="2000"
					>
						<p>7</p>
						<span>
							hoa hồng từ hợp đồng tư vấn từ aura capital.
						</span>
					</div>
					<div
						className="col-2"
						data-aos="flip-right"
						data-aos-offset="300"
						data-aos-easing="ease-in-sine"
						data-aos-duration="2000"
					>
						<p>8</p>
						<span>
							có hoa hồng và cổ phiếu thưởng từ việc kết nối các
							nhà đầu tư cho các dự án.
						</span>
					</div>
				</div>
				<hr data-aos="fade-up" />
				<div className="col-10 mx-auto d-flex flex-row justify-content-between my-5">
					<div className="col-3"></div>
					<div
						className="col-6"
						data-aos="flip-left"
						data-aos-offset="300"
						data-aos-easing="ease-in-sine"
						data-aos-duration="2000"
					>
						<p>9</p>
						<span>
							nếu có thành viên của house đủ tư cách mở house, chủ
							house hỗ trợ kết nối thành lập sẽ nhận 10% hoa hồng
							từ chi phí thành lập house
						</span>
					</div>
					<div className="col-3"></div>
				</div>
				<hr data-aos="fade-up" />
			</div>

			<div className={styles.session_5 + " " + "text-center"}>
				<div
					data-aos="fade-up"
					data-aos-offset="300"
					data-aos-easing="ease-in-sine"
					data-aos-duration="2000"
					className="col-10 mx-auto d-flex flex-row justify-content-center"
				>
					<div className={styles.box_icon + " " + "col-2"}>
						<Image
							src="/images/icon_left.jpg"
							alt="1"
							width={472}
							height={84}
						/>
					</div>
					<h1>NHÀ SÁNG LẬP</h1>
					<div className={styles.box_icon + " " + "col-2"}>
						<Image
							src="/images/icon_right.jpg"
							alt="1"
							width={472}
							height={84}
						/>
					</div>
				</div>

				<div
					className={styles.image_ceo}
					data-aos="fade-up"
					data-aos-offset="300"
					data-aos-easing="ease-in-sine"
					data-aos-duration="2000"
				>
					<Image
						src="/images/dauminhnhat.jpg"
						alt="1"
						width={3627}
						height={1808}
					/>
				</div>

				<div
					className="col-8 mx-auto text-uppercase"
					style={{
						fontSize: "20px",
					}}
					data-aos="fade-up"
					data-aos-offset="300"
					data-aos-easing="ease-in-sine"
					data-aos-duration="2000"
				>
					<p className="fw-bold">ông đậu minh nhật,</p>

					<p>
						người sáng lập cộng đồng unicornverse toàn cầu với mục
						tiêu tạo dựng thế hệ
						<br />
						doanh nhân hiểu về cơ chế vốn ứng dụng và ipo thành
						công. tạo sự thuận lợi cho
						<br />
						các nhà đầu tư và doanh nghiệp kết nối đồng hành cùng
						nhau.
					</p>

					<p>
						đây là nơi mà các doanh nhân kết nối đầu tư, thể hiện
						phong cách sống chất với
						<br />
						những trải nghiệm đỉnh cao và mở rộng kênh phân phối.
						<br />
						ông được biết dến như một chuyên gia trong lĩnh vực đào
						tạo , tư vẫn và đầu tư cho
						<br />
						các dự án ứng dụng cơ chế vốn và có mục tiêu niêm
						yết(ipo). ông thành lập unicorn-
						<br />
						verse tai việt nam và ngày 16/07/2022 là ngày ra mắt đầu
						tiên, với khát vọng toàn cầu
						<br />
						unicornverse sẽ dần vươn đến thị trường quốc tế tạo nên
						cộng đồng các doanh
						<br />
						ngiệp vững mạnh.
					</p>

					<p>
						tất cả chỉ phụng sự cho một sứ mệnh chung: phát triển
						con người, phát triển doanh
						<br />
						nghiệp và phụng sự xã hội.
					</p>
				</div>
			</div>

			<div
				className="mt-5"
				data-aos="fade-down"
				data-aos-offset="300"
				data-aos-easing="ease-in-sine"
				data-aos-duration="2000"
			>
				<Slider {...settings}>
					<div className="text-center">
						<Image
							alt="image"
							src={"/images/slide/slide1.jpg"}
							width={900}
							height={700}
						/>
					</div>
					<div className="text-center">
						<Image
							alt="image"
							src={"/images/slide/slide2.jpg"}
							width={900}
							height={700}
						/>
					</div>
					<div className="text-center">
						<Image
							alt="image"
							src={"/images/slide/slide3.jpg"}
							width={900}
							height={700}
						/>
					</div>
					<div className="text-center">
						<Image
							alt="image"
							src={"/images/slide/slide4.jpg"}
							width={900}
							height={700}
						/>
					</div>
					<div className="text-center">
						<Image
							alt="image"
							src={"/images/slide/slide5.jpg"}
							width={900}
							height={700}
						/>
					</div>
				</Slider>
			</div>

			<div className={styles.session_6 + " " + "text-center mt-5"}>
				<div
					data-aos="fade-up"
					data-aos-offset="300"
					data-aos-easing="ease-in-sine"
					data-aos-duration="2000"
				>
					<h1>VISION AND MISSION</h1>

					<div
						className={
							styles.vision_mission +
							" " +
							"mx-auto d-flex flex-row"
						}
					>
						<Image
							src="/images/3_6_9.jpg"
							alt="1"
							width={3840}
							height={1860}
						/>
					</div>
				</div>

				<div
					data-aos="fade-down"
					data-aos-offset="300"
					data-aos-easing="ease-in-sine"
					data-aos-duration="2000"
				>
					<h1>WHAT WE DO</h1>
					<div
						className={
							styles.box_image_wwd + " " + "col-10 mx-auto my-5"
						}
					>
						<Image
							src="/images/what_we_do.jpg"
							alt="1"
							width={3024}
							height={1475}
						/>
					</div>
				</div>

				<div
					data-aos="fade-up"
					data-aos-offset="300"
					data-aos-easing="ease-in-sine"
					data-aos-duration="2000"
					className="col-8 mx-auto text-uppercase"
					style={{
						fontSize: "20px",
					}}
				>
					<p>
						đây là nơi mà các doanh nhân kết nối đầu tư, thể hiện
						phong cách sống chất với
						<br />
						những trải nghiệm đỉnh cao và mở rộng kênh phân phối.
						<br />
						ông được biết dến như một chuyên gia trong lĩnh vực đào
						tạo , tư vẫn và đầu tư cho
						<br />
						các dự án ứng dụng cơ chế vốn và có mục tiêu niêm
						yết(ipo). ông thành lập unicorn-
						<br />
						verse tai việt nam và ngày 16/07/2022 là ngày ra mắt đầu
						tiên, với khát vọng toàn cầu
						<br />
						unicornverse sẽ dần vươn đến thị trường quốc tế tạo nên
						cộng đồng các doanh
						<br />
						ngiệp vững mạnh.
					</p>

					<p>
						tất cả chỉ phụng sự cho một sứ mệnh chung: phát triển
						con người, phát triển doanh
						<br />
						nghiệp và phụng sự xã hội.
					</p>
				</div>

				<div
					data-aos="fade-up"
					data-aos-offset="300"
					data-aos-easing="ease-in-sine"
					data-aos-duration="2000"
				>
					<Image
						src="/images/unicornverse/Banner_home_2.jpg"
						alt="1"
						width={3841}
						height={1900}
					/>
				</div>
			</div>
		</div>
	);
}

export default HomeContent;
