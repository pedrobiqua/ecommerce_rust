import { 
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import PrivateRoute from "./auth/PrivateRoute";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";

export function AppRouter() {

    // TODO: Fazer aqui o roteamento das páginas, aproveitar e fazer as partes publicas e privadas.
    return(
        <Router>
            <Routes>
                <PrivateRoute path="/login" Component={Login} />
                <Route path="/register" Component={SignUp} />
            </Routes>
        </Router>
    );
}