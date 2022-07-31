import { Dispatch, MouseEventHandler, SetStateAction, useState } from 'react'
import { ReactSetState } from '~/types/react'

type EventCallback = MouseEventHandler<HTMLElement> | undefined

export interface UseHoverReturn {
  isHovered: boolean
  setIsHovered: ReactSetState<boolean>
  onMouseEnter: EventCallback
  onMouseLeave: EventCallback
}

export const useHover = (): UseHoverReturn => {
  const [isHovered, setIsHovered] = useState(false)

  const onMouseEnter: EventCallback = () => {
    setIsHovered(true)
  }

  const onMouseLeave: EventCallback = () => {
    setIsHovered(false)
  }

  return { isHovered, setIsHovered, onMouseEnter, onMouseLeave }
}
