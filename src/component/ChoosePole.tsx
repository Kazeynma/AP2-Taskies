import { Link } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./style/ChoosePole.css"

export const ChoosePole = (props : any) => {
    return (
        <div className="col-3">
            <Link to='/login' className="pole-container">
                <div className="icon-container">
                    <FontAwesomeIcon icon={props.icon} className="icon" />
                </div>
                <span>{props.name}</span>
            </Link>
        </div>
    )
}