import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({
  easing: "ease-in-out",
  speed: 300,
  showSpinner: false,
  trickleSpeed: 200,
  minimum: 0.2,
});

export default NProgress;
