import { Nav, NavOpt } from './utils';
import DobleOption from './components/dobleOption';

function DetailNavbar() {
    return (
        <Nav>
            <NavOpt>
                {/** Here we could put this in a file, and use map to iterate (like home opts) */}

                <DobleOption smallText="prueba" normalText="Teseo"></DobleOption>
                <DobleOption smallText="prueba" normalText="Iearus"></DobleOption>
                <DobleOption smallText="prueba" normalText="Perseo"></DobleOption>
                <DobleOption smallText="prueba" normalText="Jason"></DobleOption>
                <DobleOption smallText="prueba" normalText="Ulises"></DobleOption>
            </NavOpt>
        </Nav>
    )
}

export default DetailNavbar;