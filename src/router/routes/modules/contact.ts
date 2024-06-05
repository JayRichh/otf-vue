const contactRoute = [{
  path: "/contact",
  name: "Contact",
  component: () => import("~/pages/contact/index.vue"),
  meta: {
    title: "Contact",
  },
}];
export default contactRoute;
