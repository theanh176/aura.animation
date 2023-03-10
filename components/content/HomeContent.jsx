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
					<p className={styles.box_title}>k???t n???i ?????u t??</p>

					<div className={styles.box_decor}></div>

					<p className={styles.box_content}>
						S??n ch??i c???a c??c doanh
						<br />
						nghi???p c?? kh??t v???ng IPO, h???
						<br />
						tr??? nhau trong v???n ????? g???i v???n
						<br />
						r??t ng???n th???i gian
					</p>
				</div>

				<div className="col-12 col-md-4 d-flex flex-column px-5 py-3 py-md-5">
					<p className={styles.box_title}>phong c??ch s??ng m???i</p>

					<div className={styles.box_decor}></div>

					<p className={styles.box_content}>
						Phong c??ch s???ng m???i ?????y tr???i
						<br />
						nghi???m ?????nh cao, tr???i nghi???m
						<br />
						&quot;Gi??? l???p&quot; c???a 1 &quot;Mafia&quot; t??i
						<br />
						ch??nh
					</p>
				</div>

				<div className="col-12 col-md-4 d-flex flex-column px-5 py-3 py-md-5">
					<p className={styles.box_title}>m??? r???ng k??nh ph??n ph???i</p>

					<div className={styles.box_decor}></div>

					<p className={styles.box_content}>
						K???t n???i m??? r???ng k??nh
						<br />
						ph??n ph???i ????n b???y t???c ?????
						<br />
						ph??t tri???n c???a c??c doanh
						<br />
						nghi???p
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
					T??? THI???N
				</p>
				<p
					className="mb-0"
					style={{ fontSize: "16px", fontWeight: 500 }}
				>
					Th??? hi???n con s??? th???c hi???n c??
				</p>
				<p
					className="mb-0"
					style={{ fontSize: "16px", fontWeight: 500 }}
				>
					c???a 3 qu??? t??? thi???n
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
					QUY???N L???I H???I VI??N
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
							Thu th???p 30% tr??n ph?? thu v??? c???a unicornverse/ n??m.
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
						<span>L?? m???t gi??m ?????c qu??? ?????u t??.</span>
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
							c?? th??? vi???t quy ch??? v???n h??nh qu??? v?? thu hoa h???ng
							qu???n l?? t??? l???i nhu???n c???a qu???.
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
						<span>???????c l??m th????ng hi???u c?? nh??n m???nh.</span>
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
						<span>c?? c???ng ?????ng.</span>
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
							hoa h???ng n???u th??nh vi??n ??i h???c c?? ch??? v???n c???a aura
							capital t??? ch???c.
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
							hoa h???ng t??? h???p ?????ng t?? v???n t??? aura capital.
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
							c?? hoa h???ng v?? c??? phi???u th?????ng t??? vi???c k???t n???i c??c
							nh?? ?????u t?? cho c??c d??? ??n.
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
							n???u c?? th??nh vi??n c???a house ????? t?? c??ch m??? house, ch???
							house h??? tr??? k???t n???i th??nh l???p s??? nh???n 10% hoa h???ng
							t??? chi ph?? th??nh l???p house
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
					<h1>NH?? S??NG L???P</h1>
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
					<p className="fw-bold">??ng ?????u minh nh???t,</p>

					<p>
						ng?????i s??ng l???p c???ng ?????ng unicornverse to??n c???u v???i m???c
						ti??u t???o d???ng th??? h???
						<br />
						doanh nh??n hi???u v??? c?? ch??? v???n ???ng d???ng v?? ipo th??nh
						c??ng. t???o s??? thu???n l???i cho
						<br />
						c??c nh?? ?????u t?? v?? doanh nghi???p k???t n???i ?????ng h??nh c??ng
						nhau.
					</p>

					<p>
						????y l?? n??i m?? c??c doanh nh??n k???t n???i ?????u t??, th??? hi???n
						phong c??ch s???ng ch???t v???i
						<br />
						nh???ng tr???i nghi???m ?????nh cao v?? m??? r???ng k??nh ph??n ph???i.
						<br />
						??ng ???????c bi???t d???n nh?? m???t chuy??n gia trong l??nh v???c ????o
						t???o , t?? v???n v?? ?????u t?? cho
						<br />
						c??c d??? ??n ???ng d???ng c?? ch??? v???n v?? c?? m???c ti??u ni??m
						y???t(ipo). ??ng th??nh l???p unicorn-
						<br />
						verse tai vi???t nam v?? ng??y 16/07/2022 l?? ng??y ra m???t ?????u
						ti??n, v???i kh??t v???ng to??n c???u
						<br />
						unicornverse s??? d???n v????n ?????n th??? tr?????ng qu???c t??? t???o n??n
						c???ng ?????ng c??c doanh
						<br />
						ngi???p v???ng m???nh.
					</p>

					<p>
						t???t c??? ch??? ph???ng s??? cho m???t s??? m???nh chung: ph??t tri???n
						con ng?????i, ph??t tri???n doanh
						<br />
						nghi???p v?? ph???ng s??? x?? h???i.
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
						????y l?? n??i m?? c??c doanh nh??n k???t n???i ?????u t??, th??? hi???n
						phong c??ch s???ng ch???t v???i
						<br />
						nh???ng tr???i nghi???m ?????nh cao v?? m??? r???ng k??nh ph??n ph???i.
						<br />
						??ng ???????c bi???t d???n nh?? m???t chuy??n gia trong l??nh v???c ????o
						t???o , t?? v???n v?? ?????u t?? cho
						<br />
						c??c d??? ??n ???ng d???ng c?? ch??? v???n v?? c?? m???c ti??u ni??m
						y???t(ipo). ??ng th??nh l???p unicorn-
						<br />
						verse tai vi???t nam v?? ng??y 16/07/2022 l?? ng??y ra m???t ?????u
						ti??n, v???i kh??t v???ng to??n c???u
						<br />
						unicornverse s??? d???n v????n ?????n th??? tr?????ng qu???c t??? t???o n??n
						c???ng ?????ng c??c doanh
						<br />
						ngi???p v???ng m???nh.
					</p>

					<p>
						t???t c??? ch??? ph???ng s??? cho m???t s??? m???nh chung: ph??t tri???n
						con ng?????i, ph??t tri???n doanh
						<br />
						nghi???p v?? ph???ng s??? x?? h???i.
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
