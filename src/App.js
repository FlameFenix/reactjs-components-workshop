import "./App.css";
import { Footer } from "./components/common/Footer";
import { Header } from "./components/common/Header";
import { Search } from "./components/common/Search";
import { Pagination } from "./components/pagination/Pagination";
import { UsersList } from "./components/users-list/UsersList";

function App() {
  return (
    <div>
      <Header />

      <main className="main">
        <section className="card users-container">

          <Search />

          <UsersList />

          <Pagination />

        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
