import Vue from 'vue';

export default function (elements, Class, type, instanceName) {
  $(elements).each((i, element) => {
    if (type === 'widget') {
      const $element = $(element);
      const instance = new Class($element);

      if (instanceName) {
        $element.data(instanceName, instance);
      }
    }

    if (type === 'vue') {
      new Vue({
        render: h => h(Class, {
          props: { dataset: Object.assign({}, element.dataset) }
        }),
      }).$mount(element);
    }
  });
}
