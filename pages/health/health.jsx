import Image from "next/image";
import React from "react";
import HomeContent from "../../components/content/HomeContent";
import Solar from "../../components/solar/solar";
import styles from "./health.module.scss";

const Health = () => {
	return (
		<div className={styles.health}>
			<div className={styles.solar_load}>
				<Solar
					// eslint-disable-next-line react/no-children-prop
					children={
						<div className={styles.health_detail}>
							{/* <Image
                src="/images/demo/Health_demo.png"
                alt="Health_demo"
                width={862}
                height={1870}
              /> */}
							<div className={styles.box_header}>
								<div className={styles.title_header}>
									<h1>
										HOUSE <br /> OF <br /> DAUNTLESS
									</h1>
									<h5>VƯƠN TẦM</h5>
									<h2>GIÁ TRỊ DOANH NGHIỆP</h2>
								</div>
								<div className={styles.content_header}></div>
							</div>
						</div>
					}
				/>
			</div>

			<HomeContent />
		</div>
	);
};

export default Health;
