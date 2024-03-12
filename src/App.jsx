import {Container} from "@mui/material";
import {FristPage} from "./component/FristPage.jsx";
import {Route, Routes} from "react-router-dom";
import {ListNav} from "./component/ListNav.jsx";
import {Supplier} from "./controller/Supplier.jsx";


function App() {
  return (
   <Container>


       <ListNav/>
       <Routes>
           <Route path='/supplier' element={<Supplier/>}></Route>
       </Routes>
   </Container>

  )
}
export default App
