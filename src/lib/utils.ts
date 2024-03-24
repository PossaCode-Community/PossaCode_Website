import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getGithubUserName(url: string) {
  return url.replace(/^https:\/\/github\.com\/|\/$/g, '')
}

export async function getUserInfos(username: string) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`)

    if (!response.ok) {
      throw new Error(
        `An error while trying to get user informations, ${response.status}`,
      )
    }

    return await response.json()
  } catch (error) {
    console.error(error)
  }
}
