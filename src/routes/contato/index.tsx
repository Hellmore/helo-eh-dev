import { Link } from "react-router-dom"

const Contato = () => {
    return (
        <div>
            <h1>Contato</h1>
            <p>
                <Link to="/contato/1">Contato 1</Link>
            </p>
            <p>
                <Link to="/contato/2">Contato 2</Link>
            </p>
            <p>
                <Link to="/contato/3">Contato 3</Link>
            </p>
        </div>
    )
}

export default Contato