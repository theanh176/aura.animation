import React from "react";
import HomeTheAnh from "./Home-theanh";
import { Navbar } from "react-bootstrap";

export default function Index() {
	return (
		<Navbar fixed="top" className="p-0">
			<HomeTheAnh />
		</Navbar>
	);
}
