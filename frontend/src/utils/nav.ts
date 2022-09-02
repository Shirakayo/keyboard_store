import {
	CONTACT_ROUTES, GB_DESKMATS,
	GB_KEYBOARDS,
	GB_KEYCAPS,
	GB_ROUTES, GB_SWITCHES,
	IS_ROUTES,
	PR_KEYCAPS,
	SUPPORT_ROUTES,
	UPDATES_ROUTES
} from "./const";

interface IDropDown {
	title: string;
	path: string;
}

type navListType = {
	title: string;
	path: string;
	dropDown?: IDropDown[]
}

export const navList: navListType[] = [
	{
		title: "Group Buys",
		path: GB_ROUTES,
		dropDown: [
			{
				title: "Keycaps",
				path: GB_KEYCAPS
			},
			{
				title: "Pre-Order Keycaps",
				path: PR_KEYCAPS
			},
			{
				title: "Keyboards",
				path: GB_KEYBOARDS
			},
			{
				title: "Switches",
				path: GB_SWITCHES
			},
			{
				title: "Deskmats",
				path: GB_DESKMATS
			},
			{
				title: "Merchandise",
				path: "group-buy/merchandise"
			}
		]
	},
	{
		title: "In Stock",
		path: IS_ROUTES,
		dropDown: [
			{
				title: "Keycaps",
				path: "/keycaps"
			},
			{
				title: "keyboards",
				path: "/keyboards"
			},
			{
				title: "Switches",
				path: "/switches"
			},
			{
				title: "Stabilisers",
				path: "/stabilisers"
			},
			{
				title: "Lubricant/Springs",
				path: "/lubricants"
			},
			{
				title: "Accessories",
				path: "/accessories"
			},
			{
				title: "Deskmats",
				path: "/deskmats"
			},
			{
				title: "Merchandise",
				path: "/merchandise"
			},
			{
				title: "Miscellaneous",
				path: "/miscellaneous"
			}
		]
	},
	{
		title: "Updates",
		path: UPDATES_ROUTES
	},
	{
		title: "Support",
		path: SUPPORT_ROUTES
	},
	{
		title: "Contacts",
		path: CONTACT_ROUTES
	}
]