const apiKey = 'n0z3y5tSmgGGa9S77WAq5cIkvZjqgZSw'

export default function getGifs ({keyword = 'anime'} = {}){
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=es`
  return fetch(apiURL)
    .then(res => res.json())
    .then(response => {
      const {data} = response
      const gifs = data.map(image => {
        const {id, title, images} = image
        const {url} = images.downsized_medium
        return { title, id, url }
      })
      return gifs
    })
}