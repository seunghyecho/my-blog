import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from '@redux-saga/core';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'styled-components';

import rootReducer, { rootSaga } from '../modules';
import { tempSetUser, check } from 'modules/user';
import { GlobalStyle } from 'lib/styles/globals';
import { darkTheme, lightTheme } from 'lib/styles/theme';

import Header from 'components/common/Header';

function MyApp({ Component, pageProps }) {
  /**
   *  다크모드 상태 및 버튼 이벤트
   */
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  /**
   * TODO react-hydration-error
   */
  const [showChild, setShowChild] = useState(false);
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

  const loadUser = () => {
    try {
      const user = localStorage.getItem('user');
      if (!user) return;

      store.dispatch(tempSetUser(JSON.parse(user)));
      store.dispatch(check());
    } catch (e) {
      console.log('app, localStorage is not working');
    }
  };

  sagaMiddleware.run(rootSaga);
  loadUser();

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  }

  return (
    <HelmetProvider>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <GlobalStyle />
            <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            <Component {...pageProps} />
          </ThemeProvider>
        </QueryClientProvider>
      </Provider>
    </HelmetProvider>
  );
}

export default MyApp;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false
    }
  }
});
