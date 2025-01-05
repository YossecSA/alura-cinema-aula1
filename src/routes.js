import Favoritos from "pages/favoritos";
import Cabecera from "components/Cabecera/Cabecera";
import Pie from "components/Pie";
import Container from "components/Container";
import FavoritoProvider from "context/Favoritos";

const { default: Inicio } = require("pages/Inicio");
const { BrowserRouter, Routes, Route } = require("react-router-dom");

function AppRoutes() {
    return (
        <BrowserRouter>
            <Cabecera></Cabecera>
            <Container>
                <FavoritoProvider>
                    <Routes>
                        <Route path="/" element={<Inicio />}></Route>
                        <Route
                            path="/favoritos"
                            element={<Favoritos />}
                        ></Route>
                    </Routes>
                </FavoritoProvider>
            </Container>
            <Pie></Pie>
        </BrowserRouter>
    );
}

export default AppRoutes;
