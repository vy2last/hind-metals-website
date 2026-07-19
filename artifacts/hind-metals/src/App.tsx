import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Products } from './pages/Products';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import { Success } from './pages/Success';

const queryClient = new QueryClient();

function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-heading font-bold text-charcoal mb-4">404</h1>
      <p className="text-xl text-gray-600 uppercase tracking-widest font-heading font-bold">Page Not Found</p>
    </div>
  );
}

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/"         component={Home} />
        <Route path="/about"    component={About} />
        <Route path="/products" component={Products} />
        <Route path="/services" component={Services} />
        <Route path="/contact"  component={Contact} />
        <Route path="/success"  component={Success} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
        <Router />
      </WouterRouter>
    </QueryClientProvider>
  );
}

export default App;
