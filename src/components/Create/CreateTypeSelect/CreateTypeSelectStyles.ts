import styled from 'styled-components'

const CreateTypeSelectStyles = styled.section`
  > div {
    border: 1px solid #8c7cf0;
    border-radius: 20px;
    margin: 0 10px;
  }
  #select-creation-type {
    padding: 0 0 0 10px;
    margin: 0;
    display: flex;
    align-items: center;
    font-weight: 600;
    justify-content: flex-start;
    color: #8c7cf0;
  }

  #select-creation-type > div {
    padding: 0 0 0 10px;
    display: flex;
    align-items: center;
  }

  div > div > svg {
    height: 100%;
    position: relative;
    color: #8c7cf0;
    margin: 0 0 0 8px;
  }
`

export { CreateTypeSelectStyles }
