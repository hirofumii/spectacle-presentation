import { CodePane } from 'spectacle';

type CodeProps = {
  language: string;
  children: string;
}
const Code = ({language, children}: CodeProps) => {
  return <CodePane language={language}>{children}</CodePane>;
};

export default Code;
