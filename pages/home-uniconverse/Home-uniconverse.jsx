import { useRouter } from "next/router";
import React, { useState } from "react";
import MainLayout from "../../components/layout/mainLayout";
import styles from "./Home-uniconverse.module.scss";

function HomePage() {
	const [category, setCategory] = useState(1);
	const router = useRouter();
	return (
		<MainLayout>
			<div className={styles.home}>UNICONVERSE</div>
		</MainLayout>
	);
}

export default HomePage;
