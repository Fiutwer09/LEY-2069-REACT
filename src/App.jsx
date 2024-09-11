import { Route, Routes } from "react-router-dom"
import { ExamenInputs } from "./pages/ExamenInputs/ExamenInputs"
import { NotFound } from   "./pages/NotFound/NotFound"
import { ContactUs } from "./pages/ContactUs/ContactUs"
import { OurValues } from "./pages/OurValues/OurValues"
// import { Game } from "./pages/Game/Game"

export function App() {
  return (
    <>
    <Routes>
      <Route path = '/' element = {<ExamenInputs/>}/>
      <Route path = '/Inicio' element = {<OurValues/>}/>
      <Route path = '/ContacUs' element = {<ContactUs/>}/>
      {/* <Route path = '/Game' element = {<Game/>}/> */}
      <Route path = '*' element = {<NotFound/>}/>
      </Routes>
    </>
  )
}

