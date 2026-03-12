import { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  // Load favourites when app starts
  useEffect(() => {
    const loadFavourites = async () => {
      try {
        const stored = await AsyncStorage.getItem('favourites');
        if (stored) {
          setFavourites(JSON.parse(stored));
        }
      } catch (e) {
        console.warn('Failed to load favourites:', e);
      }
    };

    loadFavourites();
  }, []);

  // Save automatically whenever favourites change
  useEffect(() => {
    const saveFavourites = async () => {
      try {
        await AsyncStorage.setItem('favourites', JSON.stringify(favourites));
      } catch (e) {
        console.warn('Failed to save favourites:', e);
      }
    };

    saveFavourites();
  }, [favourites]);

  const isFavourite = id => {
    return favourites.some(item => item.name === id);
  };

  const toggleFavourite = item => {
    if (isFavourite(item.name)) {
      setFavourites(prev => prev.filter(w => w.name !== item.name));
    } else {
      setFavourites(prev => [...prev, item]);
    }
  };

  const clearFavourites = () => {
    setFavourites([]);
    AsyncStorage.removeItem('favourites')
  };

  return (
    <FavoriteContext.Provider
      value={{ favourites, isFavourite, toggleFavourite, clearFavourites }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavourites = () => useContext(FavoriteContext);

export default FavoriteContext;
