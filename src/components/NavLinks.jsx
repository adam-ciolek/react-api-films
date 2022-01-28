import React from "react";
import { Link } from "react-router-dom";
import { links, register } from "../data";

export const NavLinks = () => {
	return (
		<>
			<div className=" lg:grow lg:justify-between lg:flex lg:flex-row lg:relative lg:top-0 lg:left-0 lg:flex hidden">
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
		</>
	);
};
