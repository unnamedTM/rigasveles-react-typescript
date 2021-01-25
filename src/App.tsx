import React from 'react';


import {BrowserRouter , Switch} from "react-router-dom";
import RouteContainer from './comps/router';
import routes from './comps/routes';


function App() {


	return (
		<BrowserRouter>
			<Switch>
				{routes.map((route, index) => {
					return(
						<RouteContainer
							key={index}
							path={route.path}
							exact={route.exact}
							render={(props:any) => (
								<route.component
									{...props}
									{...route.props}
								/>
							)}
						/>
					)
				})}
			</Switch>
		</BrowserRouter>
	); 
}

export default App;
