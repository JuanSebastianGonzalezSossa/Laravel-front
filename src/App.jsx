import { Provider } from 'react-redux';
import { AppRouter } from './router/appRoutes';
import { AppTheme } from './theme';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store';
import './app.css'

export const App = () => {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppTheme>
          <AppRouter />
        </AppTheme>
      </BrowserRouter>
    </Provider>
  )
}