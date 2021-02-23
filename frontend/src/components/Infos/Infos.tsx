import React, { FC } from 'react'
import styled from 'styled-components'

interface InfosPropsInterface {
  data: object;
}


const renderData = (data:object) => {
  const keys = Object.keys(data)
  return keys.map((key, index) => {
    if(key !== 'content') {
      return (
        <tr key={index}>
          <th>{key.toUpperCase()}</th>
          <td>{listElement(data[key])}</td>
        </tr>
      )
    }else {
      return '';
    }
  })
}

const listElement = (data: String[]) => {
  if(!Array.isArray(data)) {
    return data
  }
  return(
    <ul>
      {data.map(({name}:any, index) => {
        return (
          <li key={index}>
            {name}
          </li>
        )
      })}
    </ul>
  )
}

const Infos: FC<InfosPropsInterface> = ({ data }) => {
  return (
    <StyledTable>
      <tbody>
        {renderData(data)}
      </tbody>
    </StyledTable>
  )
}

const StyledTable = styled.table`
  th, td {
    text-align: left;
    vertical-align: top;
  }
  th{
    padding: 0px 15px 15px 0px;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`

export default Infos
