import { ADMIN_ROUTE, BASKET_ROUTE } from "./utils/consts";
import Admin from "./components/admin/Admin";
import Admin from "./components/admin/Admin"
import Basket from "./components/basket/Basket"
import {ADMIN_ROUTE, BASKET_ROUTE} from "./utils/consts"

//для авторизованных пользователей доступна панель админа и корзина
export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Components:Admin
    },
    {
        path: BASKET_ROUTE,
        Components:Basket
    }
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Components:Auth
    },
    {
        path: DEVICE_ROUTE + "/:id",
        Components:Device
    },
    {
        path: SHOP_ROUTE,
        Components:Shop
    },
    {
        path: REGISTRATION_ROUTE,
        Components:Auth
    }
]