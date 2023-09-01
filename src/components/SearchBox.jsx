import styled from "styled-components";

const StyledSection = styled.section`
   display: flex; 
   flex-direction: column;
   justify-content: center;
   align-items: center;
    
`
const StyledDiv = styled.div`
    background: white;
    width: 920px;
    height: 202px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0 25px;

`

const SearchBox = () =>{
    return(
        <StyledSection>
            <h2 className="searchTitle">Søg efter din drømmebolig</h2>
            <StyledDiv>
                <h4 className="search-head">Søg blandt 158 boliger til salg i 74 butikker </h4>
                <p>Hvad skal din næste bolig indeholde</p>
                <form action="">
                    <input type="search" name="" className="input_Box" placeholder="Søg på fx. glaskeramisk komfur, bryggers, kælder eller lignende" />
                    <input type="button" value="Søg" className="search_Button"/>
                </form>
            </StyledDiv>
           
        </StyledSection>
    )

}

export default SearchBox;