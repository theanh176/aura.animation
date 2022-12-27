import { useRouter } from "next/router";
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import styles from "./header.module.scss";
import Link from "next/link";

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
				<Link href={"/home-aura"}><h1>AURA</h1></Link>
				<div className={styles.box_hover_line}>
					<div className={styles.hover_line}>
						<span>HOVER</span>
						{/* <div className={styles.line}></div> */}
					</div>
				</div>
				<div className={styles.background}></div>
			</div>
		</Navbar>
	);
}

export default Header;
