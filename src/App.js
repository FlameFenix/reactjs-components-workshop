import "./App.css";

import { Footer } from "./components/common/Footer";
import { Header } from "./components/common/Header";
import { Navigation } from "./components/common/Navigation";

import { UsersList } from "./components/users-list/UsersList";
import { OverlapNoContent } from "./components/users-list/overlap/OverlapNoContent";

import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div>
      <Header />
      
      <Navigation />

      <main className="main">
        <section className="card users-container">
          <Routes>
            <Route path="/" element={<UsersList />} />
            <Route path="*" element={<OverlapNoContent/>} />
          </Routes>

        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
