export const services = [
  {
    id: "publishing",
    title: "Book Publishing",
    summary:
      "End-to-end publishing for authors and organisations — from manuscript to finished book.",
    detail:
      "We guide your manuscript through editorial review, design, production, and distribution so your ideas reach readers with professional polish.",
  },
  {
    id: "editing",
    title: "Editing & Proofreading",
    summary:
      "Structural, line, and copy editing that strengthens clarity, voice, and accuracy.",
    detail:
      "Our editors refine structure, tone, grammar, and consistency so your writing is ready for print and digital release.",
  },
  {
    id: "design",
    title: "Cover & Interior Design",
    summary:
      "Distinctive covers and clean interiors that honour your content and brand.",
    detail:
      "Typography, layout, and cover art crafted for readability on the page and presence on the shelf.",
  },
  {
    id: "printing",
    title: "Printing & Binding",
    summary:
      "Quality print runs for paperbacks, hardcovers, and institutional publications.",
    detail:
      "Reliable production for textbooks, novels, reports, and commemorative volumes with finish options to suit your budget.",
  },
  {
    id: "corporate",
    title: "Corporate & Institutional",
    summary:
      "Reports, training materials, and branded publications for schools and businesses.",
    detail:
      "We partner with schools, churches, NGOs, and companies to produce materials that communicate with authority.",
  },
  {
    id: "self-pub",
    title: "Author Support",
    summary:
      "Coaching and packaging for first-time authors who want a clear path to publication.",
    detail:
      "From proposal guidance to launch-ready files, we help new authors move from idea to bookshelf with confidence.",
  },
] as const;

export type FlipPage = {
  title?: string;
  body: string;
};

export const pastWork = [
  {
    id: "w1",
    title: "Voices of the Western Region",
    type: "Anthology",
    year: "2024",
    blurb: "A curated collection of essays and short fiction from writers across Tarkwa and beyond.",
    colors: ["#0d5fad", "#002b80"],
    cover: "/covers/cover-w1.png",
  },
  {
    id: "w2",
    title: "Mining Communities & Memory",
    type: "Non-fiction",
    year: "2023",
    blurb: "Oral histories documenting life, labour, and change in Ghana’s mining towns.",
    colors: ["#1a1a1b", "#3a3a3c"],
    cover: "/covers/cover-w2.png",
  },
  {
    id: "w3",
    title: "Primary Science Companion",
    type: "Textbook",
    year: "2024",
    blurb: "Classroom-ready science support for basic schools, designed for clarity and engagement.",
    colors: ["#0d8a5a", "#066644"],
    cover: "/covers/cover-w3.png",
  },
  {
    id: "w4",
    title: "Letters from Home",
    type: "Poetry",
    year: "2022",
    blurb: "A lyrical debut exploring belonging, faith, and the pull of place.",
    colors: ["#e21e26", "#8b1216"],
    cover: "/covers/cover-w4.png",
  },
  {
    id: "w5",
    title: "Annual Impact Report",
    type: "Corporate",
    year: "2025",
    blurb: "Brand-aligned annual reporting for a Tarkwa-based development organisation.",
    colors: ["#1a8fe8", "#0d5fad"],
    cover: "/covers/cover-w5.png",
  },
  {
    id: "w6",
    title: "Sunday School Workbook",
    type: "Educational",
    year: "2023",
    blurb: "Illustrated lessons and activities for children’s ministry programmes.",
    colors: ["#f5c518", "#c49a0a"],
    cover: "/covers/cover-w6.png",
  },
] as const;

export const books = [
  {
    id: "b1",
    title: "Real Books for Life",
    author: "Deyounge Publications",
    genre: "Essays",
    price: 85,
    currency: "GHS",
    description: "Reflections on literacy, storytelling, and why print still matters.",
    colors: ["#002b80", "#1a8fe8"],
    cover: "/covers/cover-b1.png",
    pages: [
      {
        title: "Introduction",
        body: "A book is more than paper and ink. It is a quiet companion that waits for the reader, ready to open a door into another mind, another place, another possibility. At Deyounge Publications, we believe real books still shape real lives.",
      },
      {
        title: "Why Print Endures",
        body: "Screens change by the hour. A printed page stays. In classrooms across Tarkwa and beyond, children learn to follow a line of text with a finger, to turn a leaf, to return to a favourite chapter. That physical rhythm builds attention the digital world rarely asks for.",
      },
      {
        title: "Stories That Stay",
        body: "When we publish, we ask one question: will this matter next year? Good writing survives trends. It carries local voices, careful research, and the dignity of craft. That is the work we choose every day.",
      },
      {
        title: "An Invitation",
        body: "Whether you are an author with a first draft or a school seeking clearer learning materials, we welcome you. Real books for life is not a slogan alone — it is our promise from Tarkwa to every reader we serve.",
      },
    ] satisfies FlipPage[],
  },
  {
    id: "b2",
    title: "Tarkwa Tales",
    author: "Edited by Ama Boateng",
    genre: "Short Stories",
    price: 70,
    currency: "GHS",
    description: "Contemporary stories set in and around the Western Region.",
    colors: ["#e21e26", "#8b1216"],
    cover: "/covers/cover-b2.png",
    pages: [
      {
        title: "Market Morning",
        body: "Before the sun cleared the ridge, Mama Adwoa arranged her tomatoes in careful pyramids. The air smelled of smoked fish and red earth. Somewhere beyond the stalls, a truck coughed to life — another day beginning in Tarkwa.",
      },
      {
        title: "The Letter",
        body: "Kofi kept the envelope under his mattress for three weeks. When he finally opened it, the handwriting of his sister from Accra filled the page with news of school fees, a new baby, and a question he did not yet know how to answer.",
      },
      {
        title: "Rain on the Pit Road",
        body: "The rain came hard and sudden, turning the laterite red and slick. Workers huddled under zinc roofs, laughing at the storm as if it were an old friend who always arrived without knocking.",
      },
      {
        title: "Homecoming",
        body: "She returned after five years with a suitcase and a quieter voice. The town had changed — new shops, new faces — yet the old mango tree still leaned toward the compound, waiting like a promise kept.",
      },
    ] satisfies FlipPage[],
  },
  {
    id: "b3",
    title: "The Young Reader",
    author: "Kwesi Mensah",
    genre: "Children",
    price: 45,
    currency: "GHS",
    description: "A gentle introduction to reading habits for families and schools.",
    colors: ["#0d8a5a", "#066644"],
    cover: "/covers/cover-b3.png",
    pages: [
      {
        title: "Hello, Little Reader!",
        body: "Books are friends you can hold. Some make you laugh. Some teach you new words. Some take you on adventures without leaving your chair. Are you ready to begin?",
      },
      {
        title: "Find a Quiet Spot",
        body: "Sit where the light is soft. Hold your book carefully. Open to the first page. Look at the pictures. Sound out the words slowly. Reading is a journey — take your time.",
      },
      {
        title: "Read Together",
        body: "Ask a parent, teacher, or friend to read with you. Take turns. Point to words. Talk about what happens next. Sharing a story makes it twice as bright.",
      },
      {
        title: "Keep Going",
        body: "Every day, read a little. Finish one book, then choose another. Your mind grows like a garden when you water it with stories. Happy reading!",
      },
    ] satisfies FlipPage[],
  },
  {
    id: "b4",
    title: "Ink & Industry",
    author: "Joseph Owusu",
    genre: "History",
    price: 95,
    currency: "GHS",
    description: "How publishing and print culture grew alongside Ghana’s industrial towns.",
    colors: ["#1a1a1b", "#4a4a4c"],
    cover: "/covers/cover-b4.png",
    pages: [
      {
        title: "Presses and Progress",
        body: "Wherever mines and mills rose in Ghana’s towns, printers followed. Notices, pay sheets, hymnals, and newspapers travelled the same roads as ore and timber. Print became the quiet infrastructure of public life.",
      },
      {
        title: "Tarkwa’s Paper Trail",
        body: "In Tarkwa, small presses served churches, schools, and traders. Type was set by hand. Ink stained aprons and fingertips. Each pamphlet carried local authority into homes that might never see Accra’s larger houses.",
      },
      {
        title: "From Lead Type to Laser",
        body: "Technology changed the craft, but not the need. Digital files replaced galleys; bindings grew cleaner; reach grew wider. Yet the purpose stayed: put words where people can hold them.",
      },
      {
        title: "What Remains",
        body: "Today’s publishers inherit that industrial patience — deadline, detail, durability. Ink & Industry remembers the workers and workshops that made reading possible in towns built for extraction, not letters.",
      },
    ] satisfies FlipPage[],
  },
  {
    id: "b5",
    title: "Faith on the Page",
    author: "Rev. Grace Adjei",
    genre: "Devotional",
    price: 55,
    currency: "GHS",
    description: "Daily readings written for busy households and small groups.",
    colors: ["#0d5fad", "#66c8f3"],
    cover: "/covers/cover-b5.png",
    pages: [
      {
        title: "Day One — Stillness",
        body: "Begin with quiet. Before the messages and the market list, open a short passage. Let one verse settle. Faith grows in the spaces we protect, not only in the hours we fill.",
      },
      {
        title: "Day Two — Kindness",
        body: "Look for one person who needs a gentle word. Write it if you cannot speak it. Scripture asks us to love in action; a page of prayer can become a page of practice.",
      },
      {
        title: "Day Three — Courage",
        body: "Fear often arrives louder than hope. Name it honestly, then place it beside a promise you trust. Courage is not the absence of worry — it is choosing the next faithful step.",
      },
      {
        title: "Day Four — Gratitude",
        body: "List three ordinary gifts: water, work, a friend who called. Gratitude turns the page of the day from scarcity to enough. Close this reading with thanks.",
      },
    ] satisfies FlipPage[],
  },
  {
    id: "b6",
    title: "Classroom Clarity",
    author: "Deyounge Education Series",
    genre: "Education",
    price: 60,
    currency: "GHS",
    description: "Practical guides for teachers producing learning materials that work.",
    colors: ["#f5c518", "#b8860b"],
    cover: "/covers/cover-b6.png",
    pages: [
      {
        title: "Start With the Learner",
        body: "Before designing a worksheet, name the outcome in one sentence. What should a pupil do after this lesson? Clarity for the teacher becomes clarity on the page.",
      },
      {
        title: "Less Ink, More Sense",
        body: "Crowded pages confuse. Use white space. Limit fonts. Put the key question where the eye lands first. Good design is hospitality for attention.",
      },
      {
        title: "Test Before You Print",
        body: "Try materials with a small group. Watch where they pause. Revise once. A short pilot saves a full print run and protects your budget.",
      },
      {
        title: "Share What Works",
        body: "When a handout succeeds, document why. Colleagues benefit from your notes. Publishing for the classroom is a craft best practised in community.",
      },
    ] satisfies FlipPage[],
  },
] as const;

export type Book = (typeof books)[number];

export function getBook(id: string) {
  return books.find((b) => b.id === id);
}

export const company = {
  name: "Deyounge Publications Limited",
  shortName: "DPN",
  tagline: "Real Books for Life",
  location: "Tarkwa, Western Region, Ghana",
  email: "hello@deyoungepublications.com",
  phone: "+233 XX XXX XXXX",
  hours: "Mon–Fri, 9:00am – 5:00pm",
} as const;
