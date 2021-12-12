import { upperFirst } from 'lodash';
import type { Component } from 'vue';

type GlobalComponet = {
  componentName: string;
  config: Component & { default?: any };
};

const requireComponent = require.context('./', true, /\.vue$/);
const globalComponent: GlobalComponet[] = [];

requireComponent.keys().forEach(fileName => {
  const config = requireComponent(fileName) as Component;
  const componentName = fileName.replace(/^\.\/(.*\/)?/, '').replace(/([a-zA-Z]+)\.vue$/, (match, p1) => {
    return `M${upperFirst(p1)}`;
  });
  globalComponent.push({
    componentName,
    config,
  });
});

export default globalComponent;
