import React, { useState } from 'react';
import CodeEditor from './code-editor';
import Preview from './preview';
import bundle from '../bundler/bundle';

function CodeSandbox() {
  const [input, setInput] = useState('');
  const [code, setCode] = useState('');

  const clickHandler = async () => {
    const output = await bundle(input);
    setCode(output);
  };

  // const tempCode = `import React from 'react';
  // import ReactDom from 'react-dom';
  // const App =()=><h1>Hey babe</h1>
  // ReactDom.render(<App/>,document.querySelector('#root'))
  // `
  // console.log(code);
  return (
    <div>
      <CodeEditor
        initialValue="//build break repeat"
        onChange={(value: any) => setInput(value)}
      />
      <div>
        <button onClick={clickHandler}>submit</button>
      </div>
      <Preview code={code} />
    </div>
  );
}

export default CodeSandbox;
