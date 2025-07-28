import { Html5Qrcode } from "html5-qrcode";

export default ({ app }, inject) => {
  inject('html5qrcode', Html5Qrcode);
};
