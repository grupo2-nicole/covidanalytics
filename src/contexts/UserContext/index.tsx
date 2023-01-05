import { createContext } from "react";
import { SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom'

import { api } from "../../services/api";
import { iContextProviderProps, iLoginData, iRegisterData } from "./types";

export const UserContext = createContext({})

export function UserContextProvider({ children }: iContextProviderProps){
    const navigate = useNavigate()

    async function submitRegisterFunction(data: iRegisterData){
        const formatedData = {
            email: data.email,
            name: data.name,
            password: data.password,
            state: data.state,
            img: data.img,
        }

        try{
            await api.post('register', formatedData)

            toast.success('Usuário cadastrado com sucesso!', { position: "bottom-right", autoClose: 2500, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light", })
            navigate('/login')
        } catch(error) {
            console.error(error)
            toast.error(`Algo deu errado com a sua requisição, Tente mais tarde`, {position: "bottom-right", autoClose: 2500, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light", });
        }

    }

    async function submitLoginFunction(data: iLoginData){

        try{
            const response = await api.post('login', data)
            
            toast.success('Login realizado com sucesso!', { position: "bottom-right", autoClose: 2500, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light", })

            if(response.data.accessToken){
                localStorage.setItem('@TOKEN:', response.data.accessToken)
                navigate('/dashboard')
            } else {
                toast.error(response.data, {position: "bottom-right", autoClose: 2500, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light", });
            }

        } catch(error) {
            console.error(error)
            toast.error(`Algo deu errado com a sua requisição, Tente mais tarde`, {position: "bottom-right", autoClose: 2500, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light", });
        }

    }

    return (
        <UserContext.Provider value={{submitRegisterFunction, submitLoginFunction}} >
            { children }
        </UserContext.Provider>
    )
}