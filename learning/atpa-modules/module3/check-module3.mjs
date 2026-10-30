/* Public-only regression guard for ATPA Module 3. No Google tokens or private textbook data. */
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { runInNewContext } from "node:vm";

const root = dirname(fileURLToPath(import.meta.url));
const read = name => readFileSync(join(root, name), "utf8");
const html = read("index.html");
const reader = read("module3.js");
const smart = read("smart-reader.js");
const css = read("smart-reader.css");
const overlay = read("module3-retranslation.js");
const progress = JSON.parse(read("progress.json"));

const bar = html.indexOf('id="mode-bar"');
const gate = html.indexOf('id="gate"');
const content = html.indexOf('id="reader-wrap"');
assert.ok(bar > 0 && bar < gate && gate < content, "Language bar must be visible before Google login and content load");
assert.match(html, /<body[^>]*data-reader-ready="false"/, "The public shell must initialize safely before login");
assert.equal((html.match(/data-mode="en"/g) || []).length, 1, "One English button required");
assert.equal((html.match(/data-mode="zh"/g) || []).length, 1, "One Chinese button required");
assert.match(html, />EN 英文<\/button>/);
assert.match(html, />中 中文<\/button>/);
assert.match(html, /smart-reader\.css\?v=/);
assert.match(html, /module3\.js\?v=/);
assert.match(css, /data-reader-ready="false"\] #toc-trigger/, "Only TOC, not language controls, may be hidden while loading");
assert.match(css, /grid-template-columns:repeat\(2,minmax\(0,1fr\)\)/, "Phone layout must offer two language buttons");
assert.match(reader, /document\.body\.dataset\.readerReady="true"/);
assert.match(reader, /applyReadingMode\(preferredReadingMode\(\),false\)/);
assert.match(reader, /\$\("mode-bar"\)\?\.addEventListener\("click"/);
assert.match(smart, /window\.ATPASmartReader=\{mount,onLanguageChange/);

const navSnapshots=[];
// Actual scroll helper exercised with a synthetic tall page; catches dead
// middle-chapter links that source-count validation cannot detect.
assert.ok(reader.includes('e.preventDefault();\n   jumpToSection('),
 "Table of contents must prevent native hash jumps and navigate explicitly");
assert.ok(reader.includes("details.open=chapterLessons.some("),
 "Keep the 211-entry navigation collapsed until a chapter is selected");
const navStart=reader.indexOf("let sectionJumpRevision=0;");
const navEnd=reader.indexOf('$("toc-trigger")?.addEventListener',navStart);
assert.ok(navStart>0&&navEnd>navStart,"Scroll navigation helper must be present");
const navCode=reader.slice(navStart,navEnd);
const jumpLog=[];
const jumpState={scrollY:0,hash:"",targetId:""};
const heights={s1517:42000,s1423:19000,chapter15:40000};
const navHarness={
 document:{
  documentElement:{style:{scrollBehavior:""}},
  getElementById(id){
   if(!(id in heights))return null;
   return {id,isConnected:true,
    closest(sel){return sel===".lesson"&&id.startsWith("s")?{id}:
                         sel===".chapter-heading"&&id.startsWith("chapter")?{id}:null},
    getBoundingClientRect(){return {top:heights[id]-jumpState.scrollY}}
   };
  }
 },
 window:{
  get scrollY(){return jumpState.scrollY},
  scrollTo({top}){jumpState.scrollY=top;jumpLog.push(["scroll",top])}
 },
 location:{get hash(){return jumpState.hash}},
 history:{pushState(_a,_b,hash){jumpState.hash=hash;jumpLog.push(["hash",hash])}},
 requestAnimationFrame(callback){callback()},
 setTimeout(callback){callback()},
 encodeURIComponent
};
navHarness.$=id=>id==="study-content"?{contains:()=>true}:
 id==="mode-bar"?{getBoundingClientRect:()=>({height:85})}:null;
navHarness.toggleMenu=open=>jumpLog.push(["drawer",open]);
navHarness.activateSection=id=>{jumpState.targetId=id};
runInNewContext(navCode+`
jumpToSection("s1517");
testSnapshots.push({hash:location.hash,scroll:window.scrollY});
jumpToSection("chapter15");
testSnapshots.push({hash:location.hash,scroll:window.scrollY});
jumpToSection("s1423");
testSnapshots.push({hash:location.hash,scroll:window.scrollY});`,
{...navHarness,testSnapshots:navSnapshots},{timeout:1500});
assert.deepEqual(navSnapshots.map(x=>x.hash),["#s1517","#chapter15","#s1423"],
 "Middle chapter, late chapter, and chapter-heading links all need to work");
assert.deepEqual(navSnapshots.map(x=>x.scroll),[41901,39901,18901],
 "Long-distance scrolling must align each target below the sticky header");
assert.equal(jumpState.targetId,"s1423","Active section should match the last click");
assert.equal(jumpLog[0][0],"drawer","Close the mobile drawer before scrolling");
assert.ok(reader.includes('window.addEventListener("popstate"'),
 "Back/forward must restore chapter navigation");

const ids = [...reader.matchAll(/"3:(\d+)":\{fileId:"([^"]+)"/g)];
assert.equal(ids.length, 17, "Must retain the 17 private original source references");
assert.deepEqual(ids.map(m => Number(m[1])), Array.from({length:17}, (_, i) => i+1));
assert.equal(new Set(ids.map(m => m[2])).size, 17, "Original source IDs must not be duplicated");
const countsMatch = reader.match(/const EXPECTED_COUNTS=(\[[^\]]+\])/);
const startsMatch = reader.match(/const FIRST_IDS=(\[[^\]]+\])/);
assert.ok(countsMatch && startsMatch, "Original source inventories missing");
const counts = JSON.parse(countsMatch[1]);
const starts = JSON.parse(startsMatch[1]);
assert.equal(counts.length, 17);
assert.equal(starts.length, 17);
assert.equal(counts.reduce((n, v) => n+v, 0), 211, "Must retain 211 original sections");
assert.equal(new Set(starts).size, 17);

const sandbox = {window: {}};
runInNewContext(overlay, sandbox, {filename: "module3-retranslation.js", timeout: 1500});
const translation = sandbox.window.ATPAModule3Retranslation;
assert.ok(translation, "Natural translation loader must be present");
assert.equal(translation.expectedSections, progress.naturalTranslationSections, "Checkpoint natural-section count differs from actual loader");
assert.equal(translation.expectedPairs, progress.naturalTranslationPairs, "Checkpoint paragraph count differs from actual loader");
assert.equal(progress.sourceSections, 211);
assert.equal(progress.originalBilingualSections, 211);
assert.equal(progress.translatedParts.reduce((n, p) => n+p.sections, 0), progress.naturalTranslationSections);
assert.equal(progress.translatedParts.reduce((n, p) => n+p.pairs, 0), progress.naturalTranslationPairs);
assert.match(progress.nextSection, /^\d+\.\d+\.\d+$/);
assert.equal(progress.mobileOAuthStatus, "E2E_UNVERIFIED", "Only signed-in device tests may promote this status");

console.log("MODULE 3 STATIC QA PASSED:");
console.log("  Language controls: visible before login, one EN + one ZH");
console.log("  17 private sources / 211 original bilingual sections preserved");
console.log("  Natural translations:", translation.expectedSections, "sections /", translation.expectedPairs, "pairs");
console.log("  Checkpoint resume at §" + progress.nextSection);
console.log("  OAuth/iPhone Safari E2E remains UNVERIFIED (not a static test)");
