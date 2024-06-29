import { useState } from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';
import DOMPurify from 'dompurify';

const Items = () => {
  const [code, setCode] = useState(
    `<button class="c-button" type="button">
  Button
</button>`
  );

  return (
    <div className="pt-[2.4rem] px-12 pb-[12rem]">
      <header className="flex justify-center flex-wrap gap-10 pb-12">
        <input type="text" className="w-[100%] appearance-none height-[6rem] text-[2.4rem] font-bold py-5 px-8 mb-[3.2rem] border-b-[0.3rem] border-b-accent tracking-wider focus:outline-none" placeholder="Component name" />
        <div className="w-[32rem]">
          <div className="relative z-[1] w-[100%] h-[5rem] border-[0.2rem] border-accent rounded-[99rem] shadow cursor-pointer group">
            <p className="absolute top-0 left-0 z-1 w-[100%] h-[100%] text-[1.4rem] font-bold flex items-center px-[2rem] pr-[5rem] opacity-[0.3]
              after:content-[''] after:absolute after:top-[50%] after:right-[2rem] after:translate-y-[-50%] after:inline-block after:w-0 after:h-0 after:border-t-accent after:ml-[1rem]
              after:border-t-[0.6rem] after:border-x-[0.6rem] after:border-x-transparent after:border-b-transparent">#Select Project</p>
            <p className="hidden rounded-[99rem] overflow-hidden absolute z-[2] top-0 left-0 w-[100%] h-[100%] px-[2rem] bg-white">
              <span className="absolute top-[50%] left-[2rem] translate-y-[-50%] inline-block text-[1.4rem] font-bold">#pj_</span>
              <input className="appearance-none border-none bg-transparent absolute top-0 left-[5.25rem] right-[5rem] bottom-0 w-[21rem] h-[100%] text-[1.4rem] font-bold focus:outline-none" type="text" />
              <span className="absolute top-[50%] right-[0.8rem] translate-y-[-50%] inline-block text-[1rem] font-bold">Enter</span>
            </p>
            <div className="hidden overflow-hidden absolute top-[-0.2rem] left-[-0.2rem] w-[32rem] pt-[4rem] border-[0.2rem] border-accent bg-white rounded-[2.5rem] flex-col group-hover:flex">
              <label className="relative py-[1rem] px-[2rem] font-bold text-[1.4rem] bg-white cursor-pointer hover:bg-gray-100">
                <span>#pj_ProjectName1</span>
                <input className="absolute top-0 left-0 w-[100%] h-[100%] opacity-0 cursor-pointer" type="radio" />
              </label>
              <label className="relative py-[1rem] px-[2rem] font-bold text-[1.4rem] bg-white cursor-pointer hover:bg-gray-100">
                <span>#pj_ProjectName2</span>
                <input className="absolute top-0 left-0 w-[100%] h-[100%] opacity-0 cursor-pointer" type="radio" />
              </label>
              <label className="relative py-[1rem] px-[2rem] font-bold text-[1.4rem] bg-white cursor-pointer hover:bg-gray-100">
                <span>#pj_ProjectName3</span>
                <input className="absolute top-0 left-0 w-[100%] h-[100%] opacity-0 cursor-pointer" type="radio" />
              </label>
              <label className="relative py-[1rem] px-[2rem] font-bold text-[1.4rem] bg-white cursor-pointer hover:bg-gray-100">
                <span>+ Add New Project</span>
              </label>
            </div>
          </div>
        </div>
        <div className="w-[32rem]">
          <div className="relative border-[0.2rem] border-accent rounded-[99rem] h-[5rem] shadow">
            <span className="absolute top-[50%] left-[2rem] translate-y-[-50%] inline-block text-[1.4rem] font-bold">#</span>
            <input className="appearance-none border-none bg-transparent absolute top-0 left-[3.25rem] right-[5rem] bottom-0 w-[24.2rem] h-[100%] text-[1.4rem] font-bold focus:outline-none" type="text" placeholder="Add New Tag" />
            <span className="absolute top-[50%] right-[0.8rem] translate-y-[-50%] inline-block text-[1rem] font-bold">Enter</span>
          </div>
        </div>
        <div className="w-[100%] flex justify-center flex-wrap gap-3">
          <span className="bg-accent text-white text-xl px-5 py-2 pr-9 relative cursor-pointer rounded-[99rem] after:content-['×'] after:absolute after:top-[50%] after:right-[0.7rem] after:translate-y-[-50%] after:text-[1.6rem]">#Tag1</span>
          <span className="bg-accent text-white text-xl px-5 py-2 pr-9 relative cursor-pointer rounded-[99rem] after:content-['×'] after:absolute after:top-[50%] after:right-[0.7rem] after:translate-y-[-50%] after:text-[1.6rem]">#Tag2</span>
          <span className="bg-accent text-white text-xl px-5 py-2 pr-9 relative cursor-pointer rounded-[99rem] after:content-['×'] after:absolute after:top-[50%] after:right-[0.7rem] after:translate-y-[-50%] after:text-[1.6rem]">#Tag3</span>
        </div>
      </header>

      <div className="flex justify-between w-[49.5%] ml-auto mb-[1.5rem]">
        <div className="flex flex-wrap gap-[1rem]">
          <a href="#" className="inline-block text-white rounded-[0.4rem] text-[1.4rem] px-8 py-3 transition hover:opacity-70 bg-blue-500">Component一覧</a>
        </div>
        <div className="flex flex-wrap gap-[1rem]">
          <a href="#" className="inline-block text-white rounded-[0.4rem] text-[1.4rem] px-8 py-3 transition hover:opacity-70 bg-blue-500">保存</a>
          <a href="#" className="inline-block text-white rounded-[0.4rem] text-[1.4rem] px-8 py-3 transition hover:opacity-70 bg-accent">変更を破棄</a>
          <a href="#" className="inline-block text-white rounded-[0.4rem] text-[1.4rem] px-8 py-3 transition hover:opacity-70 bg-red-600">削除</a>
        </div>
      </div>
      <div className="flex gap-[1.5rem] min-h-[63rem]">
        <div className="relative w-[50%]">
          <div className="absolute top-0 left-0 translate-y-[-100%] w-[100%] h-[3.6rem] flex overflow-auto">
            <span className="relative py-[0.8rem] pr-[3.6rem] pl-[2rem] rounded-t-[0.4rem] text-[1.4rem] cursor-pointer bg-accent text-white">
              HTML
              <a className="absolute top-[50%] right-[0.9rem] translate-y-[-50%] text-[1.4rem] w-[1.7rem] h-[1.7rem] text-center rounded-[50%] leading-[1.7rem] hover:text-white hover:bg-gray-500" href="javascript:void(0)">×</a>
            </span>
            <span className="relative py-[0.8rem] pr-[3.6rem] pl-[2rem] rounded-t-[0.4rem] text-[1.4rem] cursor-pointer bg-gray-100">
              CSS
              <a className="absolute top-[50%] right-[0.9rem] translate-y-[-50%] text-[1.4rem] w-[1.7rem] h-[1.7rem] text-center rounded-[50%] leading-[1.7rem] hover:text-white hover:bg-gray-500" href="javascript:void(0)">×</a>
            </span>
          </div>
          <CodeEditor
            value={code}
            language="html"
            placeholder="Please enter HTML code."
            onChange={(evn) => setCode(evn.target.value)}
            padding={15}
            className="w-[100%] h-[100%]"
            style={{
              backgroundColor: "#000",
              fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
            }}
          />
        </div>
        <div className="relative w-[50%] border-[1.5rem] border-gray-100">
          {/** code をHTMLとして出力 */}
          <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(code) }} />
          <p className="absolute bottom-0 left-[-1.5rem] pt-[1.8rem] w-[100%] translate-y-[100%] text-[1.2rem]">scriptタグ内、もしくはonClick属性内のJavaScriptは実行されません。</p>
        </div>
      </div>
    </div>
  );
};

export default Items;
