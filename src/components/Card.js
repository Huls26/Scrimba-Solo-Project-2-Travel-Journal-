import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function Card(props) {
        let data = props.place;
    return (
        <section className="card">
            <div className="card-image">
                <img src={data.imageUrl} alt={data.title} />
            </div>

            <div className="card-text">
                <div className="card-location">
                    <h3 className="location-title"><i><FontAwesomeIcon icon={faLocationDot} /></i> {data.location} <a className='goole-links' href={data.googleMapsUrl} target="_blank">View on Google Maps</a></h3>
                </div>

                <h1 className="card-title">{data.title}</h1>
                <p className="card-date">{data.startDate} - {data.endDate}</p>
                <p className='card-description'>{data.description}</p>
            </div>
        </section>
    )
}