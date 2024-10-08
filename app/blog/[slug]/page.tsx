import { notFound } from "next/navigation"
import Image from "next/image"

interface Article {
  title: string;
  content: string;
  image: string;
}

type Articles = {
  [key: string]: Article;
}

const articles: Articles = {
  "i-ate-a-raw-block-of-tofu-because": {
    title: "I ate a raw block of tofu in the street because...",
    content: `
Let me paint you a picture: I'm standing in the middle of a busy London street, biting into a raw block of tofu like some sort of health-conscious caveman. Why? Because I'm vegan and committed to eating whole, unprocessed foods—and quite frankly, I had no other choice.

Now, before anyone jumps in with "But there are loads of vegan options in supermarkets these days," let me clarify: yes, there are vegan options. In fact, supermarkets are practically bursting with them. But here's the thing: the vast majority of these options are full of chemicals that I can't pronounce, added sugars, and empty carbs. You know the kind I'm talking about—those ultra-convenient, plant-based wraps, sandwiches, and snacks that make you feel good about your choices...until you actually check the label.

For a while, I played along, thinking I was making healthy choices by grabbing a plant-based meal deal or one of those ready-to-eat vegan salads. But once I started digging into the nutritional content, I realized these "healthy" options were no better than the standard processed meat junk. Refined oils, preservatives, sweeteners—ingredients that don't belong in something marketed as healthy, and certainly not in a meal for someone trying to stay genuinely nourished.

So, there I was, once again caught between a rock and a hard place, trying to find something to eat that was both vegan and truly good for me. I had four criteria: no food with chemicals in them that I can't pronounce, no added sugar, high protein and absolutely no nutrient-devoid carbs. And believe me, that is not easy to achieve when all you've got is a supermarket aisle at your disposal.

After what felt like hours of scanning the shelves and realizing the stark lack of whole food options, I made a decision: I grabbed a raw block of tofu.

Tofu, as we know, is a versatile food—it's great when cooked, marinated, or even baked into some delicious dish. But raw? It's about as exciting as chewing on a sponge. Still, it met my requirements: no added anything, high in protein, low in nonsense. I knew it wasn't going to be pleasant, but I was willing to make the sacrifice in the name of my health.

And so, out on the street, dodging a sea of people hurrying to their next destination, I unwrapped that tofu block and took a bite. It was exactly as I feared—bland, slightly soggy, and devoid of any flavor that might resemble a meal. But it wasn't about taste in that moment. It was about my determination to eat something real, something whole, something that would fuel my body without the artificial garbage that's hiding in almost every ready-made option out there.

Eating this tasteless brick of soy wasn't exactly a highlight of my day, but it was better than filling myself with empty calories disguised as "vegan-friendly." And that's where I think the real issue lies: we've made significant progress with vegan food options in the UK, especially in London, but the health aspect has been left behind. You can walk into any supermarket and find a vegan sandwich or snack, but finding something that's actually nourishing and aligned with a whole-foods, plant-based diet? That's like trying to find a needle in a haystack.

And it shouldn't be this way. Eating well doesn't have to mean suffering through flavorless tofu (trust me, I don't recommend it), but it also shouldn't mean having to compromise your nutrion goals for the sake of convenience. Supermarkets are packed with options that are convenient, yes, but full of ingredients that don't serve us in the long run—refined grains, sugars, and processed fats. These are the things we need to avoid, vegan or not, to truly live a healthy lifestyle.

I know some might argue that it's cheaper or more convenient to eat the processed stuff, but that doesn't have to be true. Eating healthy should be accessible to everyone, not a luxury reserved for those with more time or money. A plain block of tofu may not be glamorous, but at least it's affordable, and I'd rather save my pennies for a nice dinner out with my girlfriend on the weekend—something special, not just another overpriced takeaway because I couldn't find anything healthy during the day.

So here's my message to the supermarkets: make it easier for those of us who actually care about what we're putting into our bodies. More whole foods, fewer additives. More real ingredients, less processed nonsense. Veganism isn't just a trend, and healthy eating shouldn't be a struggle.

Until then, I'll be here, chewing on my raw tofu in the streets and dreaming of the day when healthy, plant-based food is just as easy to find as the sugary, processed stuff.

And to my fellow vegans out there, who are also trying to stay healthy in this world of "junk food veganism," I feel your pain. Stay strong, stay healthy, and maybe pack your own lunch next time.
    `,
    image: "/tofu.jpg"
  },
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles[params.slug as keyof typeof articles]

  if (!article) {
    notFound()
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4 text-primary">{article.title}</h1>
      <Image 
        src={article.image} 
        alt={article.title} 
        width={800} 
        height={400} 
        className="w-full h-64 object-cover mb-6 rounded-lg shadow-md" 
      />
      <div className="space-y-6 text-lg leading-relaxed">
        {article.content.split('\n\n').map((paragraph, index) => (
          <p key={index} className="text-muted-foreground">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  )
}