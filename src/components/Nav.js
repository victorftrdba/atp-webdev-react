import {Link} from "react-router-dom";
import {useNavigate} from "react-router";

function Nav ()  {
    const navigate = useNavigate()

    const logout = () => {
        localStorage.clear()
        navigate('/login')
    }

    return <>
        <div className='container mt-3'>
            <div className='row'>
                <div className='col d-flex justify-content-end align-items-center'>
                    <Link className='me-3' to={'/main'}>Página Principal</Link>
                    {localStorage.getItem('authenticated') !== 'true' && <>
                        <Link className='me-3' to={'/login'}>Login</Link>
                        <Link className='me-3' to={'/register'}>Registro</Link>
                    </>}
                    {localStorage.getItem('authenticated') === 'true' && <>
                        <button className={'btn btn-primary rounded-1'} onClick={logout}><small>Logout</small></button>
                    </>}
                </div>
            </div>
        </div>
    </>
}

export default Nav