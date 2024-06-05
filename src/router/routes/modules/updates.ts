const updatesRoute = [{
  path: "/updates",
  name: "Updates",
  component: () => import("~/pages/updates/index.vue"),
  meta: {
    title: "Updates",
  },
}];
export default updatesRoute;
