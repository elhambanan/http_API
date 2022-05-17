import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import FullData from "./pages/FullDataPage";


const routes = [
    {path: "/", element:<HomePage/>},
    {path: "/:id", element:<FullData />}, 
    {path: "*", element:<NotFound/>},

]
 export default routes;