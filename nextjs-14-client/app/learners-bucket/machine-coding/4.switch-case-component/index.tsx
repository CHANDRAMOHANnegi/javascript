import React, { ReactNode, Children, ReactDOM, ReactElement } from 'react'

const CustomCase = ({ children }: { children: ReactNode }) => <>{children}</>
const CustomSwitch = ({ children, value }: { children: ReactNode, value: any }) => {

  const cases: any = []
  const defaults: any = []

  Children.forEach(children, (e: any) => {
    if (e?.type?.name === "CustomCase") {
      if (typeof e.props.value === "function") {
        if (e.props.value(value)) {
          cases.push(e)
        }
      } else if (value === e.props.value) {
        cases.push(e)
      }
    } else {
      defaults.push(e)
    }
  })

  if (cases.length > 0) {
    return cases
  } else {
    return defaults
  }

  return cases
}

export const index = () => {
  return (
    <div>index</div>
  )
}
