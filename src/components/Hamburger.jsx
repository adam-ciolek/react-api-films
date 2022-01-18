// import links
import { Link } from "react-router-dom";
// import data
import { links, register } from "../data";

const Hamburger = () => {
	return (
		<div className=" grow justify-between flex">
			<ul>
				{links.map((link) => {
					const { id, name, url } = link;
					return (
						<li
							key={id}
							className="display: inline px-5 first:pl-16  text-white "
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
							className="display: inline px-5 first:pl-16  text-white "
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
	);
};

export default Hamburger;
