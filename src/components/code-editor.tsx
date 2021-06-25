import "./code-editor.css";
import React, { useRef } from "react";
import MonacoEditor, { OnMount, OnChange } from "@monaco-editor/react";
import prettier from "prettier";
import parser from "prettier/parser-babel";

interface CodeEditorProps {
  initialValue: string;
  onChange: OnChange;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ onChange, initialValue }) => {
  const editorRef = useRef<any>();

  const onEditorDidMount: OnMount = (editor) => {
    editorRef.current = editor;
    editor.getModel()?.updateOptions({ tabSize: 2 });

    // todo syntax highlighting
  };

  const onClickPretty = () => {
    const uglyCode = editorRef.current.getValue();

    const prettyCode = prettier
      .format(uglyCode, {
        parser: "babel",
        plugins: [parser],
        useTabs: false,
        semi: true,
        singleQuote: true,
      })
      .replace(/\n$/, "");

    editorRef.current.setValue(prettyCode);
  };

  return (
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
        height="500px"
        options={{
          wordWrap: "on",
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
  );
};

export default CodeEditor;
