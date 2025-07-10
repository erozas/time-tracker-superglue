// app/javascript/server_rendering.js
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Application } from '@thoughtbot/superglue';
import { buildVisitAndRemote } from './application_visit';
import { pageIdentifierToPageComponent } from './page_to_page_mapping';
import { store } from './store';

// Export a function Workers can call:
export async function renderPage(pathname, baseUrl) {
  // 1. Fetch the JSON props from your Rails app:
  const resp = await fetch(`${baseUrl}${pathname}.json`);
  const initialPage = await resp.json();

  // 2. Render to an HTML string:
  return renderToString(
    <Application
      className="full-height"
      baseUrl={baseUrl}
      initialPage={initialPage}
      visit={buildVisitAndRemote({ baseUrl, store })}
      pageIdentifierToPageComponent={pageIdentifierToPageComponent}
      store={store}
    />
  );
}
