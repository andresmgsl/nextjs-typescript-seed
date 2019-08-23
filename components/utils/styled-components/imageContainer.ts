import styled from 'styled-components';

// TODO need to be extend, accept width/height by input
const ImageContainer = styled.div.attrs(
    {
        label: "image-container"
    }
)`
    position: relative;

    img {
        position: relative;
        width: 100%;
    }
`

export { ImageContainer };