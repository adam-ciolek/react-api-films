import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
// data context

const Films = ({ children }) => {
	return (
		<section className="lg:grid-cols-6 md:grid-cols-2 xs:grid-cols-1 grid gap-4 my-28 auto-rows-fr">
			{children}
		</section>
	);
};

export default Films;
