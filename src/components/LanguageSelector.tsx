import { Form } from "react-bootstrap";
import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from "../constants";
import React from "react";
import { FromLanguage, Language } from "../types";

type LanguageSelectorProps =
  | {
      type: "from";
      value: FromLanguage;
      onChange: (language: FromLanguage) => void;
    }
  | {
      type: "to";
      value: Language;
      onChange: (language: Language) => void;
    };

export function LanguageSelector({
  onChange,
  type,
  value,
}: LanguageSelectorProps) {
  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    onChange(e.target.value as Language);
  }
  return (
    <Form.Select
      aria-label="Select a Language"
      value={value}
      onChange={handleChange}
    >
      {type === "from" && <option value="auto">Auto detect language</option>}
      {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
        <option key={key} value={key}>
          {literal}
        </option>
      ))}
    </Form.Select>
  );
}
