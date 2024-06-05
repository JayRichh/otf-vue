import { counter } from "./counter";

const appStore: any = {};

export function registerStore() {
  appStore.counter = counter();
}

export default appStore;
