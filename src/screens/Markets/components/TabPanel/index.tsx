import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  value: number
  index: number
}

const TabPanel = ({ children, value, index }: Props) => {
  const isTabVisible = value === index

  return (
    <div role='tabpanel' hidden={!isTabVisible}>
      {isTabVisible && children}
    </div>
  )
}

export default TabPanel
