import { notFound } from 'next/navigation';
import Image from 'next/image';
import { CATEGORY_DATA } from '@/constants/newsData';
import { Box, Typography, Button } from '@mui/material';
import { ArticleCard } from '../page';

type Props = {
  params: { categorySlug: string };
};

const CategoryPage = ({ params }: Props) => {
  const { categorySlug } = params;
  const category = CATEGORY_DATA[categorySlug];

  if (!category) return notFound();

  return (
    <Box sx={{ px: 2, py: 6, maxWidth: 1200, mx: 'auto' }}>
      {/* Featured Post */}
      <Button variant="outlined" sx={{ mt: 2 }}>{category.featured.category}</Button>
      <Typography fontWeight={700} fontSize={32} mb={3}>
        {category.featured.title}
      </Typography>
      <Image
        src={category.featured.img}
        alt={category.featured.title}
        width={900}
        height={400}
        style={{ borderRadius: 12, width: '100%', height: 'auto' }}
      />

      {/* Related Posts */}
      <Box mt={6}>
        <Typography fontWeight={600} fontSize={24} mb={2}>
          Related Posts
        </Typography>
        <Box display="flex" flexDirection="column" gap={4}>
          {category.related.map((item, idx) => (
            <ArticleCard key={idx} {...item} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default CategoryPage;
