import React from "react";
import styles from "./legaxy.module.scss";
import Link from "next/link";
import Solar from "../../components/solar/solar";

const Legaxy = () => {
    console.log("rendering Legaxy");
	return <div className={styles.legaxy}><div className={styles.solar_load}><Solar /></div></div>;
};

export default Legaxy;
