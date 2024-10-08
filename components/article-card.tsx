import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

interface ArticleCardProps {
  title: string
  excerpt: string
  image: string
  slug: string
}

export function ArticleCard({ title, excerpt, image, slug }: ArticleCardProps) {
  return (
    <Card className="overflow-hidden">
      <Image src={image} alt={title} width={400} height={200} className="w-full h-48 object-cover" />
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{excerpt}</p>
      </CardContent>
      <CardFooter>
        <Button asChild>
          <Link href={`/blog/${slug}`}>Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}