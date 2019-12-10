import countDown from './countDown';

countDown.install = function (Vue) {
  Vue.component(countDown.name, countDown);
};

export default countDown;
