/* eslint-disable react/no-array-index-key */
import { useState } from 'react';
import styled from 'styled-components';
import mockdata from '../../data.json';

const Select = styled.select`
  width: 300px;
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: 1px solid blue;
  margin-left: auto;
  display: flex;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

const Wrapper = styled.section`
  padding: 4em;
`;

const departments = 'departments';
const projectName = 'project_name';
const date = 'date';
const name = 'member_name';

const title = {
  [departments]: 'Departments',
  [projectName]: 'Project Name',
  [date]: 'Date',
  [name]: 'Name',
};

function GroupedTable() {
  const [selectedOption, setSelectedOption] = useState(departments);

  const selectedOptionData = [...new Set(mockdata.map((item) => item[selectedOption]))];

  const derivedFinancialCalculation = selectedOptionData.map((eachOption) => ({
    [eachOption]: mockdata
      .filter((e) => e[selectedOption] === eachOption)
      .map((e) => e.amount),
  }));

  const addValues = (values) => {
    const pureDigits = values.map((e: string) => parseFloat(e.replace(/(^\$|,)/g, '')));
    return pureDigits.reduce((partialSum: any, a: any) => partialSum + a, 0);
  };

  return (
    <Wrapper>
      <Select
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <option value="" hidden disabled>
          Type
        </option>
        <option value={departments}>Departments</option>
        <option value={projectName}>Project Name</option>
        <option value={date}>Date</option>
        <option value={name}>Name</option>
      </Select>
      <table className="table-resp">
        <thead>
          <tr>
            <th>{title[selectedOption]}</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {derivedFinancialCalculation.map((eachOption, index) => (
            <tr key={index + 1}>
              {' '}
              <td>{Object.keys(eachOption)[0]}</td>
              {' '}
              <td>{ addValues(Object.values(eachOption)[0])}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Wrapper>
  );
}

export default GroupedTable;
