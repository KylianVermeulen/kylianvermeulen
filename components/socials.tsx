import { ReactElement } from "react";

import styled from "styled-components";

import {
  faSnapchatGhost,
  faGithub,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { Icon } from "./icon";

export function SocialLinks(props: {
  size?: number;
  small?: boolean;
}): ReactElement {
  return (
    <Icons small={props.small}>
      <IconWrapped small={props.small}>
        <Icon
          size={props.small ? 15 : 25}
          icon={faGithub}
          highlight="#333333"
          link="https://github.com/KylianVermeulen"
        />
      </IconWrapped>
      <IconWrapped small={props.small}>
        <Icon
          size={props.small ? 15 : 25}
          icon={faSnapchatGhost}
          highlight="#FFFC00"
          link="https://www.snapchat.com/add/xyclusgg"
        />
      </IconWrapped>
      <IconWrapped small={props.small}>
        <Icon
          size={props.small ? 15 : 25}
          icon={faSpotify}
          highlight="#1DB954"
          link="https://open.spotify.com/playlist/37i9dQZEVXcVYuqqdNP33Z"
        />
      </IconWrapped>
      <IconWrapped small={props.small} last>
        <Icon
          size={props.small ? 15 : 25}
          icon={faEnvelope}
          highlight="#1B1B1B"
          link="mailto:email@kylianvermeulen.com"
        />
      </IconWrapped>
    </Icons>
  );
}

const Icons = styled.div<{ small: boolean }>`
  margin-top: ${(props) => (!props.small ? "50px" : "0px")};
  display: flex;
  flex-direction: row;
  float: right;
  align-self: flex-end;
`;

const IconWrapped = styled.div<{ small?: boolean; last?: boolean }>`
  padding-left: ${(props) => (!props.small ? "7px" : "4px")};
  padding-right: ${(props) =>
    !props.last ? (!props.small ? "7px" : "4px") : "0px"};
  opacity: ${(props) => (!props.small ? "100%" : "50%")};
`;
