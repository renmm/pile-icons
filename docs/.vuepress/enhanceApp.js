import { Message } from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';

import VueClipboards from 'vue-clipboards';

export default ({ Vue }) => {
  Vue.prototype.$message = Message;
  Vue.use(VueClipboards);
};
