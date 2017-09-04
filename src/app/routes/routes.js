import BaseContainer from '../containers/BaseContainer';

import BaseLayout from '../layouts/BaseLayout';

export const routes = [
  {
    path: '/',
    exact: true,
    Component: BaseContainer,
    Layout: BaseLayout
  },
];