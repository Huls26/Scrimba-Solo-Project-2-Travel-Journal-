import Nav from "./Nav";
import Card from "./Card";
import data from "../data";

export default function App() {
    console.log(data)
    let destinationFiles = data.map((place, index) => {
        return (<Card 
                key={index}
                place={place}
        />)
    })
    return (
        <div className="container">
            <Nav />
            <section className="card-section">
               {destinationFiles}
            </section>
        </div>
    )
}