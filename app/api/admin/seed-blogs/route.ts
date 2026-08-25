import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const dynamic = 'force-dynamic';

const DATA_DIR = path.join(process.cwd(), ".data");

// All existing blog posts from the website
const existingPosts = [
  {
    id: "post-1",
    title: "Six Hundred Trees in the Ground: What Our First Planting Season Taught Us",
    excerpt: "We planted 600 trees across one hectare of degraded land in our foundation year. Here is what went right, what went wrong, and what we are doing differently in season two.",
    date: "April 2025",
    category: "Field Updates",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
    readTime: "5 min read",
    body: `We planted 600 trees across one hectare of degraded land in our foundation year. Here is what went right, what went wrong, and what we are doing differently in season two.

The work began in early 2025. Our team of ten identified a site showing the characteristic markers of degraded Sahelian landscape: compacted topsoil, sparse groundcover, erosion channels cutting through what had once been productive farmland. The community had been watching the land deteriorate for years.

We started with the soil. Before a single seedling went in, our ecologists were on their knees reading the ground - assessing organic matter levels, identifying compaction layers, documenting which areas held moisture and which shed it immediately after rain. This is the part that never makes the press release. The part that makes or breaks the planting.

The species mix was community-validated. We worked with elders and farmers to identify which trees they remembered from the landscape before degradation - which ones had provided shade, fodder, fruit, timber, or medicine. Then we cross-referenced that knowledge with ecological literature and our field observations. The final mix was native, functional, and meaningful to the people who would live with it.

Six hundred trees went in over several weeks. Survival at the time of writing is being tracked closely.

What went right: community ownership was real. Several families adopted individual trees - checking on them, reporting irrigation needs, keeping goats away from the young growth. This is exactly what we had hoped to build.

What went wrong: We underestimated certain logistical challenges. We have adjusted our planting protocol for season two accordingly.

The hectare is not a forest yet. But it is a start. The soil is already responding. Season two preparations are underway.`,
    createdAt: "2025-04-15T00:00:00.000Z",
  },
  {
    id: "post-2",
    title: "What Bush Burning Does to Topsoil: A Conversation with Our Field Teams",
    excerpt: "The damage from a single season of bush burning can take years to reverse. Our ecologists explain what happens under the surface and why sensitization is as important as planting.",
    date: "March 2025",
    category: "Founder's Notes",
    image: "https://images.unsplash.com/photo-1578836537282-3171d77f8632?w=800&q=80",
    readTime: "7 min read",
    body: `The damage from a single season of bush burning can take years to reverse. Our ecologists explain what happens under the surface and why sensitization is as important as planting.

Every year across the Sahel and Nigeria's savannah belt, farmers burn their fields after harvest. The reasons are understandable: it clears the debris of the previous season quickly, it kills some pests, and it has been done this way for generations. The problem is what it does below the surface.

A healthy topsoil is not just dirt. It is a living system - billions of microorganisms, fungal networks, invertebrates, plant roots and their decay. It is this living system that holds water, cycles nutrients, and gives crops their yield. When you burn, you kill it. You also volatilize the nitrogen that took years to accumulate. You cook the organic matter that gave the soil its structure. And you leave a surface that, bare and hardened, sheds the next rainfall rather than absorbing it.

One season of burning can set a topsoil back by years. Multiple seasons of burning, compounded by overgrazing and without organic matter inputs, can make land effectively dead - unable to support the crops, trees, or ground cover that would allow it to recover.

This is not a lecture. It is biology. And our sensitization work starts from that biology, not from a moral position.

When we sit with farmers in our program communities, we do not tell them bush burning is wrong. We show them what their soil contains before and after burning. We discuss the economics: what does yield loss cost over five years? We talk about alternatives - composting, mulching, controlled management - that achieve the same agricultural goals without the long-term damage.

The conversation is difficult. But it is the conversation that makes the planting work.`,
    createdAt: "2025-03-10T00:00:00.000Z",
  },
  {
    id: "post-3",
    title: "Urban Trees in Lagos: Why City Greening is Climate Action",
    excerpt: "Africa's fastest-growing cities are losing green cover just as they need it most. We make the case for urban greening as a serious climate intervention.",
    date: "February 2025",
    category: "Research & Learning",
    image: "https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=800&q=80",
    readTime: "6 min read",
    body: `Africa's fastest-growing cities are losing green cover just as they need it most. We make the case for urban greening as a serious climate intervention.

Lagos, Abuja, Kano, Port Harcourt - Nigeria's cities are expanding at a speed that outpaces planning. Roads are laid over wetlands, markets sprawl into floodplains, and trees are felled for construction timber. In the process, the green infrastructure that once tempered urban heat, absorbed stormwater, and filtered air is disappearing.

This matters more than aesthetics. Urban trees reduce ambient temperatures by 2–8°C through shade and evapotranspiration. They absorb particulate matter and nitrogen dioxide. They slow stormwater runoff, reducing flood risk. In cities where millions walk, cycle, or work outdoors, these are not luxuries - they are public health infrastructure.

Our Urban Greening program starts from this evidence base. We work with municipal authorities and community groups to identify high-impact planting sites - school compounds, market perimeters, roadside corridors, community spaces - and plant species selected for urban resilience: drought tolerance, pollution resistance, and rapid canopy development.

The work is different from rural restoration. The soil is often compacted or contaminated. The politics are more complex. The maintenance challenge is real - a tree in a city needs protection from construction, vehicle damage, and vandalism in ways a rural tree does not.

But the impact per tree is arguably higher. A single mature tree in a dense urban neighborhood serves thousands of people every day.`,
    createdAt: "2025-02-20T00:00:00.000Z",
  },
  {
    id: "post-4",
    title: "A Farmer's Perspective: Why We Stopped Burning Our Fields",
    excerpt: "One farmer from our first program community explains the conversation that changed how he manages land - and what made the difference between lecture and dialogue.",
    date: "January 2025",
    category: "Voices from the Community",
    image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&q=80",
    readTime: "4 min read",
    body: `One farmer from our first program community explains the conversation that changed how he manages land - and what made the difference between lecture and dialogue.

"I have been farming this land for thirty years. My father farmed it before me. We always burned after harvest - everyone did. It was the way you prepared the ground for the next season. Nobody told us it was a problem. Or if they did, they told us like we were stupid, and we stopped listening."

"When the Foundation people came, they did not lecture. They asked questions. They asked what we remembered about the soil when we were young - was it darker? Did it hold water longer? Did the crops grow taller? And we said yes, it was different then. The soil was softer. Richer. You could smell it after rain."

"Then they showed us why. They dug small holes - here and there - and showed us what was in the soil. The worms, the roots, the dark matter. And then they showed us what happens after burning. The holes were different. Lighter. Harder. Empty."

"That is when I understood. Not because someone told me I was wrong, but because I could see it with my own eyes."

"We still clear the fields after harvest. But now we cut and compost instead of burning. It is more work. But the soil is already changing. My neighbor noticed it too. He asked me what I was doing differently."

"That conversation - farmer to farmer - is how this spreads. Not from a pamphlet. From the ground."`,
    createdAt: "2025-01-15T00:00:00.000Z",
  },
  {
    id: "post-5",
    title: "Why Climate & Green World Foundation Exists: A Note from Dr. Anosike",
    excerpt: "I spent years watching the landscapes I loved shrink. Here is why I decided a lone voice was no longer enough.",
    date: "December 2024",
    category: "Founder's Notes",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80",
    readTime: "8 min read",
    body: `I spent years watching the landscapes I loved shrink. Here is why I decided a lone voice was no longer enough.

For as long as I can remember, I have been drawn to the natural world. As a child in southeastern Nigeria, the forests and waterways were not scenery - they were the context of daily life. We swam in clean rivers. We walked through forests that seemed permanent. The air smelled of green things growing.

Over the decades, I watched that world shrink. Forests gave way to development. Rivers turned brown, then toxic. The land that had fed generations began to fail. And the conversations about climate change - when they happened at all - felt abstract, disconnected from the reality on the ground.

I spent years doing what I could as an individual. Planting trees on my own land. Speaking to community groups. Writing to newspapers. But individual action, however sincere, has limits. The scale of degradation demands institutional response - coordinated, funded, measured, and sustained.

That is why Climate & Green World Foundation exists. Not as another NGO adding to the noise, but as a serious institution committed to measurable ecological restoration in the places that need it most.

We are small. We are honest about that. In our first year we planted 600 trees across one hectare. That is not a headline-grabbing number. But every one of those trees is in the ground, monitored, and cared for. Every one represents a conversation with a community, a choice of species based on evidence, a commitment to follow through.

The work is slow. Restoration always is. But it is real. And it will grow.`,
    createdAt: "2024-12-01T00:00:00.000Z",
  },
  {
    id: "post-6",
    title: "Climate & Green World Foundation Registered with CAC Nigeria",
    excerpt: "We are pleased to announce the formal registration of Climate & Green World Foundation with the Corporate Affairs Commission of Nigeria.",
    date: "November 2024",
    category: "Press Releases",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=800&q=80",
    readTime: "2 min read",
    body: `We are pleased to announce the formal registration of Climate & Green World Foundation with the Corporate Affairs Commission of Nigeria.

This registration marks a significant milestone in our journey from an individual vision to an institutional reality. The Climate & Green World Foundation is now a legally recognized entity, empowered to enter partnerships, receive funding, employ staff, and operate programs across Nigeria.

The Foundation was established with a clear mandate: to restore degraded landscapes, defend ecosystems from pollution, and equip communities to thrive in a changing climate. Our initial focus is on Nigeria and the Sahel region, with a long-term vision of expanding our work across the African continent.

Registration with the CAC is not just a legal formality. It represents accountability. It means our operations, finances, and governance are subject to regulatory oversight. It means our partners - corporate, governmental, and individual - can engage with us through established legal frameworks.

We extend our gratitude to Dr. Ike Anosike, whose vision and persistence brought the Foundation from concept to reality, and to the early supporters who believed in this work before it had a name.

The Foundation is now open to partnership inquiries, funding applications, and volunteer engagement. We invite organizations and individuals who share our commitment to ecological restoration to reach out.

Contact us at info@climategreenworld.org.`,
    createdAt: "2024-11-01T00:00:00.000Z",
  },
];

export async function POST() {
  try {
    // Ensure the data directory exists
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }

    const filePath = path.join(DATA_DIR, "admin_blogs.json");
    
    // Check if blogs already exist
    let existingData: any[] = [];
    if (fs.existsSync(filePath)) {
      try {
        const raw = fs.readFileSync(filePath, "utf-8");
        existingData = JSON.parse(raw);
      } catch {
        existingData = [];
      }
    }

    // Only seed if no posts exist yet
    if (Array.isArray(existingData) && existingData.length > 0) {
      return NextResponse.json({ 
        success: true, 
        message: `Blog posts already exist (${existingData.length} posts). No seeding needed.`,
        count: existingData.length 
      });
    }

    // Write the seed data
    fs.writeFileSync(filePath, JSON.stringify(existingPosts, null, 2), "utf-8");

    return NextResponse.json({ 
      success: true, 
      message: `Successfully seeded ${existingPosts.length} blog posts.`,
      count: existingPosts.length 
    });
  } catch (error) {
    console.error("Error seeding blog posts:", error);
    return NextResponse.json({ error: "Failed to seed blog posts" }, { status: 500 });
  }
}
