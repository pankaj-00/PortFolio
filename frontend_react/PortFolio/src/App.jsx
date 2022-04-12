import {
  Header,
  About,
  Works,
  Skills,
  Testimonial,
  Footer,
} from "./containers";

import { Navbar } from "./components";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Works />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
