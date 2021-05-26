import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import db from '../firebase';

function Detail() {
    const { id } = useParams();
    const [ movie, setMovie ] = useState({})

    useEffect(() => {
        db.collection("movies")
        .doc(id)
        .get()
        .then((doc) => {
            if(doc.exists) {
                setMovie(doc.data());
            } else {
                console.log('failed')
                //redirect to homepage
            }
        })
    }, [])

    return (
        <Container>
            <Background>
                <img src={movie.backgroundImg}/>
            </Background>
            <ImageTitle>
                <img src={movie.titleImg}/>
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png" />
                    <span>Play</span>
                </PlayButton>
                <TrailerButton>
                    <img src="/images/play-icon-white.png" />
                    <span>Trailer</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="./images/group-icon.png"/>
                </GroupWatchButton>
            </Controls>
            <Subtitle>
                {movie.subTitle}
            </Subtitle>
            <Description>
                {movie.description}
            </Description>
        </Container>
    )
}

export default Detail


const Container = styled.div `
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`

const Background = styled.div `
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const ImageTitle = styled.div `
    margin-top: 100px;
    height: 30vh;
    width: 35vw;
    min-height: 270px;
    min-width: 300px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const Controls = styled.div `
    display: flex;
    flex-direction: columns;
    align-items: center;
    margin-top: 30px;
`

const ButtonBase = styled.button `
    border-radius: 4px;
    font-size: 15px;
    padding: 0px 24px;
    margin-right: 22px;
    display: flex;
    align-items: center;
    height: 56px;
    background: rbg(249, 249, 249);
    border: none;
    letter-spacing: 1.8px;
    cursor: pointer;
    text-transform: uppercase;

    &:hover {
        background: rgb(198, 198, 198);
    }
`

const PlayButton = styled(ButtonBase) `

`

const TrailerButton = styled(ButtonBase) `
    background: rgba(0, 0, 0, 0.3);
    border: 1x solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);   
`

const AddButton = styled.button `
    width 44px;
    height: 44px;display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;
    border: 2px solid white;
    color: white;
    background-color: rgb(0, 0, 0, 0.5);
    margin-right: 15px;

    span {
        font-size: 30px;
    }
`

const GroupWatchButton = styled(AddButton) `
    background: rgb(0, 0, 0);
`

const Subtitle = styled.div `
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`

const Description = styled.div `
    line-height: 1.4;   
    color: rgb(249, 249, 249);
    font-size: 20px;
    min-height: 20px;
    margin-top: 16px;
`