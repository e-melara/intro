export function GifCategory(category) {
 return new Promise(function (resolve, reject) {
  const url = `https://pokeapi.co/api/v2/pokemon/${encodeURI(category)}`;
  fetch(url)
   .then((response) => response.json())
   .then((data) => {
    return resolve({
     id: data.id,
     name: data.name,
     types: data.types.map(({ type }) => type.name),
     image: `https://pokeres.bastionbot.org/images/pokemon/${data.id}.png`,
    });
   })
   .catch(reject);
 });
}
