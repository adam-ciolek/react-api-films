import { BsTwitter, BsTwitch, BsSnapchat, BsFacebook } from "react-icons/bs";

export const links = [
	{ id: 1, name: "Movies", url: "/" },
	{ id: 2, name: "In Threaters", url: "in-threaters" },
	{ id: 3, name: "Favorite", url: "favorite" },
	{ id: 4, name: "Comming Soon", url: "comming-soon" },
];

export const register = [
	{ id: 5, name: "Sign In", url: "sign-in" },
	{ id: 6, name: "Register", url: "register" },
];

export const filters = [
	{
		id: "action",
		title: "action",
	},
	{
		id: "sci_fi",
		title: "science fiction",
	},
	{
		id: "romance",
		title: "romance",
	},
	{
		id: "comedy",
		title: "comedy",
	},
	{
		id: "biography",
		title: "biography",
	},
];

export const footerLinks = [
	{
		id: 1,
		title: "partnership",
		links: {
			one: "webiste",
			two: "social media",
			three: "branding",
		},
	},
	{
		id: 2,
		title: "about",
		links: {
			one: "our projects",
			two: "careers",
		},
	},
	{
		id: 3,
		title: "support",
		links: {
			one: "support Request",
			two: "contact",
		},
	},
];

export const socialMedia = [
	{
		icon: <BsTwitter />,
		url: "https://twitter.com/?lang=pl",
	},
	{
		icon: <BsTwitch />,
		url: "https://www.twitch.tv/",
	},
	{
		icon: <BsSnapchat />,
		url: "https://accounts.snapchat.com/accounts/login?continue=https%3A%2F%2Faccounts.snapchat.com%2Faccounts%2Fwelcome",
	},
	{
		icon: <BsFacebook />,
		url: "https://pl-pl.facebook.com/",
	},
];
