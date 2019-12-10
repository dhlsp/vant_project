import messageError from './messageError';

messageError.install = function (Vue) {
  Vue.component(messageError.name, messageError);
};

export default messageError;
