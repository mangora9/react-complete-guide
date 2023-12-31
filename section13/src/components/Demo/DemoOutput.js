import React from 'react';
import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
  console.log(`-> DemoOutput RUNNING`);
  return (
    <MyParagraph>{props.show ? '새로운 문장' : ''}</MyParagraph>
  );
};

export default React.memo(DemoOutput);