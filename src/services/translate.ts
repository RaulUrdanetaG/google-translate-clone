import * as deepl from "deepl-node";

import { SUPPORTED_LANGUAGES } from "../constants";
import { FromLanguage, Language, ValidRoles } from "../types";

export async function translate({
  fromLanguage,
  toLanguage,
  text,
}: {
  fromLanguage: FromLanguage;
  toLanguage: Language;
  text: string;
}) {
  const authKey = import.meta.env.VITE_DEEPL_API_KEY;

  if (!authKey) return;
  const translator = new deepl.Translator(authKey);

  console.log(translator);

  let initialLang;
  let resultLang;

  if (fromLanguage === "auto") {
    initialLang = null;
  } else {
    initialLang = fromLanguage;
  }

  if (toLanguage === "en") {
    resultLang = "en-US";
  } else {
    resultLang = toLanguage;
  }

  console.log(fromLanguage, initialLang);
  console.log(toLanguage, resultLang);

  // const translation = await translator.translateText(
  //   text,
  //   initialLang,
  //   resultLang
  // );
}
