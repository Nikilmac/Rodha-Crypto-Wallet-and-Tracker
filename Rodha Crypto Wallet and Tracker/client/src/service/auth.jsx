import { apiConnector } from "./Apiconnector";
import { toast } from "react-hot-toast"


import { setLoading,setToken } from '../Slice/AuthSlice'




export function login(email, password, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));

    try {
      const response = await apiConnector("POST", "http://localhost:8000/api/User/login", {
        email,
        password,
      });



      if (!response.data || !response.data.token) {
        throw new Error(response.data?.message || "Login failed");
      }

      // Dispatch successful login actions
      toast.success("Login Successful");
      dispatch(setToken(response.data.token));

      // Store user data and token in localStorage
      localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem("token", JSON.stringify(response.data.token));  // No need to stringify token if it's a string

      // Navigate to home page after login
      navigate("/");
      
    } catch (error) {
      console.log("LOGIN API ERROR............", error);
      toast.error("Could Not Login");
      navigate('/Login');
    } finally {
      dispatch(setLoading(false));
      toast.dismiss(toastId);
    }
  };
}
  export function logout() {
    return (dispatch) => {
      dispatch(setToken(null))
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      toast.success("Logged Out")
     
    }
  }