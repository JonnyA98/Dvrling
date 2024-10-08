import { ArticleCard } from "@/components/article-card"

const articles = [
  {
    title: "I ate a raw block of tofu in the street because...",
    excerpt: "Am I insane or does this make sense to some people?",
    image: "/tofu.jpg",
    slug: "i-ate-a-raw-block-of-tofu-because"
  },
]

export default function Home() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Latest Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <ArticleCard key={article.slug} {...article} />
        ))}
      </div>
    </div>
  )
}