import { ArticleItem } from "@/type/article";
import { Box, Button, Typography } from "@mui/material";

export const ArticleCard = ({img,title,category}: ArticleItem) => (
  <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, mt: 6 }}>
    <Box
      component="img"
      src={img}
      alt={category}
      sx={{ width: { xs: '100%', md: 248 }, height: 159, borderRadius: 2, objectFit: 'cover' }}
    />
    <Box>
      <Typography fontSize={14} fontWeight="bold" whiteSpace="pre-line">{title}</Typography>
      <Button variant="outlined" sx={{ mt: 1, fontSize: 14,  border: '1px solid #E5E5E5', color:"black" ,borderRadius: '10px'  }}>{category}</Button>
    </Box>
  </Box>
);