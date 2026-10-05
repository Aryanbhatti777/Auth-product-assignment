import React, { useContext, useEffect } from 'react'

import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import useApi from '../utils/axiosInstance.utils';
import { AuthContext } from '../context/AuthContext';


const Home = () => {

  const api = useApi();
  const { user, loading, setUser, setLoading } = useContext(AuthContext);
  
  const getProfile = async () => {

    try {
      setLoading(true);
      const res = await api.get("/api/auth/getMe", { withCredentials: true });
      setUser(res.data.user)
    } catch (error) {
      console.log(error)
      setUser(null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getProfile();
  },[])

  if (loading && !user) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="h-10 w-10 mx-auto border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-600">Loading your account...</p>
        </div>
      </div>
    )
  }

  return (
      <>
      <Navbar />
      <Outlet/>
      </>
  )
}

export default Home;