import React from "react";
import Seo from "../components/common/seo";
import HomePage from "./home/Home";

export default function Home() {
	return (
		<React.Fragment>
			<Seo
				data={{
					title: "WordPress Themes & Website Templates from ThemeForest",
					description:
						"Step by step tutorials to build a full CRUD website using NextJS for beginners",
					url: "https://templates-ecommerce-rust.vercel.app/",
					thumbnailUrl:
						"https://cdn.getshifter.co/caa65008efb706a8bfc6f7e4045d6a018420c3df/uploads/2020/11/nextjs.png",
				}}
			/>
			<HomePage />
		</React.Fragment>
	);
}
