import { useState } from "react";
// data context

const Films = ({ children }) => {
	return (
		<section className="lg:grid-cols-5 xl:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 grid gap-4 my-28 auto-rows-fr px-2">
			{children}
		</section>
	);
};

export default Films;
