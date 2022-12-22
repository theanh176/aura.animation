import { useRouter } from "next/router";
import React, { useState } from "react";
import MainLayout from "../../components/layout/mainLayout";
import styles from "./Home-theanh.module.scss";

function HomeTheAnh() {
	return (
		<React.Fragment>
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
				checked="checked"
			/>
			<input type="radio" id="one-year-per-second" name="velocity" />
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
					<div className="sun" onclick="alert(1)">
						<div className="planet__structure planet__structure--1"></div>
						<div className="planet__structure planet__structure--2"></div>
						<div className="planet__structure planet__structure--3"></div>
						<div className="planet__structure planet__structure--4"></div>
						<div className="planet__structure planet__structure--5"></div>
						<div className="planet__structure planet__structure--6"></div>
					</div>
					<div className="mercury-orbit sun-orbit">
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
					<div className="venus-orbit sun-orbit">
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
					<div className="earth-orbit sun-orbit">
						<div className="ascending-node ascending-node--earth">
							<div className="inclination inclination--earth">
								<div className="orbit__visual"></div>
								<div className="orbit__shape orbit__shape--earth">
									<div className="planet earth">
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
					<div className="mars-orbit sun-orbit">
						<div className="ascending-node ascending-node--mars">
							<div className="inclination inclination--mars">
								<div className="orbit__visual"></div>
								<div className="orbit__shape orbit__shape--mars">
									<div className="planet mars">
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
					<div className="jupiter-orbit sun-orbit">
						<div className="ascending-node ascending-node--jupiter">
							<div className="inclination inclination--jupiter">
								<div className="orbit__visual"></div>
								<div className="orbit__shape orbit__shape--jupiter">
									<div className="planet jupiter">
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
					<div className="saturn-orbit sun-orbit">
						<div className="ascending-node ascending-node--saturn">
							<div className="inclination inclination--saturn">
								<div className="orbit__visual"></div>
								<div className="orbit__shape orbit__shape--saturn">
									<div className="planet saturn">
										<div className="planet__structure planet__structure--1"></div>
										<div className="planet__structure planet__structure--2"></div>
										<div className="planet__structure planet__structure--3"></div>
										<div className="planet__structure planet__structure--4"></div>
										<div className="planet__structure planet__structure--5"></div>
										<div className="planet__structure planet__structure--6"></div>
									</div>
									<div className="planet-orbit planet-orbit--saturn">
										<div className="rings-of-saturn"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="uranus-orbit sun-orbit">
						<div className="ascending-node ascending-node--uranus">
							<div className="inclination inclination--uranus">
								<div className="orbit__visual"></div>
								<div className="orbit__shape orbit__shape--uranus">
									<div className="planet uranus">
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
					<div className="neptun-orbit sun-orbit">
						<div className="ascending-node ascending-node--neptun">
							<div className="inclination inclination--neptun">
								<div className="orbit__visual"></div>
								<div className="orbit__shape orbit__shape--neptun">
									<div className="planet neptun">
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
				</div>
			</div>
		</React.Fragment>
	);
}

export default HomeTheAnh;
