const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const source=fs.readFileSync('learning/atpa-modules/reader.js','utf8');
function context(saved={}){
 const writes=[];
 const nodes=['reading-annotated','reading-heading','reading-tab-label','reading-diagonal','reading-summary','study-column-headings'].map(cls=>({cls,hidden:true,matches(selector){return selector.split(',').includes('.'+cls)}}));
 const article={scrollLeft:120,setAttribute(name,value){this[name]=value}};
 const box={DISPLAY_MODES:['en','annotated','vertical','study'],DISPLAY_KEY:'atpa-module1-reading-mode-v4',localStorage:{getItem:key=>saved[key]??null,setItem:(key,value)=>writes.push([key,value])},document:{querySelectorAll:()=>nodes},$:()=>article};
 vm.createContext(box);
 for(const name of ['preferredReadingMode','updateStudyViews']){
  const definition=source.match(new RegExp('function '+name+'\\([^]*?^\\}','m'))?.[0];
  assert.ok(definition,name+' exists');vm.runInContext(definition,box);
 }
 return {box,nodes,article,writes};
}
test('first visit retains the bilingual vertical default',()=>assert.equal(context().box.preferredReadingMode(),'vertical'));
test('legacy Chinese-only and parallel preferences migrate to their replacements',()=>{
 for(const [old,expected] of [['zh','annotated'],['parallel','study'],['en','en'],['vertical','vertical']])assert.equal(context({'atpa-modules-reading-mode-v3':old}).box.preferredReadingMode(),expected);
});
test('Module 1 preference wins without changing the shared Module 2/3 preference',()=>{
 const c=context({'atpa-module1-reading-mode-v4':'study','atpa-modules-reading-mode-v3':'en'});assert.equal(c.box.preferredReadingMode(),'study');assert.deepEqual(c.writes,[]);
 assert.match(source,/const DISPLAY_KEY="atpa-module1-reading-mode-v4"/);
});
test('invalid or blocked storage falls back to vertical',()=>{
 const c=context({'atpa-module1-reading-mode-v4':'bad'});assert.equal(c.box.preferredReadingMode(),'vertical');c.box.localStorage.getItem=()=>{throw Error('blocked')};assert.equal(c.box.preferredReadingMode(),'vertical');
});
test('each mode shows exactly the intended supplementary views',()=>{
 const expected={en:[],annotated:['reading-annotated','reading-heading','reading-tab-label'],vertical:[],study:['reading-diagonal','reading-summary','study-column-headings']};
 for(const [mode,visible] of Object.entries(expected)){const c=context();c.box.updateStudyViews(mode);assert.deepEqual(c.nodes.filter(n=>!n.hidden).map(n=>n.cls),visible);}
});
test('three-column content can be keyboard-focused; leaving resets horizontal scroll',()=>{
 const c=context();c.box.updateStudyViews('study');assert.equal(c.article.tabIndex,0);assert.equal(c.article.scrollLeft,120);c.box.updateStudyViews('annotated');assert.equal(c.article.tabIndex,-1);assert.equal(c.article.scrollLeft,0);
});
test('HTML toolbar has the four new modes and a Module 1 stylesheet only',()=>{
 const html=fs.readFileSync('learning/atpa-modules/index.html','utf8');assert.deepEqual([...html.matchAll(/data-mode="(.*?)"/g)].map(m=>m[1]),['en','annotated','vertical','study']);assert.match(html,/module1-study\.css/);
 for(const module of ['module2','module3'])assert.doesNotMatch(fs.readFileSync(`learning/atpa-modules/${module}/index.html`,'utf8'),/module1-study\.css/);
});
