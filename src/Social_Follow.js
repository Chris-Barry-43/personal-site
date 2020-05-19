import React from "react";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faGithub,
    faLinkedin

} from "@fortawesome/free-brands-svg-icons"

const Socialwrapper = styled.div`
    display: flex;
`
const Github = styled.a`
    padding-left: 1rem;
    color: #FFFFFF;
`
const Facebook = styled.a`
    padding-left: 1rem;
    color: #FFFFFF;
`
const Linkedin = styled.a`
    padding-left: 1rem;
    color: #FFFFFF;
`

const SocialFollow = () => {
    return (
        <Socialwrapper>

            <Github href="https://github.com/Chris-Barry-43" target="_blank">
                <FontAwesomeIcon icon={faGithub} size="2x"/>
            </Github>

            <Linkedin href="https://www.linkedin.com/in/chris-barry-ba1b25156/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} size = "2x"/>
            </Linkedin>

            <Facebook href="https://www.facebook.com/chris.barry.9440234" target="_blank">
                <FontAwesomeIcon icon={faFacebook} size = "2x"/>
            </Facebook>
        </Socialwrapper>
    )
}

export default SocialFollow