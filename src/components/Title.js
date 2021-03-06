
import React from 'react'

import styled from 'styled-components'

function Title({ title, span }) {
    return (
        <TitleStyled>
            <h2>{title} <span>{span}</span></h2>
        </TitleStyled>
    )
}

const TitleStyled = styled.div`
    position: relative;

    h2 {
        color: var(--white-color);
        font-size: 2em;
        font-weight: 600;
        text-transform: uppercase;
        position: relative;
        &::before {
                content: "";
                position: absolute;
                border-radius: 20px;
                left: 4px;
                bottom: 0;
                width: 15%;
                height: .1em;
                background-color: var(--background-light-color-2);
        }
        &::after {
                content: "";
                position: absolute;
                border-radius: 20px;
                left: 4px;
                bottom: 0;
                width: 10%;
                height: .1em;
                background-color: var(--primary-color);
        }
        span {
            font-weight: 700;
            color: rgba(25,29,43,.44);
            font-size: 1.5em;
            position: absolute;
            left: 0;
            top: 15%;
            z-index: -1;
        }
    }
`

export default Title;
