import { Head, Html, Main, NextScript } from "next/document";
export default function Document() {
	return (
		<Html>
			<Head>
				<meta name="theme-color" content="#000000"></meta>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="true"
				/>

				{/* <link
					type="text/css"
					href="/vendor/font-awesome-pro-5.15.4/css/all.min.css"
					rel="stylesheet"
				></link> */}

				{/* Google Font */}
				<link
					href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600&family=Montserrat:wght@200;300;400;500;600&display=swap"
					rel="stylesheet"
				></link>

				{/*css bootstrap*/}
				<link
					href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
					rel="stylesheet"
					integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
					crossOrigin="anonymous"
				></link>

				<link
					rel="stylesheet"
					href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
					integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
					crossOrigin="anonymous"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
