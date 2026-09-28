// Shared pricing/feature content, kept out of PricingPlans.tsx so it can be
// imported from HomePage.tsx too without tripping the react-refresh
// only-export-components lint rule (which flags a component file that also
// exports plain data).

export const individualFeatureGroups = [
  {
    category: "Win new business with less friction and mental load",
    items: [
      {
        name: "Guided BD Workflow",
        description:
          "streamlines and optimizes outreach with strategic recommendations and timing signals",
      },
      {
        name: "Customized Strategy Agent",
        description: "adapts to your profile, goals and ideal client",
      },
      {
        name: "Personalized Writing Agent",
        description:
          "drafts outreach in your style using context and BD best practices",
      },
    ],
  },
  {
    category: "Discover relevant opportunities",
    items: [
      {
        name: "Daily Lead Recommendations",
        description: "surfaces potential clients that match your goals",
      },
      {
        name: "Custom Lead Search",
        description:
          "find relevant people and opportunities based on your criteria",
      },
      {
        name: "Curated Event Recommendations",
      },
      {
        name: "Bespoke Intelligence Reports",
      },
    ],
  },
  {
    category: "Stay organized",
    items: [
      {
        name: "Relationship CRM",
        description:
          "track relationship history, notes, outreach and progress over time",
      },
      {
        name: "Contact Import",
        description:
          "bring your existing contacts and relationships into Magnet",
      },
      {
        name: "Activity Dashboard",
        description: "monitor your BD progress",
      },
    ],
  },
  {
    category: "Own your BD efforts",
    items: [
      {
        name: "Career-Long Portability",
        description:
          "keep your account and relationship data private and portable",
      },
      {
        name: "White-Glove Support",
        description:
          "human email support plus optional biweekly 15-minute check-ins",
      },
    ],
  },
];
