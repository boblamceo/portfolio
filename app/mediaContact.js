import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const MediaContact = ({ icon, title, username, link }) => {
    return (
        <div className="bg-red-300 w-10 h-10">
            <FontAwesomeIcon icon={icon} />
        </div>
    );
};

export default MediaContact;
