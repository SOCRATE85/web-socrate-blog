import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";

import './SocialLinks.css';

const SocialLinks = () => {
    return <div className="Sociallink">
        <ul>
            <li>
                <Link to="https://www.facebook.com/Kiawitech-Academy-110164643873995/">
                    <FontAwesomeIcon icon={faFacebookF} color="red" size={"1x"} />
                </Link>
            </li>
            <li>
                <Link to="https://www.youtube.com/channel/UCDgFMOVwvkBAKvZhhC2wPSg">
                    <FontAwesomeIcon icon={faYoutube} color="red" size={"1x"} />
                </Link>
            </li>
            <li>
                <Link to="https://www.instagram.com/">
                    <FontAwesomeIcon icon={faInstagram} color="red" size={"1x"} />
                </Link>
            </li>
        </ul>
    </div>
}

export default SocialLinks;