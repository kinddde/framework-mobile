import { Toast } from "vant";

export function toast(message = "") {
  Toast(message);
}

export default { toast: toast };
