import { useParams } from 'react-router';

export default function ProjetoDetails() {
    const { id } = useParams();
    return <div>{id}</div>;
}
