import React from "react";
import styles from "./invention.module.scss";
import Link from "next/link";
import Solar from "../../components/solar/solar";
import Image from "next/image";
import HomeContent from "../../components/content/HomeContent";

const Invention = () => {
	return (
		<div className={styles.invention}>
			<div className={styles.solar_load}>
				<Solar
					// eslint-disable-next-line react/no-children-prop
					children={
						<div className={styles.invention_detail}>
							{/* <Image
                src="/images/demo/Invention_demo.png"
                alt="Invention_demo"
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

export default Invention;
