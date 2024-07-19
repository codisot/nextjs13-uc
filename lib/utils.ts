import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn (...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

export const getTimestamp = (createdAt: Date | string): string => {
  /* console.log('Received createdAt:', createdAt) */
  const now = new Date()
  let date: Date

  if (typeof createdAt === 'string') {
    date = new Date(createdAt)
    /* console.log('Converted string to Date:', date) */ // Mensaje de depuración
  } else if (createdAt instanceof Date) {
    date = createdAt
    /* console.log('Received Date instance:', date) */ // Mensaje de depuración
  } else if (createdAt._seconds) {
    // Si `createdAt` es un objeto con una propiedad `_seconds` (como un timestamp de Firestore)
    date = new Date(createdAt._seconds * 1000)
    /* console.log('Converted Firestore timestamp to Date:', date) */ // Mensaje de depuración
  } else {
    console.error('Invalid type for createdAt:', typeof createdAt, createdAt) // Mensaje de error con detalles del objeto
    return 'Invalid date'
  }

  if (isNaN(date.getTime())) {
    console.error('Date is invalid:', date) // Mensaje de error
    return 'Invalid date'
  }
  const timeDifference = now.getTime() - date.getTime()

  const minute = 60 * 1000
  const hour = 60 * minute
  const day = 24 * hour
  const week = 7 * day
  const month = 30 * day
  const year = 365 * day

  if (timeDifference < minute) {
    const seconds = Math.floor(timeDifference / 1000)
    return `${seconds} ${seconds === 1 ? 'second' : 'seconds'} ago`
  } else if (timeDifference < hour) {
    const minutes = Math.floor(timeDifference / minute)
    return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`
  } else if (timeDifference < day) {
    const hours = Math.floor(timeDifference / hour)
    return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`
  } else if (timeDifference < week) {
    const days = Math.floor(timeDifference / day)
    return `${days} ${days === 1 ? 'day' : 'days'} ago`
  } else if (timeDifference < month) {
    const weeks = Math.floor(timeDifference / week)
    return `${weeks} ${weeks === 1 ? 'week' : 'weeks'} ago`
  } else if (timeDifference < year) {
    const months = Math.floor(timeDifference / month)
    return `${months} ${months === 1 ? 'month' : 'months'} ago`
  } else {
    const years = Math.floor(timeDifference / year)
    return `${years} ${years === 1 ? 'year' : 'years'} ago`
  }
}

export const formatAndDivideNumber = (num: number): string => {
  if (num >= 1000000) {
    const formattedNum = (num / 1000000).toFixed(1)
    return `${formattedNum}M`
  } else if (num >= 1000) {
    const formattedNum = (num / 1000).toFixed(1)
    return `${formattedNum}K`
  } else {
    return num.toString()
  }
}
