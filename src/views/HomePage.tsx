import { ChoosePole } from "../component/ChoosePole"

//#region style
import { Button } from "@mui/material"
import {
    faNetworkWired,
    faPeopleGroup,
    faNewspaper,
    faCode,
    faPersonChalkboard,
    faFlask
} from "@fortawesome/free-solid-svg-icons"
import "./styles/HomePage.css"

export const HomePage = () => {
    return (
        <div className="HomePage-container">
            <h1>Choisissez votre pôle</h1>
            <div className="row gy-5 justify-content-md-center">
                <ChoosePole icon={faNetworkWired} name="Réseaux & systèmes" />
                <ChoosePole icon={faPeopleGroup} name="RH / Compta / Juridique / Secrétariat administratif" />
                <ChoosePole icon={faNewspaper} name="Communication & rédaction" />
                <div className="w-100"></div>
                <ChoosePole icon={faCode} name="Développement" />
                <ChoosePole icon={faPersonChalkboard} name="Commercial" />
                <ChoosePole icon={faFlask} name="Labo-recherche" />
            </div>
            <Button className="admin-button">Je suis l'administrateur</Button>
        </div>

    )
}

