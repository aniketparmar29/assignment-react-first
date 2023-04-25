import { Route,Routes } from "react-router-dom"
import HomePage from "./Home"
import Navbar from "../Components/Navbar"
import ContactPage from "./ContactPage"
import TaskPage from "./Task"
const MainRotes = () => {
 
    
  return (
    <div>
        <Navbar/>
        <Routes>

        <Route path="/" element={<HomePage />}></Route>
        <Route path="/contact" element={<ContactPage  />}></Route>
        <Route path="/task" element={<TaskPage/>}></Route>

        </Routes>
    </div>
  )
}

export default MainRotes