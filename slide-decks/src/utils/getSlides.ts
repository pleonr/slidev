import slidesData from 'virtual:slides-data'

export function getSlides() {
  try {
    if (slidesData && slidesData.length > 0) {
      return slidesData.map((slide) => ({
        title: slide.frontmatter.title || slide.path,
        url: slide.path,
        description: slide.frontmatter.seoMeta?.ogDescription || 'No description available',
        image: slide.frontmatter.seoMeta?.ogImage || 'https://picsum.photos/200/300',
        author: 'John Doe',
        date: '2021-01-01',
        theme: slide.frontmatter.theme,
        transition: slide.frontmatter.transition,
        class: slide.frontmatter.class,
      }))
    }
  } catch (error) {
    console.error('Error reading slides frontmatter:', error)
  }

  return []
}

if (import.meta.hot) {
  import.meta.hot.accept('virtual:slides-data', (newSlidesData) => {
    console.log('Slides data updated')
  })
}
