import BackgroundGrid from "@/conponent/BackgroundGrid";
import FAQSection from "@/conponent/Faq";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const About = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <BackgroundGrid>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            width: "100%",
            maxWidth: "828px",
            justifyContent: "center",
            alignItems: "center",
            mx: "auto",
            px: { xs: 2, sm: 4, md: 6 },
            py: { xs: 4, sm: 6, md: 8 },
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "10px", sm: "12px" },
              fontWeight: "500",
              lineHeight: "18px",
            }}
          >
            WHO WE ARE
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "26px", sm: "36px", md: "50px" },
              fontWeight: "900",
              lineHeight: { xs: "34px", sm: "46px", md: "65px" },
            }}
          >
            Bridging the Gap Between
            <Box component="span" sx={{ color: "#0718B9" }}> Vision </Box>
            and
            <Box component="span" sx={{ color: "#0718B9" }}> Execution</Box>
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "12px", sm: "14px" },
              fontWeight: "400",
              lineHeight: "20px",
              color: "#2B4263",
              maxWidth: "720px",
            }}
          >
            At Kontract, we believe every great project starts with a simple need:
            finding the right person for the job. What shouldn't be simple is the endless searching, vetting,
            and uncertainty that traditionally comes with it.
          </Typography>

          <Box sx={{ width: "100%", maxWidth: 828 }}>
            <Image
              src="/image/Section → Section.png"
              alt="womans"
              width={828}
              height={372}
              style={{ borderRadius: "10px", width: "100%", height: "auto" }}
            />
          </Box>
        </Box>
      </BackgroundGrid>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          width: "100%",
          maxWidth: "828px",
          justifyContent: "center",
          alignItems: "center",
          mx: "auto",
          px: { xs: 2, sm: 4, md: 6 },
          py: { xs: 4, sm: 6, md: 8 },
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "20px", sm: "26px" },
            fontWeight: "600",
            lineHeight: "28px",
          }}
        >
          Our Story
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "12px", sm: "14px" },
            fontWeight: "400",
            lineHeight: "20px",
            color: "#2B4263",
            maxWidth: "720px",
          }}
        >
          Born from the frustration of countless project delays and mismatched expectations, Kontract was created to solve a fundamental problem in the contracting world. Too many skilled professionals struggle to find quality work, while too many businesses waste time and resources searching for reliable contractors. We saw an opportunity to build something better—a platform where trust is built through transparency, quality is measured through results, and success is shared by everyone involved.
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "center",
            gap: 2,
            mt: 2,
          }}
        >
          <Image
            src="/image/Life at Figma 2.png"
            alt="mans"
            width={342}
            height={460}
            style={{ borderRadius: "20px", width: "100%", maxWidth: 342, height: "auto" }}
          />
          <Image
            src="/image/Life at Figma 3.png"
            alt="life"
            width={342}
            height={460}
            style={{ borderRadius: "20px", width: "100%", maxWidth: 342, height: "auto" }}
          />
          <Image
            src="/image/Life at Figma 1.png"
            alt="mans"
            width={342}
            height={460}
            style={{ borderRadius: "20px", width: "100%", maxWidth: 342, height: "auto" }}
          />
        </Box>
      </Box>
      <Box sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          width: "100%",
          maxWidth: "828px",
          justifyContent: "center",
          alignItems: "center",
          mx: "auto",
          px: { xs: 2, sm: 4, md: 6 },
          py: { xs: 4, sm: 6, md: 8 },
          textAlign: "center",
        }}>
        <Typography
          sx={{
            fontSize: { xs: "20px", sm: "26px" },
            fontWeight: "600",
            lineHeight: "28px",
            alignItems:"flex-start"
          }}
        >
          Our Values
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "center",
            gap: 2,
            mt: 2,
          }}
        >
          <Image
            src="/image/Background.png"
            alt="mans"
            width={342}
            height={460}
            style={{ borderRadius: "20px", width: "100%", maxWidth: 342, height: "auto" }}
          />
          <Image
            src="/image/Background (2).png"
            alt="life"
            width={342}
            height={460}
            style={{ borderRadius: "20px", width: "100%", maxWidth: 342, height: "auto" }}
          />
          <Image
            src="/image/Background (1).png"
            alt="mans"
            width={342}
            height={460}
            style={{ borderRadius: "20px", width: "100%", maxWidth: 342, height: "auto" }}
          />
        </Box>
      </Box>
      <FAQSection />
    </Box>
  );
};

export default About;