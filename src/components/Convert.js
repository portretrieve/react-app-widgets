import React, { useEffect, useState } from "react";
import axios from "axios";

function Convert({ language, text }) {
  const [convertedText, setConvertedText] = useState("");
  const [debouncedText, setDebouncedText] = useState("");

  useEffect(() => {
    const translateText = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: text,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM"
          }
        }
      );
      setConvertedText(data.data.translations[0].translatedText);
    };

    translateText();

    return () => {};
  }, [language, debouncedText]);

  useEffect(() => {
    const id = setTimeout(() => {
      setDebouncedText(text);
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  }, [text]);

  return <p>{convertedText}</p>;
}

export default Convert;
