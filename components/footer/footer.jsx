import React from "react";
import styles from "./footer.module.scss";

function Footer() {
	return (
		<div className={styles.footer}>
			<div className={styles.box_footer + "  " + "mx-auto"}>
				FOOTER
			</div>
		</div>
	);
}

export default Footer;
