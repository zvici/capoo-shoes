export default defineEventHandler(() => {
  return [
    {
      name: "New & Featured",
      dropdown: [
        {
          title: "Featured",
          items: [
            "New & Upcoming Drops",
            "New Arrivals",
            "Bestsellers",
            "Member Exclusive",
            "Customise with Nike By You",
            "What's Trending",
            "Jordan",
          ],
        },
        {
          title: "Trending",
          items: [
            "Summer Essentials",
            "Air Max Dn8",
            "What's Trending",
            "Nike 24.7",
            "Colours of the Season: Pastel",
            "Retro Running",
            "Running Shoe Finder",
          ],
        },
        {
          title: "Shop Icons",
          items: [
            "Lifestyle",
            "Air Force 1",
            "Air Jordan 1",
            "Air Max",
            "Dunk",
            "Cortez",
            "Blazer",
            "Pegasus",
            "Vomero",
          ],
        },
        {
          title: "Shop By Sport",
          items: [
            "Running",
            "Basketball",
            "Football",
            "Golf",
            "Tennis",
            "Gym and Training",
            "Yoga",
            "Skateboarding",
          ],
        },
      ],
    },
    {
      name: "Men",
      dropdown: [],
    },
    {
      name: "Women",
      dropdown: [],
    },
    {
      name: "Kids",
      dropdown: [],
    },
    {
      name: "Sale",
      dropdown: [],
    },
  ];
});
