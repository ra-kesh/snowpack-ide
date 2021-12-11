import React, { useState, useEffect } from 'react';
import CodeEditor from '../CodeEditor/code-editor';
import Preview from '../CodePreview/preview';
import bundle from '../../bundler/bundle';
import Resizable from '../Resizable/resizable';
import { ExampleOne } from '../../data/ExampleOne';

function CodeSandbox() {
  const [code, setCode] = useState('');
  const [err, setErr] = useState('');
  const [input, setInput] = useState('');

  useEffect(() => {
    const timer = setTimeout(async () => {
      const output = await bundle(input);
      setCode(output.code);
      setErr(output.err);
    }, 750);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <>
      <div
        style={{
          height: '85vh',
          display: 'flex',
          flexDirection: 'row',
          width: '99%',
        }}
      >
        <Resizable direction="horizontal">
          <CodeEditor
            initialValue={ExampleOne}
            onChange={(value: any) => setInput(value)}
          />
        </Resizable>
        <Preview code={code} err={err} />
      </div>
    </>
  );
}

export default CodeSandbox;
