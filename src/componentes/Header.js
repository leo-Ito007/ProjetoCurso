import { Link } from "react-router-dom"

function Header() {

    return (
        <header>
            <div class="headerTopo">
                <h1>Curso Técinco em Desenvolvimento de Sistema</h1>
            </div>
            <nav class="headerMenu">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/sobreCurso">Sobre Curso</Link></li>
                    <li><Link to="/disciplinasCurriculares">Disciplinas Curriculares</Link></li>
                    <li><Link to="/disciplinasTecnicas">Disciplinas Tecnicas</Link></li>
                    <li><Link to="/equipe">Equipe</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;