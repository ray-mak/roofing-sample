"use server"

export default async function getMapsData() {
  try {
    return {
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    }
  } catch (error) {
    console.error(error)
    return { error: error }
  }
}
