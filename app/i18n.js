// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "en",
    resources: {
      en: {
        translation: {
          extraterrestrialAIa: "Extraterrestrial <br/> Artificial Intelligence",
          greeting: "Who is the Artificial Intelligence Elon on the Solana Blockchain?",
          stakingReward: "487% Staking rewards",
          extraterrestrialAI: "Elon eXtraterrestrial AI",
          extaTokenInfo: "$EXTAI &ndash; The Future is Now! Ever wondered if Elon is more than just human? Maybe he&rsquo;s an extraterrestrial AI! $EXTAI is not just a token &ndash; it&rsquo;s the first step into a new era of technology. Get in early and claim your piece of the future!",
          joinUs: "Join us",
          buyWithCrypto: "Buy with Crypto",
        },
      },
      zh: { 
        translation: {
          extraterrestrialAIa: "外星 <br/> 人工智能",
          greeting: "索拉纳 区块链上的人工智能 埃隆 是谁？",
          stakingReward: "487% 质押奖励",
          extraterrestrialAI: "Elon 外星人工智能",
          extaTokenInfo: "$EXTAI - 未来已来！你是否曾想过 Elon 不仅仅是人类？也许他是外星人工智能！$EXTAI 不仅仅是一个代币 —— 它是迈向新技术时代的第一步。提前加入，获得未来的一部分！",
          joinUs: "加入我们",
          buyWithCrypto: "用加密货币购买",
        },
      },
    },
  });

export default i18n;
