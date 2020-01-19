import { Toast } from "vant";

var instance = "";
var uid = 0;

export const show = () => {
  if (!instance) {
    instance = Toast.loading({
      duration: 0,
      forbidClick: true,
      mask: true,
      message: "加载中..."
    });
  }
  uid++;
};

export function hide() {
  uid--;
  if (uid === 0 && instance) {
    instance = "";
    Toast.clear();
  }
}

export default {
  show,
  hide
};
