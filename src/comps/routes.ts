import IRoute from './route';

import '../pages/rigas-documentary';
import RigasYoutube from '../pages/rigas-documentary';
import '../pages/rigas-books';
import RigasBooks from '../pages/rigas-books';
import '../pages/404';
import page404 from '../pages/404';
import '../pages/home';
import Home from '../pages/home';
import '../pages/sources';
import RigasSources from '../pages/sources';
const routes: IRoute[] = [
    {
      path: "/",
      name: "Home Page",
      component: Home,
      exact: true  
    },
    {
      path: "/youtube",
      name: "Rigas Documentary",
      component: RigasYoutube,
      exact: true  
    },
    {
      path: "/rigas-books", 
      name: "Rigas Books",
      component: RigasBooks,
      exact: true 
    },
    {
      path: "/sources", 
      name: "Rigas Sources",
      component: RigasSources,
      exact: true 
    },
     {
      path: "",
      name: "Error 404",
      component: page404,
      exact: false 
    },
]

export default routes;