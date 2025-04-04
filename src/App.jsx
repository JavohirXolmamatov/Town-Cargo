import { Header, Main, Footer } from "./pages/index";
import { FaAngleLeft } from "react-icons/fa";

function App() {
  return (
    <div className="relative">
      <Header />
      <Main />
      <Footer />
      <div
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed right-10 bottom-10 size-13 bg-black/70 flex items-center justify-center rounded-full cursor-pointer z-50"
      >
        <FaAngleLeft className="rotate-90 size-6 text-white" />
      </div>
    </div>
  );
}

export default App;
