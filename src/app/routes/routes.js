import BaseContainer from '../app/containers/BaseContainer';

import NavBarLayout from '../layouts/BaseLayout';

export const routes = [
  {
    path: '/',
    exact: true,
    Component: BaseContainer,
    Layout: BaseLayout
  },
];