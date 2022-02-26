import { CodePane } from 'spectacle';

type CodeProps = {
  language: string;
  children: string;
}
const Code = (props: CodeProps) => {
  return <CodePane language={props.language}>{props.children}</CodePane>;
};

export default Code;
