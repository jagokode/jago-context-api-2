import { createContext, useEffect, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const KopiContext = createContext();

const initialData = [
  { name: 'Kopi Arabika Gayo', origin: 'Aceh', id: 1 },
  { name: 'Kopi Robusta Sidikalang', origin: 'Sidikalang', id: 2 },
];

const kopiReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_KOPI':
      return [
        ...state,
        {
          name: action.payload.name,
          origin: action.payload.origin,
          id: uuidv4(),
        },
      ];
    case 'REMOVE_KOPI':
      return state.filter((kopi) => kopi.id !== action.id);
    default:
      return state;
  }
};

const KopiContextProvider = ({ children }) => {
  //   const [kopi, setKopi] = useState(initialData);
  //   const addKopi = (name, origin) =>
  //     setKopi([...kopi, { name, origin, id: uuidv4() }]);

  //   const removeKopi = (id) => {
  //     setKopi(kopi.filter((k) => k.id !== id));
  //   };

  const [kopi, dispatch] = useReducer(kopiReducer, initialData, () => {
    const localData = localStorage.getItem('kopi');
    return localData ? JSON.parse(localData) : initialData;
  });

  useEffect(() => {
    localStorage.setItem('kopi', JSON.stringify(kopi));
  }, [kopi]);

  return (
    <KopiContext.Provider value={{ kopi, dispatch }}>
      {children}
    </KopiContext.Provider>
  );
};

export default KopiContextProvider;
