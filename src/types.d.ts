import { type SUPPORTED_LANGUAGES, type AUTO_LANGUAGE } from "./constants";

export interface State {
  fromLanguage: FromLanguage;
  toLanguage: Language;
  fromText: string;
  result: string;
  loading: boolean;
}

export type Action =
  | { type: "INTERCHANGE_LANGUAGES" }
  | { type: "SET_FROM_LANGUAGE"; payload: FromLanguage }
  | { type: "SET_TO_LANGUAGE"; payload: Language }
  | { type: "SET_FROM_TEXT"; payload: string }
  | { type: "SET_RESULT"; payload: string };

export type Language = keyof typeof SUPPORTED_LANGUAGES | "en" | "pt";
export type AutoLanguage = typeof AUTO_LANGUAGE;
export type FromLanguage = Language | AutoLanguage | "en" | "pt";

export enum ValidRoles {
  "system",
  "user",
  "assistant",
  "function",
  "tool",
}
