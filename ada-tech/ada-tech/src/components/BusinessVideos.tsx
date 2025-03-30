"use client";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import BookingModal from "./Contact";
import { useState } from "react";

const videos = ["/1.mp4", "/2.mp4", "/3.mp4", "/4.mp4", "/5.mp4", "/7.mp4"];

export default function BusinessVideos() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Box
      id="BusinessVideos"
      sx={{
        display: "flex",
        flexDirection: { xs: "row", md: "row" },
        alignItems: "left",
        justifyContent: "left",
        alignContent:"center",
        color: "#111",
        Height: "auto",
        gap: 4,
      }}
    >
      <Box
        sx={{
          width: "100%",
          position: "relative",
        }}
      >
        <motion.div
          animate={{ y: ["-10%", "0%"] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
            loop: Infinity,
          }}
          style={{ display: "flex", flexDirection: "row", gap: "24px", alignContent:"start" }}
        >
          {[...videos, ...videos].map((video, index) => (
            <Box
              key={index}
              sx={{
                width: "180px",
                height: "100px",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 5px 20px rgba(0, 255, 255, 0.2)",
                transition: "0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 10px 30px rgba(0, 255, 255, 0.5)",
                },
              }}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                 
                }}
              >
                <source src={video} type="video/mp4" />
              </video>
            </Box>
          ))}
        </motion.div>
      </Box>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
      </motion.div>
      <BookingModal open={openModal} onClose={() => setOpenModal(false)} />
    </Box>
  );
}