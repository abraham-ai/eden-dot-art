import styled from 'styled-components'

const CreateGeneratorTypeSelectStyles = styled.div`
  > div {
    border-radius: 20px;
    margin: 20px 0 0 0;
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
  }
  #select-creation-type {
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

export { CreateGeneratorTypeSelectStyles }
