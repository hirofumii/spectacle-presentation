import { render } from 'react-dom';

import { MDXProvider } from '@mdx-js/react';

import {
  Box,
  Deck,
  FlexBox,
  FullScreen,
  Progress,
  Slide,
  Notes,
  mdxComponentMap
} from 'spectacle';


// SPECTACLE_CLI_MDX_START
import slides, { notes } from './slides.mdx';
// SPECTACLE_CLI_MDX_END


// SPECTACLE_CLI_THEME_START
const theme = {
  colors: {
    primary: '#ebe5da',
    secondary: '#69e7fc',
    tertiary: '#261660',
    quaternary: '#fc6986',
    quinary: '#8bddfd'
  },
  fonts: {
    header: '"Noto Sans JP", Helvetica, Arial, sans-serif',
    text: '"Noto Sans JP", Helvetica, Arial, sans-serif',
    monospace: '"Consolas", "Menlo", monospace'
  },
};
// SPECTACLE_CLI_THEME_END

// SPECTACLE_CLI_TEMPLATE_START
const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <Progress />
    </Box>
  </FlexBox>
);
// SPECTACLE_CLI_TEMPLATE_END

const Presentation = () => (
  <MDXProvider components={mdxComponentMap}>
    <Deck theme={theme} template={template}>
      {slides
        .map((MDXSlide, i) => [MDXSlide, notes[i]])
        .map(([MDXSlide, MDXNote], i) => (
          <Slide key={`slide-${i}`}>
            <MDXSlide />
            <Notes>
              <MDXNote />
            </Notes>
          </Slide>
        ))}
    </Deck>
  </MDXProvider>
);

render(<Presentation />, document.getElementById('root'));
