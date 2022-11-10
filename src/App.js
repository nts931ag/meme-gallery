import './App.css';
import Gallery from './components/Gallery';
import {QueryClientProvider, QueryClient} from 'react-query'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
 
  const client = new QueryClient()

  return (
    <QueryClientProvider client={client}>
      <Gallery/>
    </QueryClientProvider>
  );
}

export default App;
