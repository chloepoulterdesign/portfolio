(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"5vVC":function(e,t,n){"use strict";n.r(t),n.d(t,"Title",(function(){return s})),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return d}));var o,a=n("wx14"),r=n("zLVn"),i=(n("q1tI"),n("7ljp")),l=n("013z"),s=(n("qKvR"),function(){return Object(i.b)("span",null,"First line ",Object(i.b)("br",null)," Second line")}),c={},u=(o="PageDescription",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),b={Title:s,_frontmatter:c},p=l.a;function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)(p,Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)(u,{mdxType:"PageDescription"},Object(i.b)("p",null,"MDX allows for certain things beyond what markdown is capable of. Content here\nwill discuss using those features to augment or modify the default content\nlayout.")),Object(i.b)("h2",null,"Frontmatter"),Object(i.b)("p",null,"You can declare frontmatter in your ",Object(i.b)("inlineCode",{parentName:"p"},".mdx")," files to provide specific metadata for the theme to use."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"title"),": Main page title: search results and SEO"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"description"),": SEO and search results"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"keywords"),": just SEO (optional)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"hiddenFromSearch"),": if true, page will be excluded from search")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-md"}),"---\ntitle: Markdown\ndescription: Usage instructions for the Markdown component\nkeywords: 'ibm,carbon,gatsby,mdx,markdown'\nhiddenFromSearch: true\n---\n")),Object(i.b)("h2",null,"Smart quotes"),Object(i.b)("p",null,"The theme has a remark for processing straight quotes, into ‘smart’ quotes (”). However, this plugin isn’t able to process text used in custom MDX components.\nWhen using quotes in custom components, content authors should manually use ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.figma.com/design-systems/"}),"“smart quotes”")," to adhere to the IBM Design Language content guidelines."),Object(i.b)("h2",null,"Custom title"),Object(i.b)("p",null,"You can export a ",Object(i.b)("inlineCode",{parentName:"p"},"Title")," component in order to render a unique title for a single page. This is particularly useful for including line breaks at a specific location."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," You still need to provide a regular string title to the frontmatter for search, navigation, and the HTML header title to work."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"---\ntitle: MDX\ndescription: custom title page\n---\n\nexport const Title = () => (\n  <span>\n    First line <br /> Second line\n  </span>\n);\n")))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-mdx-mdx-4438bb8c7f029815dad1.js.map