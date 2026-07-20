import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NoEmoji from './NoEmoji';

const SEASONS_DATA = [
  {
    id: "summer", 
    title: "☀️ Літо",
    text: "Найтепліша пора року з довгими сонячними днями, яскравим сонцем та відпочинком на природі.",
    bg: "#fff3a1",
    textColor: "#a18c20",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop"
  },
  {
    id: "spring",
    title: "🌷 Весна",
    text: "Природа прокидається від зимового сну, на деревах з'являються перші бруньки та розквітають квіти.",
    bg: "#a8f0ba",
    textColor: "#115a27",
    img: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&auto=format&fit=crop"
  },
  {
    id: "autumn",
    title: "🍁 Осінь",
    text: "Час золотого листя, прохолодного вітру та затишних вечорів під теплим пледом.",
    bg: "#e08f4d",
    textColor: "#4a1500",
    img: "https://plus.unsplash.com/premium_photo-1671371247278-f58c5a489125?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "winter",
    title: "❄️ Зима",
    text: "Казкова пора року, коли земля вкривається пухнастим білим снігом та настають морозні дні.",
    bg: "#e0f2fe",
    textColor: "#0369a1",
    img: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?w=800&auto=format&fit=crop"
  }
];

export default function App() {
  const [currentSeasonId, setCurrentSeasonId] = useState("summer");

  const currentSeason = SEASONS_DATA.find((s) => s.id === currentSeasonId);


  const availableSeasons = SEASONS_DATA.filter((s) => s.id !== currentSeasonId);

  return (
    <div
      style={{
        backgroundColor: currentSeason.bg,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        transition: "background-color 0.6s ease",
        fontFamily: "system-ui, sans-serif"
      }}
    >

      <div style={{ display: "flex", gap: "16px", marginBottom: "32px", zIndex: 10 }}>
        {availableSeasons.map((season) => (
          <motion.button
            key={season.id}
            onClick={() => setCurrentSeasonId(season.id)}
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
            style={{
              padding: "12px 22px",
              fontSize: "1rem",
              fontWeight: "bold",
              borderRadius: "50px",
              border: "none",
              cursor: "pointer",
              backgroundColor: "#ffffff",
              color: season.textColor,
              boxShadow: "0 6px 16px rgba(0,0,0,0.12)"
            }}
          >
            {season.title}
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentSeason.id}
          initial={{ opacity: 0, scale: 0.92, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: -15 }}
          transition={{ type: "spring", stiffness: 220, damping: 22 }}
          style={{
            maxWidth: "520px",
            width: "100%",
            textAlign: "center",
            backgroundColor: "rgba(255, 255, 255, 0.75)",
            padding: "32px",
            borderRadius: "24px",
            backdropFilter: "blur(12px)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
            color: currentSeason.textColor
          }}
        ><NoEmoji>
          <h1 style={{ marginTop: 0, fontSize: "2.8rem", marginBottom: "16px" }}>
            {currentSeason.title}
          </h1>
          <p style={{ fontSize: "1.15rem", lineHeight: "1.6", marginBottom: "24px" }}>
            {currentSeason.text}
          </p>
          <img
            src={currentSeason.img}
            alt={currentSeason.title}
            style={{
              width: "100%",
              height: "280px",
              objectFit: "cover",
              borderRadius: "16px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)"
            }}
          /></NoEmoji>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}