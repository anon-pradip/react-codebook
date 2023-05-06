import { Footer, Header } from "./components";
import AllRoutes from "./routes/AllRoutes";

function App() {
  return (
    <div className="dark:bg-slate-800 dark:text-slate-200">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
