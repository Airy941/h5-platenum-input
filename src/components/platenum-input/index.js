/*
 * @Description:
 * @Version: 1.0
 * @Autor: huyu12
 * @Date: 2022-03-24 16:16:48
 * @LastEditors: huyu12
 * @LastEditTime: 2022-03-24 16:36:07
 */

import PlatenumInput from "./PlateInput.vue";
import vue from "vue";

PlatenumInput.install = () => {
  vue.component(PlatenumInput.name, PlatenumInput);
};

export default PlatenumInput;
