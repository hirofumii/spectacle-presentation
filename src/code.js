import React from 'react';
import PropTypes from 'prop-types';
import {
  CodePane
} from 'spectacle';

const Code = (props) => {
  return <CodePane language={props.language}>{props.children}</CodePane>;
};

Code.propTypes = {
  language: PropTypes.string
};

export default Code;
