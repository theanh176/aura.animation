import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./mainLayout.module.scss";

function MainLayout({ children }) {
	return (
		<React.Fragment>
			<div className={styles.mainlayout}>
				<Header />
				<div className={styles.children}>{children}</div>
				<Footer />
			</div>
		</React.Fragment>
	);
}

export default MainLayout;
