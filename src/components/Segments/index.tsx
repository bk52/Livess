import styles from "./index.module.css"
import { useEffect, useRef } from "react"
import { ISegment } from "../../types"
import Segment from "./Segment"

const Segments: React.FC<{ segments: ISegment[] }> = ({ segments }) => {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current)
      scrollRef.current.scrollLeft = scrollRef.current?.scrollWidth
  }, [segments])

  return (
    <div ref={scrollRef} className={styles.segmentsContainer}>
      {segments.map((item, index) => (
        <Segment key={index} segment={item} />
      ))}
    </div>
  )
}

export default Segments
