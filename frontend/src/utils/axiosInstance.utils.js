import axios from 'axios'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext.jsx'

const useApi = () => {

    const { accessToken, setAccessToken, setUser } = useContext(AuthContext)

    const api = axios.create({
        baseURL: import.meta.env.VITE_BACKEND_URL,
        withCredentials: true
    })

    api.interceptors.request.use(config => {
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`
        }

        return config;
    }, (error) => {
        return Promise.reject(error)
    })

    api.interceptors.response.use(
        response => response,
        async (error) => {

            if (error.response && error.response.status === 401 ) {
                
                try {
                    
                    const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/auth/refresh`, {}, { withCredentials: true });

                    setAccessToken(res.data.accessToken);
                    return api(error.config)
                } catch (error) {
                    setAccessToken(null);
                    setUser(null);
                    return Promise.reject(refreshError)
                }
            }
            return Promise.reject(error)
        }
    )

    return api;
}

export default useApi;