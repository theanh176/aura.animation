import React from "react";
import Head from "next/head";

export default function Seo(props) {
	const { title, description, url, thumbnailUrl } = props.data;

	return (
		<Head>
			{/* <title>{title}</title>
			<meta name="title" content={title} />
			<meta name="description" content={description} />

			<meta itemprop="name" content={title} />
			<meta
				itemprop="description"
				content={description}
			/>
			<meta itemprop="image" content={thumbnailUrl} />

			<meta property="og:type" content="website" />
			<meta property="og:url" content={url} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={thumbnailUrl} />

			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content={url} />
			<meta property="twitter:title" content={title} />
			<meta property="twitter:description" content={description} />
			<meta property="twitter:image" content={thumbnailUrl} /> */}

			<title>WordPress Themes & Website Templates from ThemeForest</title>
			<meta
				name="description"
				content="Step by step tutorials to build a full CRUD website using NextJS for beginners"
			/>

			<meta
				itemprop="name"
				content="WordPress Themes & Website Templates from ThemeForest"
			/>
			<meta
				itemprop="description"
				content="Step by step tutorials to build a full CRUD website using NextJS for beginners"
			/>
			<meta
				itemprop="image"
				content="https://cdn.getshifter.co/caa65008efb706a8bfc6f7e4045d6a018420c3df/uploads/2020/11/nextjs.png"
			/>

			<meta
				property="og:url"
				content="https://templates-ecommerce-rust.vercel.app"
			/>
			<meta property="og:type" content="website" />
			<meta
				property="og:title"
				content="WordPress Themes & Website Templates from ThemeForest"
			/>
			<meta
				property="og:description"
				content="Step by step tutorials to build a full CRUD website using NextJS for beginners"
			/>
			<meta
				property="og:image"
				content="https://cdn.getshifter.co/caa65008efb706a8bfc6f7e4045d6a018420c3df/uploads/2020/11/nextjs.png"
			/>

			<meta name="twitter:card" content="summary_large_image" />
			<meta
				name="twitter:title"
				content="WordPress Themes & Website Templates from ThemeForest"
			/>
			<meta
				name="twitter:description"
				content="Step by step tutorials to build a full CRUD website using NextJS for beginners"
			/>
			<meta
				name="twitter:image"
				content="https://cdn.getshifter.co/caa65008efb706a8bfc6f7e4045d6a018420c3df/uploads/2020/11/nextjs.png"
			/>
		</Head>
	);
}
