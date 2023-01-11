import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Navbar } from "react-bootstrap";
import DauntlessImage from "../../public/images/slide/solar01.png";
import HealthImage from "../../public/images/slide/solar02.png";
import InventionImage from "../../public/images/slide/solar05.png";
import LegaxyImage from "../../public/images/slide/solar04.png";
import ZenImage from "../../public/images/slide/solar03.png";
import styles from "./solar.module.scss";

export default function Solar(props) {
	const {
		children,
		SolarChoose,
		link_solarChoose,
		Solar_1,
		link_solar_1,
		Solar_2,
		link_solar_2,
		Solar_3,
		link_solar_3,
		Solar_4,
		link_solar_4,
	} = props;
	console.log(link_solarChoose);
	const router = useRouter();
	let timestamp_start = new Date("2019-01-01").getTime();
	let timestamp_now = new Date().getTime();
	let secondsLeft = (timestamp_now - timestamp_start) / 1000;
	let root = document.documentElement;
	root.style.setProperty("--seconds-left", `${secondsLeft}s`);
	const [isShow, setIsShow] = useState(0); // 0:stop 1:play 2:speed
	const [isTranslate, setIsTranslate] = useState(false);
	const [isShowBackground, setIsShowBackground] = useState(false);
	const [isHref, setIsHref] = useState("home-aura");
	return (
		<div className={styles.home_solar}>
			<Navbar
				className="p-0"
				style={{ backgroundColor: "black", overflow: "hidden" }}
			>
				<div className={styles.solar}>
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

					<div className={styles.translate_left + " " + "universe"}>
						<div className="solarsystem">
							<div
								style={{ cursor: "pointer" }}
								className={
									styles.sun_solar + " " + "sun rotate_sun"
								}
								onClick={() => {
									router.push("/");
								}}
							>
								<div className="planet__structure planet__structure--2"></div>
							</div>
							<div

							// className="mercury-orbit sun-orbit"
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
									router.push(link_solar_1);
								}}
								className="earth-orbit sun-orbit"
							>
								<div className="ascending-node ascending-node--earth">
									<div className="inclination inclination--earth">
										<div className="orbit__visual"></div>
										<div className="orbit__shape orbit__shape--earth">
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
													className="planet__structure planet__structure--2 size-solar-xl position-solar-1_1 rotate_health"
													//rotate_earth-orbit
												>
													{Solar_1}
													<div className="box_image"></div>
												</div>
											</div>
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
									router.push(link_solar_2);
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
													className="planet__structure planet__structure--2 size-solar-big position-solar-3 rotate_invention"
													//rotate_jupiter-orbit
												>
													{Solar_2}
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
									router.push(link_solar_3);
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
													className="planet__structure planet__structure--2 size-solar-big position_zen rotate_zen"
													//rotate_saturn-orbit
												>
													{Solar_3}
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
									router.push({link_solarChoose});
								}}
								className={
									styles.chooseIcon +
									" " +
									"uranus-orbit sun-orbit"
								}
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
													className="planet__structure planet__structure--2 size-solar-uranus-orbit position-solar-5_1 rotate_dauntless"
													//rotate_uranus-orbit
												>
													{SolarChoose}
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
									router.push(link_solar_4);
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
													title="House of Legacy"
													className="planet__structure planet__structure--2 size-solar-big position-solar-6 rotate_legacy"
													//rotate_neptun-orbit
												>
													{Solar_4}
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

				<div className={styles.detailpage_home}>{children}</div>
			</Navbar>
		</div>
	);
}
