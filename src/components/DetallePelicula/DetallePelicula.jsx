import React from "react";

export default function DetallePelicula() {
    const [pelicula, setPelicula] = useState({});

    const callApi = async (id) => {
      const res = await axios.get("http://www.omdbapi.com", {
        params: {
          apiKey: apiKey,
          i: id,
          plot: full,
        },
      });
      setPelicula(res.data);
    };
  
    useEffect(() => {
      callApi(id);
    }, []);
  
    return (
      <div>
        <h2>{item.Title}</h2>
        <h3>{item.Year}</h3>
        <img src={item.Poster} alt={item.Title} />
      </div>
    );
}

