// Original imports
// Import new route modules
import aboutRoute from "./modules/about";
import updatesRoute from "./modules/updates";
import classesRoute from "./modules/classes";
import contactRoute from "./modules/contact";
import faqRoute from "./modules/faq";
import { PAGE_NOT_FOUND_ROUTE } from "./basic";
import { PageConstant } from "~/constant/pageConstant";
import { LAYOUT } from "~/router/constant";

// Existing logic to automatically import other route modules
const modules = import.meta.glob<{ default: any }>("./modules/**/*.ts", { eager: true });
const routeModuleList: any = [];

// Add new route modules manually
routeModuleList.push(...aboutRoute, ...updatesRoute, ...classesRoute, ...contactRoute, ...faqRoute);

Object.keys(modules).forEach((key) => {
  if (!["./modules/about.ts", "./modules/updates.ts", "./modules/classes.ts", "./modules/contact.ts", "./modules/faq.ts"].includes(key)) {
    const mod = modules[key].default || {};
    const modList = Array.isArray(mod) ? [...mod] : [mod];
    routeModuleList.push(...modList);
  }
});

const layout = {
  path: PageConstant.BASE_HOME,
  name: "Layout",
  component: LAYOUT,
  meta: {
    title: "Layout",
  },
  redirect: PageConstant.BASE_HOME,
  children: [...routeModuleList, PAGE_NOT_FOUND_ROUTE],
};

export default layout;
