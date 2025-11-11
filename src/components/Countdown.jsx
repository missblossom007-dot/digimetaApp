"use client"
import { useState, useEffect } from 'react'

export default function Countdown({ endDate }) {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    // Set target end time (24 hours from now if no endDate provided)
    const targetDate = endDate ? new Date(endDate) : new Date(Date.now() + 24 * 60 * 60 * 1000)
    
    const updateCountdown = () => {
      const now = new Date().getTime()
      const distance = targetDate - now

      if (distance < 0) {
        // Reset to 24 hours when countdown ends
        const newTarget = new Date(Date.now() + 24 * 60 * 60 * 1000)
        setTimeLeft({
          hours: 24,
          minutes: 0,
          seconds: 0
        })
        return
      }

      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setTimeLeft({ hours, minutes, seconds })
    }

    // Update immediately
    updateCountdown()

    // Update every second
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [endDate])

  return (
    <div className="flex items-center gap-3">
      <div className="text-center bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 min-w-[60px]">
        <div className="text-2xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
        <div className="text-xs">Jam</div>
      </div>
      <div className="text-2xl">:</div>
      <div className="text-center bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 min-w-[60px]">
        <div className="text-2xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
        <div className="text-xs">Menit</div>
      </div>
      <div className="text-2xl">:</div>
      <div className="text-center bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 min-w-[60px]">
        <div className="text-2xl font-bold animate-pulse">{String(timeLeft.seconds).padStart(2, '0')}</div>
        <div className="text-xs">Detik</div>
      </div>
    </div>
  )
}
