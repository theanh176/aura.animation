import { useRouter } from "next/router";
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import styles from "./header.module.scss";

function Header() {
	const router = useRouter();
	return (
		<Navbar
			expand="lg"
			fixed="top"
			style={{ padding: "0", background: "#262626" }}
		>
			<div
				className={
					styles.header +
					"  " +
					"justify-content-between mx-auto text-left"
				}
			>
				<h1>AURA</h1>
				<div className={styles.background}></div>
			</div>
		</Navbar>
	);
}

export default Header;
