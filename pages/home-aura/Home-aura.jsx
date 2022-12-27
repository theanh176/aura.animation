import { useRouter } from "next/router";
import React, { useState } from "react";
import MainLayout from "../../components/layout/mainLayout";
import styles from "./Home-aura.module.scss";
import Image from "next/image";
import MoonImage from "../../public/images/moon.png";
import MarsImage from "../../public/images/mars.png";
import SolarImage from "../../public/images/solar.png";
import MercuryImage from "../../public/images/mercury-planet.png";
import Link from "next/link";

function HomeAura({ href }) {
	const router = useRouter();
	let timestamp_start = new Date("2019-01-01").getTime();
	let timestamp_now = new Date().getTime();
	let secondsLeft = (timestamp_now - timestamp_start) / 1000;
	let root = document.documentElement;
	root.style.setProperty("--seconds-left", `${secondsLeft}s`);
	const [isShow, setIsShow] = useState(false);
	const [isShowBackground, setIsShowBackground] = useState(false);
	const [isHref, setIsHref] = useState("home-aura");
	const handleClick = () => {
		setTimeout(() => {
			router.push("/");
		}, 3000);
	};
	return (
		<React.Fragment>
			<div className={styles.home_aura}>
				<div
					className={
						isShowBackground
							? styles.background_speed
							: styles.background
					}
				></div>
				<input type="radio" id="correct-orbit-size" name="orbit-size" />
				<input
					type="radio"
					id="ideal-orbit-size"
					name="orbit-size"
					checked="checked"
				/>
				<input type="radio" id="real-time" name="velocity" />
				<input
					type="radio"
					id="one-year-per-minute"
					name="velocity"
					checked={isShow ? "" : "checked"}
				/>
				<input
					type="radio"
					id="one-year-per-second"
					name="velocity"
					checked={isShow ? "checked" : ""}
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
					<h1 className="text_sun">SUN</h1>
					<div className="solarsystem">
						<div className={styles.hover_solar + " " + "sun"}>
							<div className="planet__structure planet__structure--1"></div>
							<div className="planet__structure planet__structure--2"></div>
							<div className="planet__structure planet__structure--3"></div>
							<div className="planet__structure planet__structure--4"></div>
							<div className="planet__structure planet__structure--5"></div>
							<div className="planet__structure planet__structure--6"></div>
						</div>
						<div
							onClick={() => {
								setIsShow(true);
								setIsShowBackground(true);
								setTimeout(() => {
									setIsShow(false);
								}, 2000);
							}}
							className="mercury-orbit sun-orbit"
						>
							<div className="ascending-node ascending-node--mercury">
								<div className="inclination inclination--mercury">
									<div className="orbit__visual"></div>
									<div className="orbit__shape orbit__shape--mercury">
										<div className="planet mercury">
											<div className="planet__structure planet__structure--1"></div>
											<div className="planet__structure planet__structure--2"></div>
											<div className="planet__structure planet__structure--3"></div>
											<div className="planet__structure planet__structure--4"></div>
											<div className="planet__structure planet__structure--5"></div>
											<div className="planet__structure planet__structure--6"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div
							onClick={() => {
								setIsShow(true);
								setIsShowBackground(true);
								setTimeout(() => {
									setIsShow(false);
								}, 2000);
							}}
							className="venus-orbit sun-orbit"
						>
							<div className="ascending-node ascending-node--venus">
								<div className="inclination inclination--venus">
									<div className="orbit__visual"></div>
									<div className="orbit__shape orbit__shape--venus">
										<div className="planet venus">
											<div className="planet__structure planet__structure--1"></div>
											<div className="planet__structure planet__structure--2"></div>
											<div className="planet__structure planet__structure--3"></div>
											<div className="planet__structure planet__structure--4"></div>
											<div className="planet__structure planet__structure--5"></div>
											<div className="planet__structure planet__structure--6"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div
							onClick={() => {
								setIsShow(true);
								setIsShowBackground(true);
								handleClick();
								setTimeout(() => {
									setIsShow(false);
								}, 3200);
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
											>
												<div className="planet__structure planet__structure--1"></div>

												<div className="planet__structure planet__structure--2 size-solar-small position-solar-1">
													<Image
														src={MercuryImage}
														alt="Saturn Rings"
														width={100}
														height={100}
													/>
													<div
													className="box_image"
												></div>
												</div>

												<div className="planet__structure planet__structure--3"></div>
												<div className="planet__structure planet__structure--4"></div>
												<div className="planet__structure planet__structure--5"></div>
												<div className="planet__structure planet__structure--6"></div>
											</div>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div
							onClick={() => {
								setIsShow(true);
								setIsShowBackground(true);
								handleClick();
								setTimeout(() => {
									setIsShow(false);
								}, 3200);
							}}
							className="mars-orbit sun-orbit"
						>
							<div className="ascending-node ascending-node--mars">
								<div className="inclination inclination--mars">
									<div className="orbit__visual"></div>
									<div className="orbit__shape orbit__shape--mars">
										<div
											className={
												styles.hover_solar +
												" " +
												"planet mars"
											}
										>
											<div className="planet__structure planet__structure--1"></div>
											<div className="planet__structure planet__structure--2 size-solar-big position-solar-2">
												<Image
													src={MarsImage}
													alt="Saturn Rings"
													width={100}
													height={100}
												/>
												<div
													className="box_image"
												></div>
											</div>
											<div className="planet__structure planet__structure--3"></div>
											<div className="planet__structure planet__structure--4"></div>
											<div className="planet__structure planet__structure--5"></div>
											<div className="planet__structure planet__structure--6"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div
							onClick={() => {
								setIsShow(true);
								setIsShowBackground(true);
								handleClick();
								setTimeout(() => {
									setIsShow(false);
								}, 3200);
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
											<div className="planet__structure planet__structure--1"></div>
											<div className="planet__structure planet__structure--2 size-solar-big position-solar-3">
												<Image
													src={MercuryImage}
													alt="Saturn Rings"
													width={200}
													height={200}
												/>
												<div
													className="box_image"
												></div>
											</div>
											<div className="planet__structure planet__structure--3"></div>
											<div className="planet__structure planet__structure--4"></div>
											<div className="planet__structure planet__structure--5"></div>
											<div className="planet__structure planet__structure--6"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div
							onClick={() => {
								setIsShow(true);
								setIsShowBackground(true);
								handleClick();
								setTimeout(() => {
									setIsShow(false);
								}, 3200);
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
											<div className="planet__structure planet__structure--1"></div>
											<div className="planet__structure planet__structure--2">
												<Image
													src={SolarImage}
													alt="Saturn Rings"
													width={100}
													height={100}
												/>
												<div
													className="box_image"
												></div>
											</div>
											<div className="planet__structure planet__structure--3"></div>
											<div className="planet__structure planet__structure--4"></div>
											<div className="planet__structure planet__structure--5"></div>
											<div className="planet__structure planet__structure--6"></div>
										</div>
										<div className="planet-orbit planet-orbit--saturn">
											{/* <div
												className={"rings-of-saturn"}
											></div> */}
										</div>
									</div>
								</div>
							</div>
						</div>
						<div
							onClick={() => {
								setIsShow(true);
								setIsShowBackground(true);
								handleClick();
								setTimeout(() => {
									setIsShow(false);
								}, 3200);
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
											<div className="planet__structure planet__structure--1"></div>
											<div className="planet__structure planet__structure--2 size-solar-small position-solar-5">
												<Image
													src={MarsImage}
													alt="Saturn Rings"
													width={100}
													height={100}
												/>
												<div className="box_image"></div>
											</div>
											<div className="planet__structure planet__structure--3"></div>
											<div className="planet__structure planet__structure--4"></div>
											<div className="planet__structure planet__structure--5"></div>
											<div className="planet__structure planet__structure--6"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div
							onClick={() => {
								setIsShow(true);
								setIsShowBackground(true);
								handleClick();
								setTimeout(() => {
									setIsShow(false);
								}, 3200);
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
											<div className="planet__structure planet__structure--1"></div>
											<div className="planet__structure planet__structure--2 size-solar-big position-solar-6">
												<Image
													src={SolarImage}
													alt="Saturn Rings"
													width={130}
													height={130}
												/>
												<div className="box_image"></div>
											</div>
											<div className="planet__structure planet__structure--3"></div>
											<div className="planet__structure planet__structure--4"></div>
											<div className="planet__structure planet__structure--5"></div>
											<div className="planet__structure planet__structure--6"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <div class="content">
						<h1>The Solar System</h1>
						<div class="controls">
							<div class="controls__group">
								<span>Orbit Size:</span>
								<label
									class="button correct-size"
									for="correct-orbit-size"
								>
									Correct
								</label>
								<label class="button ideal-size" for="ideal-orbit-size">
									Idealized
								</label>
							</div>
							<div class="controls__group">
								<span>Velocity:</span>
								<label class="button real-time" for="real-time">
									Realtime
								</label>
								<label
									class="button one-year-per-minute"
									for="one-year-per-minute"
								>
									1 Year / Min
								</label>
								<label
									class="button one-year-per-second"
									for="one-year-per-second"
								>
									1 Year / Sec
								</label>
							</div>
							<div class="controls__group">
								<span>Perspective:</span>
								<label class="button threedee" for="threedee">
									3d
								</label>
								<label class="button topview" for="topview">
									Top
								</label>
								<label class="button isometric" for="isometric">
									Isometric
								</label>
							</div>
						</div>
					</div> */}
			</div>
		</React.Fragment>
	);
}

export default HomeAura;
