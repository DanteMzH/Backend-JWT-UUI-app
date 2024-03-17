import { Navigate, useNavigate } from "react-router-dom";
import { loginUser } from "../service/authService";
import { useDispatch, useSelector } from "react-redux";
import { onLogin, onLogout } from "../../store/slices/auth/authSlice";


export const useAuth = () => {

    const dispatch = useDispatch();
    const { user, isAuth } = useSelector(state => state.auth);

    const navigate = useNavigate();


    const handlerLogin = async ({ username, password }) => {

        try {
            const response = await loginUser({ username, password });
            const token = response.data.token;
            const claims = JSON.parse(window.atob(token.split(".")[1]));
            const user = { username: claims.sub }
            dispatch(onLogin({ objeto:user}));
            
            console.log(username, password);
            
            sessionStorage.setItem('login', JSON.stringify({
                isAuth: true,
                user,
            }));

            sessionStorage.setItem('token', `Bearer ${token}`);
            navigate('/notes');

        } catch (error) {
            if (error.response?.status == 401) {
                console.log("401");
            } else if (error.response?.status == 403) {
                console.log("403");            
            } 
                else {
                throw error;
            }
        }
    }  
    const handlerLogout = () => {
        dispatch(onLogout());
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('login');
        sessionStorage.clear();
        console.log("Ya haz salido de la pagina");
    }


    return {
        login: {
            user,
            isAuth,
        },
        handlerLogin,
        handlerLogout,
    }
}
