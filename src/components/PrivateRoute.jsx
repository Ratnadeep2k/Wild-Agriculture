import {useAuth} from '../contexts/AuthContext'
import {Navigate, useNavigate} from 'react-router-dom'
export const PrivateRoute =({children})=>{
    const navigate = useNavigate();
    const auth = useAuth()
    if(!auth.user){
        return (
           <Navigate to="/login" />
        )
    }
    return children;
}