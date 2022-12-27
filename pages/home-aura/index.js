import React from "react";
import HomeAura from "./Home-aura";
import { Navbar } from "react-bootstrap";

export default function Index() {
	return (
		<Navbar fixed="top" className="p-0">
			<HomeAura />
		</Navbar>
	);
}
