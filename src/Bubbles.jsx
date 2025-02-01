import { useState, useEffect } from "react"
import "./bubbles.css"

const BubbleBackground = ({ bubbleCount = 50, minSize = 20, maxSize = 80, minDuration = 10, maxDuration = 20 }) => {
  const [bubbles, setBubbles] = useState([])

  const colors = [
    "rgba(255, 0, 0, 0.3)", // Red
    "rgba(0, 255, 0, 0.3)", // Green
    "rgba(0, 0, 255, 0.3)", // Blue
    "rgba(255, 255, 0, 0.3)", // Yellow
    "rgba(255, 0, 255, 0.3)", // Magenta
    "rgba(0, 255, 255, 0.3)", // Cyan
  ]

  useEffect(() => {
    const newBubbles = []
    for (let i = 0; i < bubbleCount; i++) {
      newBubbles.push({
        id: i,
        size: Math.random() * (maxSize - minSize) + minSize,
        duration: Math.random() * (maxDuration - minDuration) + minDuration,
        left: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }
    setBubbles(newBubbles)
  }, [bubbleCount, minSize, maxSize, minDuration, maxDuration])

  return (
    <div className="bubble-container">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="bubble"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
            animationDuration: `${bubble.duration}s`,
            backgroundColor: bubble.color,
            bottom: "-10%",
          }}
        />
      ))}
    </div>
  )
}

export default BubbleBackground

