import { Routes, Route } from 'react-router-dom';



export function RoutesMain(){

    return (
        <Routes >
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            
            <Route path="*" element={<Navigate to={'/home'} />} />
        </Routes>
    );
};