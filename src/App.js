import "./App.css";
import { Footer } from "./components/common/Footer";
import { Header } from "./components/common/Header";
import { UsersList } from "./components/users-list/UsersList";

function App() {

  return (
    <div>
      <Header />

      <main className="main">
        <section className="card users-container">

          <UsersList />

        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
