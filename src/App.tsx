/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import AppProvider from './context/AppContext';
import AppRouter from './router';

export default function App() {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
}
