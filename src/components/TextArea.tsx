import { Form } from "react-bootstrap";

type TextAreaProps = {
  type: string;
  loading?: boolean;
  onChange: (value: string) => void;
  value: string;
};

const commonStyles = { border: 0, height: "200px", resize: "none" };

const getPlaceholder = ({
  type,
  loading,
}: {
  type: string;
  loading?: boolean;
}) => {
  if (type === "form") return "Write Text";
  if (loading === true) return "Translating...";
  return "Translation";
};

export default function TextArea({
  loading,
  type,
  value,
  onChange,
}: TextAreaProps) {
  const styles =
    type === "form"
      ? commonStyles
      : { ...commonStyles, backgroundColor: "#f5f5f5" };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  return (
    <Form.Control
      autoFocus={type === "form"}
      as="textarea"
      disabled={type === "to"}
      placeholder={getPlaceholder({ type, loading })}
      style={styles}
      value={value}
      onChange={handleChange}
    />
  );
}
