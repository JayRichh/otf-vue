const classesRoute = [{
  path: "/classes",
  name: "Classes",
  component: () => import("~/pages/classes/index.vue"),
  meta: {
    title: "Classes",
  },
}];
export default classesRoute;
