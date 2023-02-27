import React from 'react';
import { Provider } from 'react-redux';
import { LayoutProvider } from 'components/context/layoutcontext';
import { Layout } from 'components';
import { rootStore, setupFontAwesomeIcons } from 'core';
setupFontAwesomeIcons();

// 1. PrimeIReact
import 'primereact/resources/primereact.min.css';
// 2. PrimeIcons
import 'primeicons/primeicons.css';
// 3. PrimeFlex
import 'primeflex/primeflex.css';
// 4. PrimeFaces Theme
import 'assets/styles/main.scss';

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={rootStore}>
      {Component.getLayout ? (
        <LayoutProvider>{Component.getLayout(<Component {...pageProps} />)}</LayoutProvider>
      ) : (
        <LayoutProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </LayoutProvider>
      )}
    </Provider>
  );
}
