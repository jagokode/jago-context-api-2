import KopiForm from './components/KopiForm';
import KopiList from './components/KopiList';
import Navbar from './components/Navbar';
import KopiContextProvider from './contexts/KopiContext';

function App() {
  return (
    <div className="App">
      <KopiContextProvider>
        <Navbar />
        <KopiList />
        <KopiForm />
      </KopiContextProvider>
    </div>
  );
}

export default App;
