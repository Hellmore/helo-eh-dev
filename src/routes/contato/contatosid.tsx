import { useParams } from "react-router-dom";

const Contatosid = () => {
    const { id } = useParams();

    return (
        <div>
            Informações de contato: {id}
        </div>
    )
}

export default Contatosid;