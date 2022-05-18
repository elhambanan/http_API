import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import FullData from "./pages/FullDataPage";
import MainComp from "./components/MainComp";


const routes = [
    {path: "/", element:<HomePage/>},
    {path: "/:id", element:<FullData />}, 
    {path: "/?page=:id", element:<MainComp />}, 
    {path: "*", element:<NotFound/>},
    

]
 export default routes;