"use client";

import { Box, Typography, Container } from "@mui/material";

export default function SurveyPage() {
  return (
    <Container maxWidth="md" sx={{ py: 10, background:"white"}}>
      <Typography
        variant="h5"
        fontWeight="bold"
        gutterBottom
        textAlign="center"
        sx={{ mt: 4, mb: 2 }}
      >
        فرم شماره ۲: برای ایرانیانی که قصد مهاجرت دارند
      </Typography>
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          paddingTop: "56.25%", 
          borderRadius: 2,
          boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
        }}
      >
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfizLXhwrF0MWKwv2a04AcCpFMjXKn4CFAaZNLME_N4yhNLSg/viewform?usp=sharing"
          width="100%"
          height="100%"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            border: 0,
          }}
          loading="lazy"
          title="Planning to Immigrate Survey"
        >
          در حال بارگذاری…
        </iframe>
      </Box>
    </Container>
  );
}
