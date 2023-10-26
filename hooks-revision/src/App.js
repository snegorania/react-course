import React, {useContext} from 'react';
import { AuthContext } from './constext/auth-context';

import Ingredients from './components/Ingredients/Ingredients';
import Auth from './components/Auth';

const App = props => {
  const ctx = useContext(AuthContext);
  return ctx.isLoggedIn ? <Ingredients />: <Auth/>;
};

export default App;
