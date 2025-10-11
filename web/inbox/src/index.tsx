import ReactDOM from 'react-dom/client';
import { hello } from "@endform/sdk/common"

const App = () => (
  <div>
    <h1>Hello, React! {hello()}</h1>
  </div>
);

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<App />);
}
