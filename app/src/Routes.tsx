import { 
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

export function AppRouter() {

    // TODO: Fazer aqui o roteamento das páginas
    return(
        <Router>
            <Routes>
                <Route path="/" element={<h1>Home</h1>} />
                <Route path="/about" element={<h1>About</h1>} />
            </Routes>
        </Router>
    );
}