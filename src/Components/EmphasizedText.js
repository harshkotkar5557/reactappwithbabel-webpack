import React from 'react';
import { emphasizeSubstring } from '../Utils/Texthelper';

const EmphasizedText = ({ text, searchInputText, tagName: Tag }) => (
  <Tag>{emphasizeSubstring(text, searchInputText)}</Tag>
);

export default EmphasizedText;
