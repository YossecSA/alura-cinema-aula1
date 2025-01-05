import Cabecera from "components/Cabecera/Cabecera"
import Container from "components/Container"
import Pie from "components/Pie"
import FavoritoProvider from "context/Favoritos"
import { Outlet } from "react-router-dom"

function PaginaBase(){
    return(
        <main>
            <Cabecera></Cabecera>
            <FavoritoProvider>
                <Container>
                    <Outlet></Outlet>
                </Container>
            </FavoritoProvider>
            <Pie />
        </main>
    )
}
export default PaginaBase