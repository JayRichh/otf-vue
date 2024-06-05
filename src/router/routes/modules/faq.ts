const faqRoute = [{
  path: "/faq",
  name: "FAQ",
  component: () => import("~/pages/faq/index.vue"),
  meta: {
    title: "FAQ",
  },
}];
export default faqRoute;
