import { useContext } from 'react';
import { KopiContext } from '../contexts/KopiContext';

const KopiInfo = ({ kopi }) => {
  const { dispatch } = useContext(KopiContext);

  return (
    <li onClick={() => dispatch({ type: 'REMOVE_KOPI', id: kopi.id })}>
      <div className="name">{kopi.name}</div>
      <div className="origin">Asal: {kopi.origin}</div>
    </li>
  );
};

export default KopiInfo;
