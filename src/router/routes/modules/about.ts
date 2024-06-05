const aboutRoute = [{
  path: "/about",
  name: "About",
  component: () => import("~/pages/about/index.vue"),
  meta: {
    title: "About",
  },
}];
export default aboutRoute;
