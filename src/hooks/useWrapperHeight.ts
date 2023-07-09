import {RefObject, useEffect, useRef, useState} from 'react'

interface useWrapperHeightResponse {
  memberRef: RefObject<HTMLDivElement>
  wrapperHeight: string
}

const useWrapperHeight = (): useWrapperHeightResponse => {
  const memberRef = useRef<HTMLDivElement>(null)
  const [wrapperHeight, setWrapperHeight] = useState<string>('0px')

  useEffect(() => {
    if (memberRef.current) {
      setWrapperHeight(`${memberRef.current.offsetHeight}px`)
    }
  }, [memberRef])

  return {memberRef, wrapperHeight}
}

export default useWrapperHeight
