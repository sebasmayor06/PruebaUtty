// import { Container } from "@mui/material"
import { Route, Routes } from "react-router-dom"
import CardHome from "./components/CardHome"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Perfil from "./page/Perfil"

export default function App() {
  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<CardHome/>}></Route>
      <Route path="/Perfil" element={<Perfil/>}></Route>
    </Routes>
    <Footer></Footer>
    </>
  )
}