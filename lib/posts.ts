/**
 * Single source of truth for News & Stories.
 *
 * Both the News listing, the homepage "From the field" strip, and the article
 * pages read from here, so a story only ever has to be corrected in one place.
 */

export interface Post {
  id: string
  title: string
  excerpt: string
  date: string
  category: string
  image: string
  readTime: string
  body: string
  /** Renders the Environment Week gallery, field videos and audio report on the article page */
  media?: boolean
}

export const WORLD_ENVIRONMENT_DAY_ID = 'world-environment-day-2026'

export const POSTS: Post[] = [
  {
    id: WORLD_ENVIRONMENT_DAY_ID,
    title: 'Climate and Green World Foundation for World Environmental Day 2026',
    excerpt:
      'To mark World Environment Day, the Foundation organized a tree planting and environmental engagement exercise, with a radio public announcement and community activities.',
    date: 'June 2026',
    category: 'Field Updates',
    image: '/images/environment-week-group-1.png',
    readTime: '3 min read',
    media: true,
    body: `World Environment Day is a reminder of our shared responsibility to protect and preserve the environment for generations to come. It is an opportunity to raise awareness, inspire action, and encourage communities to make meaningful choices that support a healthier and more sustainable planet.

To mark this important day, Climate and Green World Foundation organized an environmental engagement exercise focused on tree planting and other activities aimed at promoting environmental awareness and stewardship. By coming together to plant trees, engaging in a radio public announcement advertisement and care for our surroundings, we took a simple but meaningful step toward creating a greener and more resilient future.

Every tree planted, every positive environmental action, and every person inspired to care for nature contributes to a larger movement for change. World Environment Day reminds us that protecting our planet is not the responsibility of a few but a collective commitment.

Together, we can take action today for a healthier environment tomorrow.`,
  },
  {
    id: 'post-1',
    title: 'Our first planting season; So far, 600 trees have been planted.',
    excerpt: '',
    date: 'April 2026',
    category: 'Field Updates',
    image: '/images/tree-planting-welcome.png',
    readTime: '1 min read',
    body: '',
  },
  {
    id: 'post-2',
    title: 'What Bush Burning Does to Topsoil: A Conversation with Our Field Teams',
    date: 'March 2026',
    category: "Founder's Notes",
    image: '/images/environmental-preservation-2.png',
    readTime: '7 min read',
    excerpt:
      'The damage from a single season of bush burning can take years to reverse. Our field teams explain what happens under the surface and why sensitization is as important as planting.',
    body: `The damage from a single season of bush burning can take years to reverse. Our field teams explain what happens under the surface and why sensitization is as important as planting.

Every year across the Sahel and Nigeria's savannah belt, farmers burn their fields after harvest. The reasons are understandable: it clears the debris of the previous season quickly, it kills some pests, and it has been done this way for generations. The practice feels efficient, and when your neighbours are all doing it, there is strong social pressure to follow. But the problem is what it does below the surface, damage that is invisible but devastating.

A healthy topsoil is not just dirt. It is a living system, billions of microorganisms, fungal networks, invertebrates, plant roots and their decay. It is this living system that holds water, cycles nutrients, and gives crops their yield. These organisms break down organic matter into forms that plant roots can absorb. They create channels that allow water to infiltrate rather than run off. They are, in every meaningful sense, the engine of agricultural productivity.

When you burn, you kill it. The temperatures reached during a bush fire sterilize the top layer of soil. You also volatilize the nitrogen that took years to accumulate, sending it into the atmosphere as gas rather than keeping it available for the next crop. You cook the organic matter that gave the soil its structure, turning it to ash that blows away or washes off in the first rain. And you leave a surface that, bare and hardened, sheds the next rainfall rather than absorbing it.

One season of burning can set a topsoil back by years. Multiple seasons of burning, compounded by overgrazing and without organic matter inputs, can make land effectively dead. This is desertification in slow motion.

This is not a lecture. It is biology. And our sensitization work starts from that biology, not from a moral position. We have learned that telling people they are wrong achieves nothing. Showing them what is happening in their own soil achieves everything.

We talk about alternatives, composting, mulching, controlled management, cover cropping, that achieve the same agricultural goals without the long-term damage. The conversation is difficult. Changing a practice that feels like tradition always is. But it is the conversation that makes the planting work.`,
  },
  {
    id: 'post-3',
    title: 'Why City Greening is Climate Action.',
    date: 'February 2026',
    category: 'Research & Learning',
    image: '/images/environment-week-group-2.png',
    readTime: '6 min read',
    excerpt:
      "Africa's fastest-growing cities are losing green cover just as they need it most. We make the case for urban greening as a serious climate intervention.",
    body: `Africa's fastest-growing cities are losing green cover just as they need it most. We make the case for urban greening as a serious climate intervention, not just beautification.

Lagos Abuja Enugu, Port Harcourt, Kano, Nigerian Cities are expanding at a speed that outpaces planning. Roads are laid over wetlands, markets sprawl into floodplains, and trees are felled for construction timber or simply to make way for development. In the process, the green infrastructure that once tempered urban heat, absorbed stormwater, and filtered air is disappearing. And the consequences are felt most acutely by the people who can least afford alternatives.

This matters more than aesthetics. The data is unambiguous. Urban trees reduce ambient temperatures by 2 to 8°C through shade and evapotranspiration. In a city like Lagos, where dry-season temperatures regularly exceed 35°C and where millions of people work outdoors, this is not a comfort issue, it is a survival issue. Heat-related illness, reduced labour productivity, and increased energy costs for cooling are all direct consequences of urban heat islands, and all are mitigated by tree cover.

Trees absorb particulate matter and nitrogen dioxide, pollutants that cause respiratory disease, cardiovascular problems, and premature death. In Nigerian cities where traffic congestion is severe and vehicle emission standards are minimal, street trees function as a first line of respiratory defense. Studies in comparable tropical cities have shown that tree-lined streets have measurably lower concentrations of harmful particulates than treeless ones.

They slow stormwater runoff, reducing flood risk. Lagos floods regularly, and the floods are getting worse. While many factors contribute, including poor drainage infrastructure and development in flood-prone areas, the loss of permeable, vegetated surfaces is a significant one. Trees and their root systems absorb rainfall, slow surface flow, and reduce the volume of water that overwhelms drainage systems. A mature tree can intercept thousands of litres of rainfall per year.

In cities where millions walk, cycle, or work outdoors, these are not luxuries, they are public health infrastructure. Urban greening is climate adaptation in its most practical, immediate, and cost-effective form.

Our Urban Greening program starts from this evidence base. We work with municipal authorities and community groups to identify high-impact planting sites, school compounds, market perimeters, roadside corridors, community spaces, and places of worship, and plant species selected for urban resilience: drought tolerance, pollution resistance, rapid canopy development, and non-invasive root systems that will not damage infrastructure.

The work is different from rural restoration. The soil is often compacted, contaminated with construction debris, or underlain by concrete and pipes. The politics are more complex, every piece of urban land has competing claims. The maintenance challenge is real, a tree in a city needs protection from construction, vehicle damage, and vandalism in ways a rural tree does not. It needs watering during establishment in environments where there is no natural irrigation.

But the impact per tree is arguably higher. A single mature tree in a dense urban neighborhood serves thousands of people every day. Its shade cools a market. Its canopy filters the air a school breathes. Its roots slow the flood that would otherwise enter homes. When we think about where trees deliver the most benefit per unit of investment, cities, especially fast-growing African cities, are near the top of the list.`,
  },
  {
    id: 'post-4',
    title: "A Farmer's Perspective: Why We Stopped Burning Our Fields",
    date: 'January 2026',
    category: 'Voices from the Community',
    image: '/images/environmental-preservation-1.png',
    readTime: '4 min read',
    excerpt:
      'One farmer from our first program community explains the conversation that changed how he manages land, and what made the difference between lecture and dialogue.',
    body: `One farmer from our first program community explains the conversation that changed how he manages land, and what made the difference between lecture and dialogue.

"I have been farming this land for thirty years. My father farmed it before me, and his father before him. We always burned after harvest, everyone did. It was the way you prepared the ground for the next season. You burned, the ash settled, and you planted into it. Nobody told us it was a problem. Or if they did, they told us like we were stupid, and we stopped listening."

"Government people came sometimes. They would stand in front of us with their fine clothes and tell us bush burning was bad. But they never showed us why. They never got their hands dirty. They never asked us what we thought or what we had observed. They talked at us, and then they left. And we kept burning, because it was what we knew."

"When the Foundation people came, they were different. They did not lecture. They asked questions first. They sat with us under the trees, what trees we had left, and they asked what we remembered about the soil when we were young. Was it darker? Did it hold water longer? Did the crops grow taller? And we said yes, yes, it was different then. The soil was softer. Richer. You could smell it after rain, that good, dark smell. Now it smells like dust."

"Then they showed us why. They dug small holes, here and there in the field, and showed us what was in the soil. The worms, the tiny roots, the dark matter that holds everything together. And then they dug holes in a section that had just been burned. The difference was there for anyone to see. The burned soil was lighter. Harder. Empty. No worms. No roots. Just ash and clay."

"That is when I understood. Not because someone told me I was wrong, but because I could see it with my own eyes. The soil I had been burning every year was dying. And I was the one killing it."

"The change was not easy. We still clear the fields after harvest, you have to, or you cannot plant. But now we cut and pile instead of burning. We let the stalks and leaves rot where they fall, or we gather them into compost heaps. It is more work, yes. My wife says I complain about it every season. But the soil is already changing. After just two seasons of not burning, the topsoil is darker. It holds water longer after rain. I had more earthworms this year than I have seen in a decade."

"My neighbor noticed it too. He came to my field after the rains and said the ground looked different, better. He asked me what I was doing differently. I told him. He is trying it this season."

"That conversation, farmer to farmer, is how this spreads. Not from a pamphlet. Not from a government announcement. From one farmer looking at another farmer's field and seeing the difference. From the ground."`,
  },
  {
    id: 'post-5',
    title: 'Why Climate & Green World Foundation Exists: A Note from Dr. Anosike',
    date: 'December 2025',
    category: "Founder's Notes",
    image: '/images/the-founder.png',
    readTime: '5 min read',
    excerpt:
      'I spent years watching the landscapes I loved shrink. Here is why I decided a lone voice was no longer enough.',
    body: `I spent years watching the landscapes I loved shrink. Here is why I decided a lone voice was no longer enough.

For as long as I can remember, I have been drawn to the natural world. As a child in southeastern Nigeria, the forests and waterways were not scenery, they were the context of daily life. We swam in clean rivers. We walked through forests that seemed permanent, where the canopy was so dense that rain reached you minutes after it started. The air smelled of green things growing. Seasons were reliable. The land provided.

Over the decades, I watched that world shrink. Not suddenly, not in the dramatic way that makes international news, but steadily, persistently, in ways that only someone paying attention would notice. A patch of forest cleared for a road that was never completed. A stream that ran clear in my childhood turning brown, then orange, then dead. Fields that had fed families for generations producing less each year, until they were abandoned.

The causes were not mysterious. Deforestation for timber and development. Bush burning that destroyed topsoil fertility. Oil spills and illegal refining that poisoned water systems. A growing population placing demands on ecosystems that were already under stress. And underneath it all, a changing climate, shifting rainfall patterns, intensifying heat, making everything harder for the people and landscapes already on the edge.

For years I worked alone. I planted where I could. I spoke to students, to communities, to anyone who would listen. I documented what I saw. But one person, however committed, can only cover so much ground.

That is why the Foundation exists. Not because a lone voice was wrong, but because it was not enough.`,
  },
  {
    id: 'post-6',
    title: 'Climate & Green World Foundation Registered with CAC Nigeria',
    date: 'November 2025',
    category: 'Press Releases',
    image: '/images/environment-week-group-1.png',
    readTime: '2 min read',
    excerpt:
      'We are pleased to announce the formal registration of Climate & Green World Foundation with the Corporate Affairs Commission of Nigeria.',
    body: `We are pleased to announce the formal registration of Climate & Green World Foundation with the Corporate Affairs Commission of Nigeria. Registration number 9559410.

This registration marks a significant milestone in our journey from an individual vision to an institutional reality. After months of preparation, documentation, and review, the Climate & Green World Foundation is now a legally recognized entity under Nigerian law, empowered to enter partnerships, receive funding, employ staff, and operate programs across the country.

The Foundation was established with a clear mandate: to restore degraded landscapes, defend ecosystems from pollution, and equip communities to thrive in a changing climate. Our initial focus is on Nigeria and the Sahel region, with a long-term vision of expanding our work across the African continent as our capacity and track record grow.

Registration with the CAC is not just a legal formality. It represents accountability. It means our operations, finances, and governance are subject to regulatory oversight. It means our partners, corporate, governmental, and individual, can engage with us through established legal frameworks with confidence that their contributions are managed responsibly and directed toward our stated mission.

The Foundation is now open to partnership inquiries, funding applications, and volunteer engagement. We invite organizations and individuals who share our commitment to ecological restoration and community-centered climate action to reach out.

Contact us at info@climateandgreen.com to learn more about our programs, our approach, and how you can get involved.`,
  },
]

export const POSTS_BY_ID: Record<string, Post> = Object.fromEntries(
  POSTS.map((post) => [post.id, post])
)

export const POST_CATEGORY_COLORS: Record<string, string> = {
  'Field Updates': 'bg-forest-green text-white',
  "Founder's Notes": 'bg-lime-green text-white',
  'Research & Learning': 'bg-forest-green/10 text-forest-green',
  'Voices from the Community': 'bg-lime-green/10 text-lime-green-dark',
  'Press Releases': 'bg-gray-100 text-gray-600',
}
