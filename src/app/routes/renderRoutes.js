import React from 'react';
import { Route } from 'react-router';

export function renderRoutes(routes) {
  return routes.map(({ Layout, Component, path, exact }) => {
    return (
      <Route
        key={path}
        path={path}
        exact={exact}
        render={props => (
          <Layout {...props}>
            <Component {...props} />
          </Layout>
        )}
      />
    );
  });
}