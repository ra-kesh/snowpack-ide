import './code-editor.css';
import React, { useRef } from 'react';
import MonacoEditor, { OnMount, OnChange, Monaco } from '@monaco-editor/react';
import prettier from 'prettier';
import parser from 'prettier/parser-babel';
// import { parse } from '@babel/parser';
// import traverse from '@babel/traverse';
// import MonacoJSXHighlighter from 'monaco-jsx-highlighter';

interface CodeEditorProps {
  initialValue: string;
  onChange: OnChange;
}

// const babelParse = (code: string) =>
//   parse(code, {
//     sourceType: 'module',
//     plugins: ['jsx'],
//   });

const CodeEditor: React.FC<CodeEditorProps> = ({ onChange, initialValue }) => {
  const editorRef = useRef<any>();

  const onEditorDidMount: OnMount = (editor) => {
    editorRef.current = editor;
    editor.getModel()?.updateOptions({ tabSize: 2 });

    // to be done highlighting

    // Instantiate the highlighter
    // const monacoJSXHighlighter = new MonacoJSXHighlighter(
    //   // @ts-ignore
    //   Monaco,
    //   babelParse,
    //   traverse,
    // );

    // Activate highlighting (debounceTime default: 100ms)
    // monacoJSXHighlighter.highLightOnDidChangeModelContent(100);
    // Activate JSX commenting
    // monacoJSXHighlighter.addJSXCommentCommand();
    // // Done =)

    // const highlighter = new Highlighter(
    //   // @ts-ignore
    //   window.monaco,
    //   codeShift,
    //   editor,
    // );
    // highlighter.highLightOnDidChangeModelContent(
    //   () => {},
    //   () => {},
    //   undefined,
    //   () => {},
    // );
  };

  const onClickPretty = () => {
    const uglyCode = editorRef.current.getValue();

    const prettyCode = prettier
      .format(uglyCode, {
        parser: 'babel',
        plugins: [parser],
        useTabs: false,
        semi: true,
        singleQuote: true,
      })
      .replace(/\n$/, '');

    editorRef.current.setValue(prettyCode);
  };

  return (
    <>
      <div className="editor-wrapper">
        <button onClick={onClickPretty} className="button-format">
          pretty
        </button>
        <MonacoEditor
          onMount={onEditorDidMount}
          onChange={onChange}
          value={initialValue}
          theme="vs-dark"
          language="javascript"
          height="100%"
          options={{
            wordWrap: 'on',
            minimap: { enabled: false },
            showUnused: true,
            folding: false,
            lineNumbersMinChars: 2,
            fontSize: 16,
            scrollBeyondLastLine: false,
            automaticLayout: true,
          }}
        />
      </div>
    </>
  );
};

export default CodeEditor;
