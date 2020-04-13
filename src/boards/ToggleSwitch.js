import React, {useState} from 'react';
import {ToggleSwitch} from '../components';
import styled from 'styled-components';

function SwitchBoard() {
  const [state, setState] = useState({
    normal_1: '',
    normal_2: '',
    normal_3: '',
    slim_1: '',
    slim_2: '',
    slim_3: '',
  });

  function handleChange(e) {
    const updatedState = {
      ...state,
      [e.target.name]: e.target.value,
    };
    setState(updatedState);
  }
  return (
    <Content>
      <P>Switch - Normal</P>
      <Div>
        <ToggleSwitch
          type="checkbox"
          id="normal_1"
          value={state.normal_1}
          onClick={handleChange}
        />
        <Label for="normal_1" name="normal_1" />

        <ToggleSwitch
          type="checkbox"
          id="normal_2"
          value={state.normal_2}
          onClick={handleChange}
        />
        <Label for="normal_2" name="normal_2" />
        <ToggleSwitch
          type="checkbox"
          id="normal_3"
          value={state.normal_3}
          onClick={handleChange}
        />
        <Label for="normal_3" name="normal_3" />
      </Div>
      <P>Switch - Slim</P>
      <Div>
        <ToggleSwitch
          type="checkbox"
          id="slim_1"
          value={state.normal_3}
          onClick={handleChange}
        />
        <Label for="slim_1" name="slim_1" />
        <ToggleSwitch
          type="checkbox"
          id="slim_2"
          value={state.normal_3}
          onClick={handleChange}
        />
        <Label for="slim_2" name="slim_2" />
        <ToggleSwitch
          type="checkbox"
          id="slim_3"
          value={state.normal_3}
          onClick={handleChange}
        />
        <Label for="slim_3" name="slim_3" />
      </Div>
    </Content>
  );
}

export default SwitchBoard;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
`;

const P = styled.div`
  width: 300px;
  margin-bottom: 15px;
  padding: 10px;
  border-bottom: 2px solid #dee2e6;
  font-size: 30px;
  color: #495057;
  cursor: default;
`;

const Label = styled.label`
  cursor: pointer;
  text-indent: -9999px;
  width: 100px;
  height: ${(props) => {
    if (props.name === 'normal_1') return '50px';
    if (props.name === 'normal_2') return '50px';
    if (props.name === 'normal_3') return '50px';
    if (props.name === 'slim_1') return '25px';
    if (props.name === 'slim_2') return '25px';
    if (props.name === 'slim_3') return '25px';
  }};
  background: ${(props) => {
    if (props.name === 'normal_1') return '#dcdde1';
    if (props.name === 'normal_2') return '#dcdde1';
    if (props.name === 'normal_3') return '#dcdde1';
    if (props.name === 'slim_1') return '#a4b0be';
    if (props.name === 'slim_2') return '#a4b0be';
    if (props.name === 'slim_3') return '#a4b0be';
  }};
  display: block;
  border-radius: 100px;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    top: ${(props) => {
      if (props.name === 'normal_1') return '1.8px';
      if (props.name === 'normal_2') return '1.8px';
      if (props.name === 'normal_3') return '1.8px';
      if (props.name === 'slim_1') return '-10px';
      if (props.name === 'slim_2') return '-10px';
      if (props.name === 'slim_3') return '-10px';
    }};
    left: ${(props) => {
      if (props.name === 'normal_1') return '3px';
      if (props.name === 'normal_2') return '3px';
      if (props.name === 'normal_3') return '3px';
      if (props.name === 'slim_1') return '0px';
      if (props.name === 'slim_2') return '0px';
      if (props.name === 'slim_3') return '0px';
    }};
    width: 45px;
    height: 45px;
    background: ${(props) => {
      if (props.name === 'normal_1') return '#fff';
      if (props.name === 'normal_2') return '#fff';
      if (props.name === 'normal_3') return '#fff';
      if (props.name === 'slim_1') return '#dcdde1';
      if (props.name === 'slim_2') return '#dcdde1';
      if (props.name === 'slim_3') return '#dcdde1';
    }};
    border-radius: 45px;
    transition: 0.3s;
  }
  &:active:after {
    width: 55px;
  }
  &:hover {
    background-color: ${(props) => {
      if (props.name === 'normal_1') return '#95a5a6';
      if (props.name === 'normal_2') return '#95a5a6';
      if (props.name === 'normal_3') return '#95a5a6';
    }};
  }

  &:hover:after {
    color: red;
  }
`;