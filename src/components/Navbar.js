import { useContext } from 'react';
import { KopiContext } from '../contexts/KopiContext';

const Navbar = () => {
  const { kopi } = useContext(KopiContext);

  return (
    <div className="navbar">
      <h1>Daftar Kopi Favorit</h1>
      <p>Total kopi favorit: {kopi.length}</p>
    </div>
  );
};

export default Navbar;
