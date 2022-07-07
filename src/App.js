import "./App.css";
import { Footer } from "./components/common/Footer";
import { Header } from "./components/common/Header";
import { Search } from "./components/common/Search";

function App() {
  return (
    <div>
      <Header />

      <main class="main">
        <section class="card users-container">

          <Search />

        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
