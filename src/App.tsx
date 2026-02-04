import { Header } from "./components/layout/Header/Header";
import { ModalProvider } from "./store/ModalProvider";

function App() {
  return (
    <ModalProvider>
      <Header />
    </ModalProvider>
  );
}

export default App;
