import { useRouteError } from 'react-router-dom'

const Error=()=>{
    const error=useRouteError();
    return (
        <>
        <h3>{error.status}</h3>
        <h4>{error.statusText}</h4>
        </>
    )
}

export default Error
