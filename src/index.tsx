import { createRoot } from 'react-dom/client';
import { App } from './components/App';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('root not found');
}

const root = createRoot(rootElement);

root.render(<App />);
