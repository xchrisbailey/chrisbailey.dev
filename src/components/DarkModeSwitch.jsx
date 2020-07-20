import React from 'react'
import styled from 'styled-components'

const DarkModeSwitch = ({ setTheme, theme }) => {
  return (
    <SwitchContainer>
      <Switch htmlFor="checkbox" title="change color scheme to dark mode">
        <input
          type="checkbox"
          id="checkbox"
          onClick={() =>
            theme === 'light' ? setTheme('dark') : setTheme('light')
          }
          defaultChecked={theme === 'light'}
        />
        <div className="slider round" />
        <div className="toggle-moon">
          <span role="img" aria-label="moon emoji">
            🌙
          </span>
        </div>
        <div className="toggle-sun">
          <span role="img" aria-label="sun emoji">
            ☀️
          </span>
        </div>
      </Switch>
    </SwitchContainer>
  )
}

const SwitchContainer = styled.div`
  transform: scale(0.65);
  margin: 0;
`
const Switch = styled.label`
  display: flex;
  height: 36px;
  position: relative;
  width: 70px;
  input {
    display: none;
  }
  .slider {
    content: '';
    background-color: #fff;
    border: 1px solid #000;
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: 0.4s;
  }

  .slider:before {
    background-color: #333;
    border: 1px solid #000;
    bottom: 3px;
    content: '';
    height: 26px;
    left: 4px;
    position: absolute;
    transition: 0.4s;
    width: 26px;
    z-index: 421;
  }

  input:checked + .slider {
    background-color: #101211;
  }

  input:checked + .slider:before {
    transform: translateX(34px);
    border-color: #cfcfcf;
    background-color: #efefef;
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }

  .toggle-moon,
  .toggle-sun {
    width: 50%;
    text-align: center;
    padding: 0.25em;
    position: relative;
    z-index: 420;
  }
`

export default DarkModeSwitch
