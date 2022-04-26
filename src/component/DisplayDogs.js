import "./DisplayDogs.css"
export default function DisplayDogs({dogs, refresh}) {

    const element = dogs.map((dog) => {
        if (dog.img) {
            return (
                <li key={dog.breed} className="card">
                    <img src={dog.img} className="card-image" height="200px" width="200px"/>
                    <h2 className="card-title">{dog.breed}</h2>
                    <h2 className="card-subtitle">{dog.origin}</h2>
                </li>
            )}
    })

    return (
        <div className="container">
            <button onClick={refresh}> Reset </button>
            <ul className="list-container"> 
                {element}
            </ul>
        </div>
    )
}
