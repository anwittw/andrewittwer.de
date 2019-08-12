import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGitSquare,
  faLinkedin,
  faXingSquare
} from "@fortawesome/free-brands-svg-icons";

export default function Social() {
  return (
    <div className="Home__Social">
      <span className="Home__Social__Label">Social Profiles</span>
      <span className="Home__Social__Icon">
        <a
          className="Home__Social__a"
          rel="noopener noreferrer"
          href="https://github.com/anwittw"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGitSquare} />
        </a>
      </span>
      <span className="Home__Social__Icon">
        <a
          className="Home__Social__a"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/anwittw/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </span>
      <span className="Home__Social__Icon">
        <a
          className="Home__Social__a"
          rel="noopener noreferrer"
          href="https://www.xing.com/profile/Andre_Wittwer5"
          target="_blank"
        >
          <FontAwesomeIcon icon={faXingSquare} />
        </a>
      </span>
    </div>
  );
}
