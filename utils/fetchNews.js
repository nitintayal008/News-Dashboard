export async function fetchNews() {
    try {
      const res = await fetch(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=ff401e5488514020911758d511ab0a54"
      )
      const data = await res.json()
      return data.articles || []
    } catch (error) {
      console.error('Error fetching news:', error)
      throw new Error('Failed to fetch news.')
    }
  }
  