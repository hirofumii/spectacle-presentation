import { Text, FlexBox, Heading } from "spectacle";

type TitleProps = {
  text: string;
  textSize?: string;
  subText?: string;
  subTextSize: string;
}
const Title = ({text, textSize = "120px", subText, subTextSize = "50px"}: TitleProps) => (
  <>
    <FlexBox height="100%" flexDirection="column">
      <Heading fontSize={textSize} style={{ textAlign: "left", lineHeight: 1.25 }}>
        {text}
      </Heading>
      {subText && (
        <Text fontSize={subTextSize} style={{ textAlign: "left" }}>
          {subText}
        </Text>
      )}
    </FlexBox>
  </>
);

export default Title;