import { useContext, useState } from 'react';
import { KopiContext } from '../contexts/KopiContext';

const KopiForm = () => {
  const [name, setName] = useState('');
  const [origin, setOrigin] = useState('');

  const { dispatch } = useContext(KopiContext);

  const handleAddKopi = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_KOPI', payload: { name, origin } });
    setName('');
    setOrigin('');
  };

  return (
    <form onSubmit={handleAddKopi}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="nama kopi"
      />
      <input
        type="text"
        value={origin}
        onChange={(e) => setOrigin(e.target.value)}
        placeholder="asal kopi"
      />
      <input type="submit" value="Simpan" />
    </form>
  );
};

export default KopiForm;
