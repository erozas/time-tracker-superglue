import React from 'react'
import { tv } from 'tailwind-variants';
import { useSelector } from 'react-redux'
import { CircleAlert, TriangleAlert, Info } from 'lucide-react'

export default function Flash() {
  const flash = useSelector((state) => state.flash)
  const key = Object.keys(flash)[0]

  const iconMap = {
    alert: <CircleAlert />,
    notice: <Info />,
    warning: <TriangleAlert />
  }

  const flashStyles = tv({
    slots: {
      base: "w-full flex items-center space-x-2 justify-center p-4 rounded-md bg-slate-200 border border-slate-300",
      iconContainer: "text-slate-700",
      message: "text-base text-slate-700"
    },
    variants: {
      type: {
        alert: {
          base: "bg-rose-100 border-rose-200",
          iconContainer: "text-rose-800",
          message: "text-rose-800"
        },
        notice: {
          base: "bg-blue-100 border-blue-200",
          iconContainer: "text-blue-800",
          message: "text-blue-800"
        },
        warning: {
          base: "bg-yellow-100 border-yellow-200",
          iconContainer: "text-yellow-700",
          message: "text-yellow-700"
        }
      }
    }
  })

  const { base, iconContainer, message } = flashStyles({ type: key })

  if (!flash[key]) return null

  return (
    <aside className={base()}>
      <div className={iconContainer()}>
        {iconMap[key]}
      </div>
      <p className={message()}>{flash[key]}</p>
    </aside>
  )
}