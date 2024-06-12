import { useState } from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';

const CodeRegister = () => {
  const [code, setCode] = useState(
    `<a class="c-button" href="#">
  <span>Button</span>
</a>`
  );

  return (
    <div className="p-code-register">
      <header className="p-code-register__header">
        <div className="p-code-register__category">
          <div className="p-selectbox">
            <p className="p-selectbox__label">#Select Project</p>
            <p className="p-selectbox__input">
              <span className="head">#pj_</span>
              <input type="text" />
              <span className="tail">Enter</span>
            </p>
            <div className="p-selectbox__list">
              <label className="p-selectbox__item">
                <span>#pj_ProjectName1</span>
                <input type="radio" />
              </label>
              <label className="p-selectbox__item">
                <span>#pj_ProjectName2</span>
                <input type="radio" />
              </label>
              <label className="p-selectbox__item">
                <span>#pj_ProjectName3</span>
                <input type="radio" />
              </label>
              <label className="p-selectbox__item">
                <span>+ Add New Project</span>
              </label>
            </div>
          </div>
        </div>
        <div className="p-code-register__category">
          <div className="p-input-tag">
            <span className="head">#</span>
            <input type="text" placeholder="Add New Tag" />
            <span className="tail">Enter</span>
          </div>
        </div>
        <div className="p-code-register__tags">
          <span className="p-code-register__tag">#Tag1</span>
          <span className="p-code-register__tag">#Tag2</span>
          <span className="p-code-register__tag">#Tag3</span>
        </div>
      </header>
      <div className="p-code-register__main">
        <div className="p-code-register__editor">
          <CodeEditor
            value={code}
            language="html"
            placeholder="Please enter HTML code."
            onChange={(evn) => setCode(evn.target.value)}
            padding={15}
            style={{
              backgroundColor: "#000",
              fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
            }}
          />
        </div>
        <div className="p-code-register__view">
          {/** code をHTMLとして出力 */}
          <div className="p-code-register__preview" dangerouslySetInnerHTML={{ __html: code }} />
        </div>
      </div>
    </div>
  );
};

export default CodeRegister;
