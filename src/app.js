// import { useSelector } from 'react-redux';

import createRouter from './routes';

export default function App() {
  const signed = true; // useSelector(state => state.auth.signed);

  return createRouter(signed);
}
