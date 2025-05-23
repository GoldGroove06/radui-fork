import { docsNavigationSections } from "./docs/docsNavigationSections"

const generateComponentsSitemaps = ()=>{
  const allPages = []

  docsNavigationSections.map((section)=>{
    return section.items.map((item)=>{
      allPages.push({
        url: `https://www.rad-ui.com${item.path}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1,
      })
    })
  })
  return allPages
}

export default function sitemap() {
    return [
      {
        // default home page
        url: 'https://www.rad-ui.com',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1,
      },
      ...generateComponentsSitemaps()
    ]
  }