import { footerLinks, socialMedia } from "../data";

const Footer = () => {
	return (
		<div className="container mx-auto flex py-16 lg:justify-between flex-1 flex-col text-center sm:flex-row">
			{footerLinks.map((link) => {
				const { id, title } = link;
				const { one, two, three } = link.links;
				return (
					<div key={id} className="flex-1 even:my-4 sm:even:my-0">
						<h4 className="font-bold capitalize mb-2">{title}</h4>
						<ul>
							<li className="capitalize mb-2 text-sm cursor-pointer">{one}</li>
							<li className="capitalize mb-2 text-sm cursor-pointer">{two}</li>
							<li className="capitalize text-sm cursor-pointer">{three}</li>
						</ul>
					</div>
				);
			})}
			<div className="flex-1 mt-4 sm:mt-0">
				<ul className="flex justify-center">
					{socialMedia.map((iconMedia, index) => {
						const { icon, url } = iconMedia;
						return (
							<li key={index} className="mr-4">
								<a href={url} target="_blank" rel="noreferrer">
									{icon}
								</a>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default Footer;
