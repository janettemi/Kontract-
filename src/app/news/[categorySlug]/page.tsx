// import { notFound } from 'next/navigation';
// import Image from 'next/image';
// import { CATEGORY_DATA } from '@/constants/newsData';
// import { Box, Typography, Button } from '@mui/material';
// import { ArticleCard } from '@/conponent/ArticleCard';

import { Box, Typography } from "@mui/material"

// export default function CategoryPage({
//   params,
// }: {
//   params: { categorySlug: string };
// }) {
//   const { categorySlug } = params;
//   const category = CATEGORY_DATA[categorySlug];

//   if (!category) return notFound();

//   return (
//     <Box sx={{ px: 2, py: 6, maxWidth: 1200, mx: 'auto' }}>
//       <Button variant="outlined" sx={{ mt: 2 }}>
//         {category.featured.category}
//       </Button>
//       <Typography fontWeight={700} fontSize={32} mb={3}>
//         {category.featured.title}
//       </Typography>
//       <Image
//         src={category.featured.img}
//         alt={category.featured.title}
//         width={900}
//         height={400}
//         style={{ borderRadius: 12, width: '100%', height: 'auto' }}
//       />
//       <Box mt={6}>
//         <Typography fontWeight={600} fontSize={24} mb={2}>
//           Related Posts
//         </Typography>
//         <Box display="flex" flexDirection="column" gap={4}>
//           {category.related.map((item: any, idx: number) => (
//             <ArticleCard key={idx} {...item} />
//           ))}
//         </Box>
//       </Box>
//     </Box>
//   );
// }

// export async function generateStaticParams() {
//   return Object.keys(CATEGORY_DATA).map((slug) => ({
//     categorySlug: slug,
//   }));
// }

const CategoryPage = () => {
  return (
    <Box>
      <Typography>hello</Typography>
    </Box>
  )
}

export default CategoryPage