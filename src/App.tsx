import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useStore } from "./hooks/useStore";
import { Container, Row, Col, Button, Stack } from "react-bootstrap";
import { AUTO_LANGUAGE } from "./constants";
import { ArrowsIcon } from "./components/Icons";
import { LanguageSelector } from "./components/LanguageSelector";
import TextArea from "./components/TextArea";
import { useEffect } from "react";
import { translate } from "./services/translate";

function App() {
  const {
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult,
    interchangeLanguages,
  } = useStore();

  useEffect(() => {
    if (fromText === "") return;
    translate({ fromLanguage, toLanguage, text: fromText });
  }, [fromText]);
  return (
    <Container fluid>
      <h1>Google Translate</h1>

      <Row>
        <Col>
          <Stack gap={2}>
            <LanguageSelector
              type="from"
              value={fromLanguage}
              onChange={setFromLanguage}
            />
            <TextArea
              value={fromText}
              onChange={setFromText}
              type="form"
              loading={loading}
            />
          </Stack>
        </Col>
        <Col xs="auto">
          <Button
            variant="link"
            disabled={fromLanguage === AUTO_LANGUAGE}
            onClick={interchangeLanguages}
          >
            <ArrowsIcon />
          </Button>
        </Col>
        <Col>
          <Stack gap={2}>
            <LanguageSelector
              type="to"
              value={toLanguage}
              onChange={setToLanguage}
            />
            <TextArea
              type="to"
              value={result}
              onChange={setResult}
              loading={loading}
            />
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
