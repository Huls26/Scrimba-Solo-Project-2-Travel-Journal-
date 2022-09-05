import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'

export default function Nav() {
    return (
        <nav className="nav-bar">
            <div className="nav-text-logo">
                <i className="nav-logo"><FontAwesomeIcon icon={ faEarthAmericas } /></i>
                <h3 className="nav-title">my travel journal</h3>
            </div>
        </nav>
    )
}