import { nanoid } from "nanoid";
import { Home } from "../pages/home";
import { About } from "../pages/about";
import { Shop } from "../pages/shop";
import { ShopSingle } from "../pages/shop-single";
export const routes = [
  {
    component: Home,
    id: nanoid(),
  },
  {
    component: About,
    id: nanoid(),
    path: "/about",
  },
  {
    component: Shop,
    id: nanoid(),
    path: "/shop",
  },

  {
    component: ShopSingle,
    id: nanoid(),
    path: "shop/shop-single/:id",
  },
];
