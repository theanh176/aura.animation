import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import MainLayout from "../../components/layout/mainLayout";
import styles from "./Home.module.scss";
import Image from "next/image";
import MarsImage from "../../public/images/mars.png";
import SolarImage from "../../public/images/solar.png";
import MercuryImage from "../../public/images/mercury-planet.png";
import CenterImage from "../../public/images/unicornverse/center.png";
import DauntlessImage from "../../public/images/unicornverse/dauntless.png";
import HealthImage from "../../public/images/unicornverse/health.png";
import InventionImage from "../../public/images/unicornverse/invention.png";
import LegaxyImage from "../../public/images/unicornverse/legaxy.png";
import ZenImage from "../../public/images/unicornverse/zen.png";
import Link from "next/link";
import { Navbar } from "react-bootstrap";
import HomeContent from "../../components/content/HomeContent";
import DetailPage from "../../components/content/DetailPage";

function HomeAura({ href }) {
	const router = useRouter();
	let timestamp_start = new Date("2019-01-01").getTime();
	let timestamp_now = new Date().getTime();
	let secondsLeft = (timestamp_now - timestamp_start) / 1000;
	let root = document.documentElement;
	root.style.setProperty("--seconds-left", `${secondsLeft}s`);
	const [isShow, setIsShow] = useState(2); // 0:stop 1:play 2:speed
	const [isTranslate, setIsTranslate] = useState(false);
	const [isShowBackground, setIsShowBackground] = useState(false);
	const [isHref, setIsHref] = useState("home-aura");
	// const handleClick = () => {
	// 	setIsShow(2);
	// 	setIsTranslate(!isTranslate);
	// 	setTimeout(() => {
	// 		setIsShow(1);
	// 	}, 3000);
	// };

	useEffect(() => {
		setTimeout(() => {
			setIsShow(1);
		}, 3000);
	}, []);

	return (
		<div className={styles.unicornverse}>
			<Navbar className="p-0" style={{ backgroundColor: "black" }}>
				<div className={styles.home_aura}>
					<input
						type="radio"
						id="correct-orbit-size"
						name="orbit-size"
					/>
					<input
						type="radio"
						id="ideal-orbit-size"
						name="orbit-size"
						checked="checked"
					/>
					<input
						type="radio"
						id="one-year-per-second"
						name="velocity"
						checked={isShow === 2 && "checked"}
					/>
					<input
						type="radio"
						id="one-year-per-minute"
						name="velocity"
						checked={isShow === 1 && "checked"}
					/>
					<input
						type="radio"
						id="real-time"
						name="velocity"
						checked={isShow === 0 && "checked"}
					/>
					<input
						type="radio"
						id="translateLeft"
						name="translate"
						checked={isTranslate ? "checked" : ""}
					/>
					<input
						type="radio"
						id="topview"
						name="perspective"
						checked="checked"
					/>
					<input type="radio" id="isometric" name="perspective" />
					<input type="radio" id="threedee" name="perspective" />

					<div className="universe">
						<div className="solarsystem">
							<div className="sun rotate_sun">
								<div className="planet__structure planet__structure--2"></div>
							</div>
							<div
								className="mercury-orbit sun-orbit"
							>
								<div className="ascending-node ascending-node--mercury">
									<div className="inclination inclination--mercury">
										<div className="orbit__visual"></div>
										<div className="orbit__shape orbit__shape--mercury">
											<div className="planet mercury">
												<div className="planet__structure planet__structure--2"></div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="venus-orbit sun-orbit">
								<div className="ascending-node ascending-node--venus">
									<div className="inclination inclination--venus">
										<div className="orbit__visual"></div>
										<div className="orbit__shape orbit__shape--venus">
											<div className="planet venus">
												<div className="planet__structure planet__structure--2"></div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="venus-orbit sun-orbit w_h_venus">
								<div className="ascending-node ascending-node--venus">
									<div className="inclination inclination--venus">
										<div className="orbit__visual"></div>
										<div className="orbit__shape orbit__shape--venus">
											<div className="planet venus">
												<div className="planet__structure planet__structure--2"></div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div
								onClick={() => {
									setIsShow(2);
									setIsTranslate(!isTranslate);
									// handleClick();
									setTimeout(() => {
										// isTranslate ? setIsShow(1) : setIsShow(0);
										router.push("/health");
									}, 3000);
								}}
								className="earth-orbit sun-orbit"
							>
								<div className="ascending-node ascending-node--earth">
									<div className="inclination inclination--earth">
										<div className="orbit__visual"></div>
										<div className="orbit__shape orbit__shape--earth">
											<a href={href}>
												<div
													className={
														styles.hover_solar +
														" " +
														"planet earth"
													}
													style={{ color: "white" }}
												>
													<div
														title="House of Health"
														className="planet__structure planet__structure--2 size-solar-xl position-solar-1 rotate_earth-orbit"
													>
														<div
															className="box_opacity_image box_opacity_image_health"
														>
															<Image
																src={
																	HealthImage
																}
																alt="Saturn Rings"
																width={130}
																height={130}
															/>
														</div>
														<div className="box_image"></div>
													</div>
												</div>
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="earth-orbit sun-orbit w_h_earth"></div>

							<div className="mars-orbit sun-orbit">
								<div className="ascending-node ascending-node--mars">
									<div className="inclination inclination--mars">
										<div className="orbit__visual"></div>
										<div className="orbit__shape orbit__shape--mars">
											<div className="planet mars">
												<div className="planet__structure planet__structure--2 size-solar-big position-solar-2"></div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="mars-orbit sun-orbit w_h_mars"></div>

							<div
								onClick={() => {
									setIsShow(2);
									setIsTranslate(!isTranslate);
									// handleClick();
									setTimeout(() => {
										// isTranslate ? setIsShow(1) : setIsShow(0);
										router.push("/invention");
									}, 3000);
								}}
								className="jupiter-orbit sun-orbit"
							>
								<div className="ascending-node ascending-node--jupiter">
									<div className="inclination inclination--jupiter">
										<div className="orbit__visual"></div>
										<div className="orbit__shape orbit__shape--jupiter">
											<div
												className={
													styles.hover_solar +
													" " +
													"planet jupiter"
												}
											>
												<div
													title="House of Invention"
													className="planet__structure planet__structure--2 size-solar-big position-solar-3 rotate_jupiter-orbit"
												>
													<div
														className="box_opacity_image box_opacity_image_invention"
													>
														<Image
															src={InventionImage}
															alt="Saturn Rings"
															width={200}
															height={200}
														/>
													</div>
													<div className="box_image"></div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="jupiter-orbit sun-orbit w_h_jupiter"></div>

							<div
								onClick={() => {
									setIsShow(2);
									setIsTranslate(!isTranslate);
									// handleClick();
									setTimeout(() => {
										// isTranslate ? setIsShow(1) : setIsShow(0);
										router.push("/zen");
									}, 3000);
								}}
								className="saturn-orbit sun-orbit"
							>
								<div className="ascending-node ascending-node--saturn">
									<div className="inclination inclination--saturn">
										<div className="orbit__visual"></div>
										<div className="orbit__shape orbit__shape--saturn">
											<div
												className={
													styles.hover_solar +
													" " +
													"planet saturn"
												}
											>
												<div
													title="House of Zen"
													className="planet__structure planet__structure--2 size-solar-big rotate_saturn-orbit position_zen"
												>
													<div
														className="box_opacity_image box_opacity_image_zen"
													>
														<Image
															src={ZenImage}
															alt="Saturn Rings"
															width={200}
															height={200}
														/>
													</div>
													<div className="box_image"></div>
												</div>
											</div>
											<div className="planet-orbit planet-orbit--saturn"></div>
										</div>
									</div>
								</div>
							</div>
							<div className="saturn-orbit sun-orbit w_h_saturn"></div>

							<div
								onClick={() => {
									setIsShow(2);
									setIsTranslate(!isTranslate);
									setTimeout(() => {
										// isTranslate ? setIsShow(1) : setIsShow(0);
										router.push("/dauntless");
									}, 3000);
								}}
								className="uranus-orbit sun-orbit"
							>
								<div className="ascending-node ascending-node--uranus">
									<div className="inclination inclination--uranus">
										<div className="orbit__visual"></div>
										<div className="orbit__shape orbit__shape--uranus">
											<div
												className={
													styles.hover_solar +
													" " +
													"planet uranus"
												}
											>
												<div
													title="House of Dauntless"
													className="planet__structure planet__structure--2 size-solar-uranus-orbit position-solar-5 rotate_uranus-orbit"
												>
													<div
														className="box_opacity_image box_opacity_image_dauntless"
													>
														<Image
															src={DauntlessImage}
															alt="Saturn Rings"
															width={150}
															height={150}
														/>
													</div>
													<div className="box_image"></div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="uranus-orbit sun-orbit w_h_uranus"></div>

							<div
								onClick={() => {
									setIsShow(2);
									setIsTranslate(!isTranslate);
									setTimeout(() => {
										router.push("/legacy");
									}, 3000);
								}}
								className="neptun-orbit sun-orbit"
							>
								<div className="ascending-node ascending-node--neptun">
									<div className="inclination inclination--neptun">
										<div className="orbit__visual"></div>
										<div className="orbit__shape orbit__shape--neptun">
											<div
												className={
													styles.hover_solar +
													" " +
													"planet neptun"
												}
											>
												<div
													title="House of Legaxy"
													className="planet__structure planet__structure--2 size-solar-uranus-orbit position-solar-6 rotate_neptun-orbit"
												>
													<div className="box_opacity_image box_opacity_image_legaxy">
														<Image
															src={LegaxyImage}
															alt="Saturn Rings"
															width={200}
															height={200}
														/>
													</div>
													<div className="box_image"></div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="neptun-orbit sun-orbit w_h_95"></div>
						</div>
					</div>
				</div>
			</Navbar>

			<HomeContent />
		</div>
	);
}

export default HomeAura;
