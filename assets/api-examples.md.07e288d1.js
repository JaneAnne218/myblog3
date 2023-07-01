import { u as useData, o as openBlock, c as createElementBlock, z as createBaseVNode, t as toDisplayString, b as unref, O as createStaticVNode, a as createTextVNode } from "./chunks/framework.aba535ac.js";
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="runtime-api-examples" tabindex="-1">Runtime API Examples <a class="header-anchor" href="#runtime-api-examples" aria-label="Permalink to &quot;Runtime API Examples&quot;">​</a></h1><p>This page demonstrates usage of some of the runtime APIs provided by VitePress.</p><p>The main <code>useData()</code> API can be used to access site, theme, and page data for the current page. It works in both <code>.md</code> and <code>.vue</code> files:</p><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;script setup&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">import { useData } from &#39;vitepress&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">const { theme, page, frontmatter } = useData()</span></span>\n<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">## </span><span style="color:#FFCB6B;">Results</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">### </span><span style="color:#FFCB6B;">Theme Data</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">&lt;pre&gt;{{ theme }}&lt;/pre&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">### </span><span style="color:#FFCB6B;">Page Data</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">&lt;pre&gt;{{ page }}&lt;/pre&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">### </span><span style="color:#FFCB6B;">Page Frontmatter</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">&lt;pre&gt;{{ frontmatter }}&lt;/pre&gt;</span></span></code></pre></div><h2 id="results" tabindex="-1">Results <a class="header-anchor" href="#results" aria-label="Permalink to &quot;Results&quot;">​</a></h2><h3 id="theme-data" tabindex="-1">Theme Data <a class="header-anchor" href="#theme-data" aria-label="Permalink to &quot;Theme Data&quot;">​</a></h3>', 6);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "page-data",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("Page Data "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#page-data",
    "aria-label": 'Permalink to "Page Data"'
  }, "​")
], -1);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "page-frontmatter",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("Page Frontmatter "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#page-frontmatter",
    "aria-label": 'Permalink to "Page Frontmatter"'
  }, "​")
], -1);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "more",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("More "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#more",
    "aria-label": 'Permalink to "More"'
  }, "​")
], -1);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("Check out the documentation for the "),
  /* @__PURE__ */ createBaseVNode("a", {
    href: "https://vitepress.dev/reference/runtime-api#usedata",
    target: "_blank",
    rel: "noreferrer"
  }, "full list of runtime APIs"),
  /* @__PURE__ */ createTextVNode(".")
], -1);
const __pageData = JSON.parse('{"title":"Runtime API Examples","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"api-examples.md"}');
const __default__ = { name: "api-examples.md" };
const _sfc_main = Object.assign(__default__, {
  setup(__props) {
    const { site, theme, page, frontmatter } = useData();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        _hoisted_1,
        createBaseVNode("pre", null, toDisplayString(unref(theme)), 1),
        _hoisted_7,
        createBaseVNode("pre", null, toDisplayString(unref(page)), 1),
        _hoisted_8,
        createBaseVNode("pre", null, toDisplayString(unref(frontmatter)), 1),
        _hoisted_9,
        _hoisted_10
      ]);
    };
  }
});
export {
  __pageData,
  _sfc_main as default
};
