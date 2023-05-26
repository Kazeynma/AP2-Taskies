import { Link } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { Tooltip, TextField, Button } from "@mui/material"

export const LoginAdmin = () => {
    return (
        <div className="page-container row container-fluid">
            <div className="sidebar col-4">
                <div className="title">
                    <h1>Taskies</h1>
                    <p>Organisation et gestion de tâches</p>
                </div>
                <p className="helperText-sidebar">Si jamais vous n'avez pas de compte adressez vous directement à l'administrateur du site</p>
                <p>GSB</p>
            </div>
            <div className="main-content col">
                <Link to="/">
                    <Tooltip placement="right" title="Sélectionner un autre pôle" arrow>
                        <FontAwesomeIcon icon={faArrowLeft} className="arrow-return" />
                    </Tooltip>
                </Link>
                <form className="form-container">
                    <div className="input">
                        <p>Utilisateur</p>
                        <TextField variant="outlined" fullWidth />
                    </div>

                    <div className="input">
                        <p>Mot de passe</p>
                        <TextField variant="outlined" fullWidth />
                    </div>

                    <Button variant="contained">Se connecter</Button>
                    <p>Mot de passe oublié ?</p>
                </form>

            </div>
        </div>
    )
}