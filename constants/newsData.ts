import { ArticleItem } from "@/type/article";

export const CATEGORY_DATA: Record<string, { featured: ArticleItem; related: ArticleItem[] }> = {
  'job-search': {
    featured: {
      title: 'Unlocking Hidden Job Markets in 2025',
      img: '/image/Frame 2147207660.png',
      category: 'Job Search',
    },
    related: [
      {
        title: 'Why Is Rage Applying All the Rage?',
        img: '/image/Frame 2147207660 (3).png',
        category: 'Life Work',
      },
      {
        title: 'How To Strive at Salary Negotiation',
        img: '/image/Frame 2147207660 (2).png',
        category: 'Food',
      },
    ],
  },
  food: {
    featured: {
      title: 'Best Foods for Brain Power',
      img: '/image/Frame 2147207672.png',
      category: 'Food',
    },
    related: [
      {
        title: 'How to Plan Meals for Productivity',
        img: '/image/Frame 2147207672 (1).png',
        category: 'Food',
      },
      {
        title: 'Affordable Healthy Recipes for Workers',
        img: '/image/Frame 2147207672 (2).png',
        category: 'Food',
      },
    ],
  },
  // add more categories
};
