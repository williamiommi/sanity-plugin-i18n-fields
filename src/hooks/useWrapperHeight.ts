import {RefObject, useEffect, useRef, useState} from 'react'

interface useWrapperHeightResponse {
  memberRef: RefObject<HTMLDivElement>
  wrapperHeight: string
}

const useWrapperHeight = (collapsed?: boolean): useWrapperHeightResponse => {
  const memberRef = useRef<HTMLDivElement>(null)
  const [wrapperHeight, setWrapperHeight] = useState<string>('0px')

  useEffect(() => {
    if (memberRef.current && !collapsed) {
      setWrapperHeight(`${memberRef.current.offsetHeight}px`)
    }
  }, [memberRef, collapsed])

  return {memberRef, wrapperHeight}
}

export default useWrapperHeight
