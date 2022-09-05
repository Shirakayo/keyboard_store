import gb_keycaps from '../assets/img/GroupBuy/keycaps_gb.jpg';
import po_keycaps from '../assets/img/GroupBuy/pre-order_keycaps.jpg'
import gb_keyboard from '../assets/img/GroupBuy/gb_keyboard.png'
import gb_switches from '../assets/img/GroupBuy/gb_switches.jpg'
import gb_deskmats from '../assets/img/GroupBuy/GBDeskmats.png'

import is_keycaps from '../assets/img/InStock/is_keycaps.png';
import is_keyboards from '../assets/img/InStock/is_keyboard.png';
import is_switches from '../assets/img/InStock/is_switches.png';
import is_stabs from '../assets/img/InStock/is_stabs.png';
import is_lubs from '../assets/img/InStock/is_lube.png';
import is_acces from '../assets/img/InStock/is_acces.png';
import is_deskmats from '../assets/img/InStock/is_deskmat.png';


export const WELCOME_ROUTES = '/'
export const ADMIN_PANEL_ROUTES = '/admin'
export const SUPPORT_ROUTES = '/support'
export const GB_ROUTES = '/pages/group-buy'
export const IS_ROUTES = '/pages/in-stock'
export const UPDATES_ROUTES = '/updates'
export const SHOP_ITEMS_ROUTES = '/shop/:id'
export const LOGIN_ROUTE = '/login'
export const CONTACT_ROUTES = '/contact'
export const REGISTRATION_ROUTES = '/registration/*'
export const CART_ROUTE = '/cart'

export const GB_KEYCAPS = '/pages/group-buy/keycaps'
export const PR_KEYCAPS = '/pages/group-buy/pre-order-keycaps'
export const GB_KEYBOARDS = '/pages/group-buy/keyboards'
export const GB_SWITCHES = '/pages/group-buy/switches'
export const GB_DESKMATS = '/pages/group-buy/deskmats'


export const gbItemsList = [
	{
		img: gb_keycaps,
		name: "group-buy-keycaps",
		path: 'keycaps'
	},
	{
		img: po_keycaps,
		name: "pre-order-keycaps",
		path: 'pre-order-keycaps'
	},
	{
		img: gb_keyboard,
		name: "group-buy-keyboards",
		path: 'keyboards'
	},
	{
		img: gb_switches,
		name: "group-buy-switches",
		path: 'switches'
	},
	{
		img: gb_deskmats,
		name: "group-buy-deskmats",
		path: 'deskmats'
	}
]

export const isItemsList = [
	{
		img: is_keycaps,
		name: "in-stock-keycaps"
	},
	{
		img: is_keyboards,
		name: "in-stock-keyboards"
	},
	{
		img: is_switches,
		name: "in-stock-switches"
	},
	{
		img: is_stabs,
		name: "in-stock-stabilisers"
	},
	{
		img: is_lubs,
		name: "in-stock-lubricants"
	},
	{
		img: is_acces,
		name: "in-stock-accessories"
	},
	{
		img: is_deskmats,
		name: "in-stock-deskmats"
	}
]

export const welcomeBlocks = [
	{
		img: gb_keycaps,
		name: "group buy keycaps",
		path: GB_KEYCAPS
	},
	{
		img: po_keycaps,
		name: "pre order keycaps",
		path: PR_KEYCAPS
	},
	{
		img: gb_keyboard,
		name: "group buy keyboards",
		path: GB_KEYBOARDS
	},
	{
		img: is_keycaps,
		description: 'Ready to ship',
		path: '/in-stock-keycaps',
		name: "in stock keycaps"
	},
	{
		img: is_keyboards,
		description: 'Ready to ship',
		path: '/in-stock-keyboards',
		name: "in stock keyboards"
	},
	{
		img: is_switches,
		description: 'Ready to ship',
		path: '/in-stock-switches',
		name: "in stock switches"
	},
]
