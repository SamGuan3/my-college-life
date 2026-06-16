const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '')

export const apiUrl = (path: string) => {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${API_BASE_URL}${normalizedPath}`
}

export const requestJson = async <T>(path: string, options?: RequestInit): Promise<T> => {
  const response = await fetch(apiUrl(path), options)
  const result = await response.json().catch(() => null)

  if (!response.ok) {
    throw new Error(result?.message || `请求失败：${response.status}`)
  }

  return result as T
}
