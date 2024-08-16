import React from 'react';
import './main.css';
import ErrorBoundary from './ErrorBoundary';

function ErrorScreen({ error }) {
  // 여기서 메시지를 랜더링하기 전에 오류를 추적하거나 처리할 수 있다.
  return (
    <div className="error">
      <h3>We are sorry... something went wrong</h3>
      <p>We cannot process your request at this moment.</p>
      <p>ERROR: {error.message}</p>
    </div>
  );
}

const SiteLayout = ({ children, menu = (c) => null }) => {
  return (
    <div className="site-container">
      <div className="sidebar">{menu}</div>
      <div className="section">{children}</div>
    </div>
  );
};

const Menu = () => (
  <ErrorBoundary fallback={ErrorScreen}>
    <p style={{ color: 'white' }}>
      TODO: Build Menu
      <BreakThings />
    </p>
  </ErrorBoundary>
);

const Callout = ({ children }) => (
  <ErrorBoundary fallback={ErrorScreen}>
    <div className="callout">{children}</div>
  </ErrorBoundary>
);

const BreakThings = () => {
  throw new Error('We intentionally broke something');
};

export default function Main() {
  return (
    <SiteLayout
      menu={
        <ErrorBoundary fallback={ErrorScreen}>
          <p>Site Layout Menu</p>
          <BreakThings />
        </ErrorBoundary>
      }
    >
      <ErrorBoundary fallback={ErrorScreen}>
        <Callout>
          Callout
          <BreakThings />
        </Callout>
      </ErrorBoundary>

      <ErrorBoundary fallback={ErrorScreen}>
        <h1>Contents</h1>
        <p>this is the main part of the example</p>
      </ErrorBoundary>
    </SiteLayout>
  );
}
