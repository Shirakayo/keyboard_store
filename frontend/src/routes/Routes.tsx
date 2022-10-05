import {
    ADMIN_PANEL_ROUTES,
    CART_ROUTE, CONTACT_ROUTES, GB_ROUTES, IS_ROUTES,
    LOGIN_ROUTE,
    REGISTRATION_ROUTES,
    PRODUCTS_ROUTES,
    SUPPORT_ROUTES, UPDATES_ROUTES,
    WELCOME_ROUTES
} from "../utils/const";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Welcome from "../pages/Welcome";
import ItemPage from "../pages/ItemPage";
import Support from "../pages/Support";
import Cart from "../pages/Cart";
import AdminPanel from "../pages/AdminPanel";
import Contact from "../pages/Contact";
import Updates from "../pages/Updates";
import GbItems from "../pages/GbItems";
import IsItems from "../pages/IsItems";
import KeyboardItem from "../views/GroupBuy/Keyboard/Keyboard";
import Keycaps from "../views/GroupBuy/Keycaps/Keycaps";
import Deskmats from "../views/GroupBuy/Deskmats/Deskmats";
import Switches from "../views/GroupBuy/Switches/Switches";
import PreOrderKeycaps from "../views/GroupBuy/PreOrderKeycaps/PreOrderKeycaps";


export const publicRoutes = [
    {
        path: GB_ROUTES,
        component: <GbItems />,
        subRoute: [
            {
                path: 'keycaps',
                component: <Keycaps />
            },
            {
                path: 'pre-order-keycaps',
                component: <PreOrderKeycaps />
            },
            {
                path: 'keyboards',
                component: <KeyboardItem />
            },
            {
                path: 'switches',
                component: <Switches />
            },
            {
                path: 'deskmats',
                component: <Deskmats />
            }
        ]
    },
    {
        path: IS_ROUTES,
        component: <IsItems />
    },
    {
        path: UPDATES_ROUTES,
        component: <Updates />
    },
    {
        path: CONTACT_ROUTES,
        component: <Contact />
    },
    {
        path: LOGIN_ROUTE,
        component: <Login />
    },
    {
        path: REGISTRATION_ROUTES,
        component: <Registration />
    },
    {
        path: WELCOME_ROUTES,
        component: <Welcome />
    },
    {
        path: PRODUCTS_ROUTES,
        component: <ItemPage />
    },
    {
        path: SUPPORT_ROUTES,
        component: <Support />
    },
    {
        path: CART_ROUTE,
        component: <Cart />
    },
]

export const privateRoutes = [
    {
        path: ADMIN_PANEL_ROUTES,
        component: <AdminPanel />
    }
]