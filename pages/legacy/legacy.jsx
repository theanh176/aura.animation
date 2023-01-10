import React from "react";
import styles from "./legacy.module.scss";
import Link from "next/link";
import Solar from "../../components/solar/solar";
import Image from "next/image";
import HomeContent from "../../components/content/HomeContent";
import ImageIcon from "../../public/images/slide/solar04.png";

const Legacy = () => {
	return (
		<div className={styles.legacy}>
			<div className={styles.solar_load}>
				<Solar
					// eslint-disable-next-line react/no-children-prop
					children={
						<div className={styles.legacy_detail}>
							<div className={styles.box_header}>
								<div className={styles.title_header}>
									<h1>
										HOUSE <br /> OF <br /> LEGACY
									</h1>
									<h2>NHIỆT HUYẾT TẠO</h2>
									<h2>
										NÊN <b>KHÁT VỌNG</b>
									</h2>
								</div>
								<div
									className={
										styles.content_header + " " + "row mt-4"
									}
								>
									<div className="col-6 pe-3 d-flex flex-column justify-content-between">
										<p
											className={
												styles.ml_95 + " " + "mb-4"
											}
										>
											House of Legacy là một trong 5 House
											đầu tiên được sáng lập thuộc cộng
											đồng Unicornverse Global Voi mong
											muốn hướng đến mục tiêu IPO và sự
											phát triển bán vùng cho các doanh
											nghiệp, cong dong Unicornverse
											Global nói chung và House of Legacy
											nói riêng luôn nỗ lực xây dựng mở ra
											các cơ hội cho các thành viên kết
											nối chia sẻ và hỗ trợ đầu tư.
										</p>
										<Image
											src="/images/legacy/5_2.png"
											alt="Legacy_demo"
											width={402}
											height={407}
										/>
										<p
											className={
												styles.ml_95 + " " + "mt-4"
											}
										>
											Tại ngôi nhà chung Legacy, các thành
											viên mang trong mình nguồn cảm hứng
											và ton, mot tam hon tu do, cong hiển
											hát mình để tạo nên
										</p>
									</div>
									<div
										className={
											"col-6 d-flex flex-column justify-content-between"
										}
									>
										<Image
											src="/images/legacy/member2.png"
											alt="Legacy_demo"
											width={446}
											height={413}
										/>
										<p className={styles.pl_40}>
											những di sản quý gia làm đòn bầy cho
											doanh nghiệp vươn đến khát vọng IPO,
											thông qua đó, tự tạo lập giá trị cho
											bản thân trở thành một tỷ phú về mọi
											một trong tương lai.
										</p>
										<p className={styles.pl_40}>
											Hy vọng với những yếu tố cốt loi của
											House of Legacy cũng nhu cong dong
											Unicornverse Global các thành viên
											so cùng nhau đồng hành và xây dựng
											nên một vòn chơi chất lượng giúp các
											doanh nghiệp Việt thành công trên
											còn dường xay dung co che von, vuon
											mình dẫn quốc tế trong tương lai.
										</p>
									</div>
								</div>
							</div>
						</div>
					}
					icon={
						<Image
							src={ImageIcon}
							alt="Saturn Rings"
							width={350}
							height={350}
						/>
					}
				/>
			</div>

			<HomeContent />
		</div>
	);
};

export default Legacy;
