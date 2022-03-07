import React, { useEffect } from 'react'
import { Form } from 'react-bootstrap'
import { useState } from 'react'

const ThemeSelector = (props) => {
  const [themeCheck, setThemeCheck] = useState(true)
  const [colorCheck, setColorCheck] = useState(false)
  useEffect(()=>{
    if (props.darkTheme === "primary"){
      setColorCheck(true)
      setThemeCheck(false)
    } else if (props.darkTheme === "light") {
      setColorCheck(false)
      setThemeCheck(false)
    } else {
      setColorCheck(false)
      setThemeCheck(true)
    }
  },)

  return (
    <Form>
        <Form.Check inline
          className={`text-${props.textTheme}`}
          type="switch"
          id="custom-switch"
          label="Light/Dark"
          checked={themeCheck}
          onChange={props.toggleTheme}
        />
      <Form.Check inline
        className={`text-${props.textTheme}`}
        type="switch"
        id="custom-switch"
        label="Plain/Color"
        checked={colorCheck}
        onChange={props.toggleColor}
      />
    </Form>
  )
}

export default ThemeSelector