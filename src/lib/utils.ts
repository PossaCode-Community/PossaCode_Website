import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getGithubUserName(url: string) {
  return url.replace(/^https:\/\/github\.com\/|\/$/g, '')
}
