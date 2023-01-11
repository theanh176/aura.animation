import Image from "next/image";
import React from "react";
import HomeContent from "../../components/content/HomeContent";
import Solar from "../../components/solar/solar";
import styles from "./health.module.scss";
import DauntlessImage from "../../public/images/slide/solar01.png";
import HealthImage from "../../public/images/slide/solar02.png";
import InventionImage from "../../public/images/slide/solar05.png";
import LegaxyImage from "../../public/images/slide/solar04.png";
import ZenImage from "../../public/images/slide/solar03.png";

const Health = () => {
	return (
		<div className={styles.health}>
			<div className={styles.solar_load}>
				<Solar
					// eslint-disable-next-line react/no-children-prop
					children={
						<div className={styles.health_detail}>
							<div className={styles.box_header}>
								<div className={styles.title_header}>
									<h1>
										HOUSE <br /> OF <br /> HEALTH
									</h1>
								</div>
								<div
									className={
										styles.content_header + " " + "row mt-4"
									}
								>
									<div className="col-6 pe-3 d-flex flex-column justify-content-between">
										<div
											className={
												styles.ml_95 + " " + "mb-3"
											}
										>
											<h2>
												GÌN GIỮ <b>GIÁ TRỊ</b>
											</h2>
											<h2>
												<b>DOANH NGHIỆP</b> TRƯỜNG TỒN
											</h2>
										</div>
										<p
											className={
												styles.ml_95 + " " + "mb-4"
											}
										>
											Là một trong những House dành được
											nhiều quan làm nhất của các doanh
											nhân ngay từ trong sự kiện Ra mắt
											cong dong Unicornverse, House of
											Health-Noi gin giù những giá trị
											doanh nghiệp trường tồn.
										</p>
										<Image
											src="/images/health/5_5.png"
											alt="Health_demo"
											width={380}
											height={316}
										/>
										<p
											className={
												styles.ml_95 + " " + "mt-4"
											}
										>
											Người dùng dầu House of Health Ông{" "}
											<b>PHÙNG VINH VUI</b> với những kinh
											nghiệm lâu năm trên thương hưởng
											cùng vốn kiến thức sâu rộng và Kinh
											doanh. Đầu tư và Tài chính, ông sau
											là người dân đường” của House of
											Health, dong góp hết sức xây dựng
											nên một môi trường chuyên nghiệp và
											hòa đồng, đưa các kỳ lần đến cột mốc
											PO thành công.
										</p>
										<p className={styles.ml_95}>
											Bằng kinh nghiệm chuyên mon, dobiet
											la vé co ché von, ông Phùng Vinh Vui
											hưởng den xay dung House of Haalih
											sẽ là một không gian cái mà nơi mà
											các thành viên có thể vui và kết
											nói, chia xù khởi vọng trao đổi kiến
										</p>
									</div>
									<div
										className={
											styles.pl_40 +
											" " +
											"col-6 d-flex flex-column justify-content-between"
										}
									>
										<Image
											src="/images/health/member5.png"
											alt="Health_demo"
											width={317}
											height={412}
										/>
										<p>
											thức kinh doanh, mô rộng cơ hội đầu
											tư cũng như giúp các thành viên đưa
											doanh nghiệp của minh phát triển
											thành công và bền vững.
										</p>
										<p>
											Những doanh nhân phù hợp để tham gia
											vào House of Health là những người
											luôn giữ được tinh thần vui và hòa
											đồng hưởng đến sự gắn kết cùng nhau
											nâng tầm giá trị của doanh nghiệp.
											Các thành viên của Houta of Hedih
											bán cạnh việc cam kết tuân theo 5
											tôn chỉ hoạt động của House là Vui
											và . Hoa đồng - Gắn kết - Nâng tầm
											giá trị-Phát triển mọi thành viên
											còn cam kết sử cùng nhau nó lực, xây
											dựng nên một cộng đồng kỳ lân” bán
											vùng mang lại nhiều giá trị tuyệt
											vời.
										</p>
										<p>
											Trong tương lai, hy vọng House of
											Health nói riêng và toàn bộ
											Unicomverse Global se phat triển
											mạnh mà bứt phá mô thành một cộng
											đồng uy tín chất lượng hỗ trợ các
											doanh nghiệp trên con đường chinh
											phục có chế Vốn.
										</p>
									</div>
								</div>
							</div>
						</div>
					}
					SolarChoose={
						<Image
							src={HealthImage}
							alt="Saturn Rings"
							width={350}
							height={350}
						/>
					}
					link_solarChoose="/health"
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
							src={DauntlessImage}
							alt="Saturn Rings"
							width={180}
							height={180}
						/>
					}
					link_solar_3="/dauntless"
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

export default Health;
