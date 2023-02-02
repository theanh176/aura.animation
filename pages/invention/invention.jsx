import React from "react";
import styles from "./invention.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import Solar from "../../components/solar/solar";
import Image from "next/image";
import HomeContent from "../../components/content/HomeContent";
import DauntlessImage from "../../public/images/slide/solar01.png";
import HealthImage from "../../public/images/slide/solar02.png";
import InventionImage from "../../public/images/slide/solar05.png";
import LegaxyImage from "../../public/images/slide/solar04.png";
import ZenImage from "../../public/images/slide/solar03.png";
import IconArrow from "../../public/images/arrow.png";

const Invention = () => {
	const router = useRouter();
	return (
		<div className={styles.invention}>
			<div className={styles.solar_load}>
				<Solar
					// eslint-disable-next-line react/no-children-prop
					children={
						<div className={styles.invention_detail}>
							<div className={styles.box_header}>
								<div className={styles.title_header}>
									<h1>
										HOUSE <br /> OF <br /> INVENTION
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
											<h2>KIẾN TẠO</h2>
											<h2>
												<b>GIÁ TRỊ DOANH NGHIỆP</b>
											</h2>
										</div>
										<p
											className={
												styles.ml_95 + " " + "mb-4"
											}
										>
											House of Invention tự hào là một
											trong 5 House đầu tiên được
											UNICORNVERSE GLOBAL xây dựng. Kim
											chỉ nam xuyên suốt các hoạt động của
											House trong thời gian sắp tới sẽ
											xoay quanh 5 giá trị cốt lõi:
										</p>
										<Image
											src="/images/invention/5_4.png"
											alt="Invention_demo"
											width={376}
											height={294}
										/>
										<p
											className={
												styles.ml_95 + " " + "mt-4"
											}
										>
											Ông <b>VŨ VĂN NGỌC</b>. Người đứng
											đầu House of In-vention, mong muốn
											xây dựng House trở thành không gian
											dành riêng cho các chủ doanh nghiệp
											có mục tiêu IPO và các nhà đầu tư
											chất lượng mà ra cơ hội trong hát ra
											và đầu tư Và Anh nghiệm dày do vô
											lnhuela chính. Đầu tư và Kinh doanh
											cũng như kiến thức chuyên môn và IPO
											theo ca cho vốn ong Vo Van Ngoc duge
											fin tubing so la nguas dan dót đang
											tin cậy của ta có thành viên của
											House of Invention
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
											src="/images/invention/member4.png"
											alt="Invention_demo"
											width={319}
											height={412}
										/>
										<p className="mt-4">
											đi đến cột mốc thành công và thịnh
											vượng
										</p>
										<p>
											Đặc biệt các thành viên được lựa
											chọn tham gia vào House of
											In-vention là những doanh nhân
											thichat có khả năng cân bóng được
											qua lý trí và tình cảm đó có thể ánh
											hội được có 5 nó trị cia House of
											Invention, cung nhau hỗ trọ xây dựng
											nên một House of Invention vung
											manh, hưởng đến sự thnh vượng và
											cung bán cho không chỉ các tranh văn
											trang House ma còn cho tôi có các
											doanh nghiệp Vừa và Nhỏ Việt Nam.
										</p>
										<p>
											Trong tương lai, Unicamvante Global
											hy vong House of Inven- fon so phát
											triển mạnh mà bư pha trở thành một
											cộng đồng uy tin chất lượng hỗ trợ
											các doanh nghiệp trên con đường
											chinh phục có chế Vốn.
										</p>
									</div>
								</div>
								<div className={styles.button_arrow} onClick={() => {
										router.push("/");
									}}>
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
							src={InventionImage}
							alt="Saturn Rings"
							width={350}
							height={350}
						/>
					}
					link_solarChoose="/invention"
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
							src={DauntlessImage}
							alt="Saturn Rings"
							width={190}
							height={190}
						/>
					}
					link_solar_2="/dauntless"
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

export default Invention;
