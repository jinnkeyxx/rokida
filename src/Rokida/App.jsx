import React ,{ Suspense , lazy} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  import Loading from './Other/Loading'

const Home = lazy (() => import('./Pages/Home'))
const App = () => {
    return(
        <Router>
            <Suspense fallback={<Loading/>} >
                <Switch>
                    <Route except path="/">
                        <Home/>
                    </Route>
                </Switch>
            </Suspense>
        </Router>
    )
}
export default React.memo(App)