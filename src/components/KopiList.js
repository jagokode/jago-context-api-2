import { useContext } from 'react';
import { KopiContext } from '../contexts/KopiContext';
import KopiInfo from './KopiInfo';

const KopiList = () => {
  const { kopi } = useContext(KopiContext);
  console.log(kopi);

  return kopi.length ? (
    <div className="kopi-list">
      <ul>
        {kopi.map((k) => (
          <KopiInfo kopi={k} key={k.id} />
        ))}
      </ul>
    </div>
  ) : (
    <div className="empty">Tidak ada kopi favorit</div>
  );
};

export default KopiList;
