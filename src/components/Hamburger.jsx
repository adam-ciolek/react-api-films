import { useState } from "react";
// import links
import { Link } from "react-router-dom";
// import data
import { links, register } from "../data";
// icons
import { BsX, BsList } from "react-icons/bs";

const Hamburger = () => {
	const [hamburger, setHamburger] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	const handleChange = () => {
		setHamburger(true);
		setIsOpen(true);
	};

	const handleChangeClose = () => {
		setHamburger(false);
		setIsOpen(false);
	};

	return (
		<>
			<div className="lg:hidden">
				<BsList
					onClick={handleChange}
					className={`${hamburger ? "hidden" : "block"} text-3xl`}
				/>
				<BsX
					onClick={handleChangeClose}
					className={`${hamburger ? "block" : "hidden"} text-3xl`}
				/>
			</div>
			{isOpen && (
				<div className=" lg:grow lg:justify-between lg:flex lg:flex-row lg:relative lg:top-0 lg:left-0 flex flex-col absolute  right-0 top-28 z-10 bg-black w-full text-center">
					<ul>
						{links.map((link) => {
							const { id, name, url } = link;
							return (
								<li
									key={id}
									className="lg:inline px-5 lg:first:pl-16  text-white flex flex-col mb-4"
								>
									<Link
										to={url}
										className="relative  before:absolute before:-bottom-3  before:right-0 before:h-px before:w-full before:transition  before:delay-75 before:bg-sky before:origin-bottom-right before:scale-0
              hover:before:scale-100 hover:before:origin-bottom-left
              "
									>
										{name}
									</Link>
								</li>
							);
						})}
					</ul>
					<ul>
						{register.map((link) => {
							const { id, name, url } = link;
							return (
								<li
									key={id}
									className="lg:inline px-5 lg:first:pl-16  text-white flex flex-col mb-4 z-10 "
								>
									<Link
										to={url}
										className="relative  before:absolute before:-bottom-3  before:right-0 before:h-px before:w-full before:transition  before:delay-75 before:bg-sky before:origin-bottom-right before:scale-0
              hover:before:scale-100 hover:before:origin-bottom-left
              "
									>
										{name}
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
			)}
		</>
	);
};

export default Hamburger;
