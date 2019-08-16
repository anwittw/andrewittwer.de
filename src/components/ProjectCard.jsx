import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGitSquare } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

export default function ProjectCard(props) {
  return (
    <div>
      <Card>
        {props.project.img && (
          <CardImg
            top
            className="ProjectCard__Img"
            src={props.project.img}
            alt="Card image cap"
          />
        )}
        <CardBody>
          <CardTitle className="mb-3 font-weight-bold">
            {props.project.name}
          </CardTitle>
          {props.project.subtitle && (
            <CardSubtitle className="text-muted mb-3">
              {props.project.subtitle}
            </CardSubtitle>
          )}
          <CardText>{props.project.summary}</CardText>
          <div className="ProjectCard__Social">
            {props.project.gitname && (
              <span className="ProjectCard__Social__Icon">
                <a
                  className="ProjectCard__Social__a"
                  rel="noopener noreferrer"
                  href={`https://github.com/anwittw/${props.project.gitname}`}
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGitSquare} />
                </a>
              </span>
            )}
            {props.project.url && (
              <span className="ProjectCard__Social__Icon">
                <a
                  className="ProjectCard__Social__a"
                  rel="noopener noreferrer"
                  href={`${props.project.url}`}
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faPaperPlane} />
                </a>
              </span>
            )}
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
