import { useEffect, useState } from "react";
import { GifCategory } from "../helpers/GifCategory";

export default function useGifHooks(category) {
 const [state, setState] = useState({
  data: [],
  error: false,
  loading: false,
 });

 useEffect(() => {
  GifCategory(category)
   .then((pokemon) => setState({ data: pokemon, loading: false, error: false }))
   .catch(() => setState({ loading: false, error: true }));
 }, [category]);

 return state;
}
