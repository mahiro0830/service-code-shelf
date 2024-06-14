import { useState } from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';
import DOMPurify from 'dompurify';

const CodeRegister = () => {
  const [code, setCode] = useState(
    `<button class="c-button" type="button">
  Button
</button>`
  );

  return (
    <div className="p-code-register">
      <header className="p-code-register__header">
        <textarea type="text" className="p-code-register__title" placeholder="Component name"></textarea>
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
      <div className="p-code-register__buttons">
        <div className="p-code-register__buttons-left">
          <a href="#" className="c-button" style={{backgroundColor: '#00A4DE'}}>Component一覧</a>
        </div>
        <div className="p-code-register__buttons-right">
          <a href="#" className="c-button" style={{backgroundColor: '#00A4DE'}}>保存</a>
          <a href="#" className="c-button">変更を破棄</a>
          <a href="#" className="c-button" style={{backgroundColor: 'red'}}>削除</a>
        </div>
      </div>
      <div className="p-code-register__main">
        <div className="p-code-register__editor">
          <div className="p-code-register__tabs">
            <span className="p-code-register__tab is-active">
              HTML
              <a className="close" href="javascript:void(0)">×</a>
            </span>
            <span className="p-code-register__tab">
              CSS
              <a className="close" href="javascript:void(0)">×</a>
            </span>
          </div>
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
          <div className="p-code-register__preview" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(code) }} />
          <p className="p-code-register__warning">scriptタグ内、もしくはonClick属性内のJavaScriptは実行されません。</p>
        </div>
      </div>
    </div>
  );
};

export default CodeRegister;
