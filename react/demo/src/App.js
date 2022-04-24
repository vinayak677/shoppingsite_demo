import { useEffect, useState } from "react";
// import Cards from "./Cards";
// import { URL } from "./Constants";

function App() {
  const [list, setList] = useState([]);
  const [query, setQuery] = useState("")

// useEffect(()=>{
//   fetch(URL)
//   .then(response=>response.json())
//   .then(_data=>setList(_data))
// }, [])

useEffect(() => {
  fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((json) => setList(json));
}, []);

const searchFunction = (list) => list?.filter((lis) => {
  return lis.category.toLowerCase().includes(query.toLowerCase())
});
 

  return (
    <>
      <h1 className="text-center" style={{ color: 'green', paddingTop: '20px' }}>Lets shop!!</h1>
      <div className="container-fluid mx-2">
      <input className="mx-4" type="search" placeholder="Search" value={query} onChange={(e) => setQuery(e.target.value)} />
        <div className="row mt-5 mx-2">
          <div className="col-md-3 col-sm-4">
            <button className="btn btn-warning w-100 mb-2"onClick={()=>setQuery("men's clothing")}>Men</button>
            <button className="btn btn-warning w-100 mb-2"onClick={()=>setQuery("women's clothing")}>Women</button>
            <button className="btn btn-warning w-100 mb-2"onClick={()=>setQuery("jewelery")}>jewelery</button>
            <button className="btn btn-warning w-100 mb-2"onClick={()=>setQuery("electronics")}>Electronic</button>
            <button className="btn btn-warning w-100 mb-2"onClick={()=>setQuery("")}>All</button>
          </div>
          <div className="col-md-9 col-sm-8">
            <div className="row">
            {searchFunction(list)?.map((values)=>{
                return (
                  <div className="col-md-4 ">
                    <div className="card" >
                      <img src={values.image} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">{values.category}</h5>
                        <p className="card-text">{values.description}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                      </div>
                    </div>
                  </div>
                )
              })}

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
