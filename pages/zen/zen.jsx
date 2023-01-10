import React from "react";
import styles from "./zen.module.scss";
import Link from "next/link";
import Solar from "../../components/solar/solar";
import Image from "next/image";
import HomeContent from "../../components/content/HomeContent";
import ImageIcon from "../../public/images/slide/solar03.png";

const Zen = () => {
	return (
		<div className={styles.zen}>
			<div className={styles.solar_load}>
				<Solar
					// eslint-disable-next-line react/no-children-prop
					children={
						<div className={styles.zen_detail}>
							<div className={styles.box_header}>
								<div className={styles.title_header}>
									<h1>
										HOUSE <br /> OF <br /> ZEN
									</h1>
									<h2>
										XÂY DỰNG <b>GIÁ TRỊ</b>
									</h2>
									<h2>
										<b>DOANH NGHIỆP</b> BỀN VỮNG
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
											Sau khoảng thời gian hoạt dòng cùng
											với nhưng nó lạ phát hiện không
											ngừng nghỉ cong dong Unicornverse
											Global hơn trong giới thiệu House of
											Zen” – một trong 5 House đầu tiên
											được xây dựng. Định hình phương
											hưởng hoạt động trong thời gian tới.
										</p>
										<Image
											src="/images/zen/5_3.png"
											alt="Zen_demo"
											width={381}
											height={316}
										/>
										<p
											className={
												styles.ml_95 + " " + "mt-4"
											}
										>
											Đứng đầu House of Zen- Ông NGUYỄN
											BẢO SƠN so là người dân dương” với
											mong muốn xây dựng nên. một môi
											trường chuyên nghiệp và sáng tạo cho
											các kỳ lớn. Bàng kinh nghiệm chuyên
											môn dày do trong lình vực có chủ vốn
											và đầu ha ông <b>Nguyễn Bảo Sơn</b>{" "}
											và tạo nên một không gian mà các
											thành viên có thể kết nói chia án và
											khát vọng hành tinh IPO, hao đại
											kiến thức, mà rộng cơ hội đầu tư,
											giúp các thành viên dựa doanh nghiệp
											của mình phát triển
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
											src="/images/zen/member3.png"
											alt="Zen_demo"
											width={315}
											height={409}
										/>
										<p>thành công và bền vững</p>
										<p>
											Đặc biệt, hội tụ tai House of Zen là
											những doanh nhân mang trong mình một
											phong thoi điểm tính, tự tin đòi mẹ
											với các thử thách khó khăn trên con
											duang chinh phục mục sau PO. Xuất
											phát từ những giá trị bên trong tâm
											hôn bằng khả năng sáng tạo và lòng
											nhiệt huyết các thành viên của House
											of Zen sẽ cùng nhau nỗ lực, xới dựng
											nên một cộng đồng bên vùng mang lại
											nhiều giá hộ tuyệt với và phát triển
											doanh nghiệp cham den IPO.
										</p>
										<p>
											Cộng đồng Unicomvene Global nói
											chung và Howo of Zen nói riêng hy
											vọng trong tương lai sẽ luôn nhận
											được sử ủng hộ và đóng góp từ các
											thành viên cùng nhau đông hành, mang
											dân nhưng giá t bui pha cho doanh
											nghiệp Việt.
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

export default Zen;
