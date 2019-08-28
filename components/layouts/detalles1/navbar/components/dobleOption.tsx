import styled from "styled-components";


const OptContainer = styled.div`
    cursor: pointer;
    margin: 0 85px;
    display: flex;
    flex-flow: column;
     
    small {
        font-family: "Montserrat";
        margin-bottom: 10px;
        color: ${({ theme }) => theme.colors.gray};
    }    
`

interface IProps {
    smallText?: string;
    normalText?: string;    
}


function DobleOption({ smallText, normalText }: IProps) {

    return (
        <OptContainer >
            <small>
                {smallText}
            </small>
            <span>
                {normalText}
            </span>
        </OptContainer>
    )
}

export default DobleOption;