import React from "react";
import styles from "./dauntless.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";
import Solar from "../../components/solar/solar";
import Image from "next/image";
import HomeContent from "../../components/content/HomeContent";
import DauntlessImage from "../../public/images/slide/solar01.png";
import HealthImage from "../../public/images/slide/solar02.png";
import InventionImage from "../../public/images/slide/solar05.png";
import LegaxyImage from "../../public/images/slide/solar04.png";
import ZenImage from "../../public/images/slide/solar03.png";
import IconArrow from "../../public/images/arrow.png";

const Dauntless = () => {
	const router = useRouter();
	return (
		<div className={styles.dauntless}>
			<div className={styles.solar_load}>
				<Solar
					// eslint-disable-next-line react/no-children-prop
					children={
						<div className={styles.dauntless_detail}>
							<div className={styles.box_header}>
								<div className={styles.title_header}>
									<h1>
										HOUSE <br /> OF <br /> DAUNTLESS
									</h1>
									<h5>VƯƠN TẦM</h5>
									<h2>GIÁ TRỊ DOANH NGHIỆP</h2>
								</div>
								<div
									className={
										styles.content_header + " " + "row mt-4"
									}
								>
									<div className="col-6 pe-3 d-flex flex-column justify-content-between">
										<p className={styles.ml_95}>
											Người dẫn dắt “House of Dauntless”
											là ông Đỗ Tuấn Bình. Sở hữu trình độ
											chuyên môn dày dặn trong lĩnh vực
											vốn hoá và kinh nghiệm thực tiễn
											trên thị trường kinh doanh, ông{" "}
											<b>ĐỖ TUẤN BÌNH</b> sẽ tạo ra một
											“ngôi nhà” đoàn kết mà tại đây, các
											thành viên sẽ có nhiều cơ hội kết
											nối, giúp đỡ và chia sẻ kinh nghiệm
											cho nhau trong hành trình phát triển
											doanh nghiệp bức phá vươn xa, chinh
											phục khát vọng IPO.
										</p>
										<Image
											src="/images/dauntless/5_1.png"
											alt="Dauntless_demo"
											width={409}
											height={432}
										/>
									</div>
									<div
										className={
											styles.pl_40 +
											" " +
											"col-6 d-flex flex-column justify-content-between"
										}
									>
										<Image
											src="/images/dauntless/member1.png"
											alt="Dauntless_demo"
											width={317}
											height={268}
										/>
										<p>
											Tham gia vào gia đình “House of
											Dauntless” là những doanh nhân luôn
											có một tinh thần chính trực, phong
											cách làm việc vô cùng chuyên nghiệp,
											lấy kỷ luật làm trọng tâm, sẵn sàng
											đối mặt với những thử thách. Với tất
											cả sự tâm huyết, các thành viên tại
											<b>“House of Dauntless”</b> sẽ luôn
											đồng lòng, cống hiến hết mình, cùng
											nhau tạo ra các giá trị to lớn, giúp
											cho doanh nghiệp Việt phát triển bền
											vững.
										</p>
										<p>
											Cộng đồng Unicornverse Global sẽ
											luôn đồng hành cùng “House of
											Dauntless” trên mọi chặng đường. Hy
											vọng <b>“House of Dauntless”</b> sẽ
											luôn phát triển không ngừng và đạt
											được nhiều thành tựu to lớn trong
											tương lai.
										</p>
									</div>
								</div>
								<div
									className={styles.button_arrow}
									onClick={() => {
										router.push("/");
									}}
								>
									<Image
										src={IconArrow}
										alt="IconArrow"
										width={60}
										height={35}
									/>
								</div>
							</div>
						</div>
					}
					SolarChoose={
						<Image
							src={DauntlessImage}
							alt="Saturn Rings"
							width={350}
							height={350}
						/>
					}
					link_solarChoose="/dauntless"
					Solar_1={
						<Image
							src={ZenImage}
							alt="Saturn Rings"
							width={100}
							height={100}
						/>
					}
					link_solar_1="/zen"
					Solar_2={
						<Image
							src={InventionImage}
							alt="Saturn Rings"
							width={190}
							height={190}
						/>
					}
					link_solar_2="/invention"
					Solar_3={
						<Image
							src={HealthImage}
							alt="Saturn Rings"
							width={180}
							height={180}
						/>
					}
					link_solar_3="/health"
					Solar_4={
						<Image
							src={LegaxyImage}
							alt="Saturn Rings"
							width={150}
							height={150}
						/>
					}
					link_solar_4="/legacy"
				/>
			</div>

			<HomeContent />
		</div>
	);
};

export default Dauntless;
