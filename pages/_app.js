import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { store } from "../store";
import "../styles/globals.scss";

import AOS from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
	const [showChild, setShowChild] = useState(false);
	useEffect(() => {
		setShowChild(true);
		import("bootstrap/dist/js/bootstrap");
		AOS.init();
		AOS.init({
			duration: 800,
		});
	}, []);

	useEffect(() => {
		require("bootstrap/dist/js/bootstrap.bundle.min.js");
	}, []);
	if (!showChild) {
		return null;
	}
	if (typeof window === "undefined") {
		return <>null</>;
	} else {
		return (
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		);
	}
}
export default MyApp;
