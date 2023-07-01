import { u as useData, o as openBlock, c as createElementBlock, z as createBaseVNode, t as toDisplayString, b as unref, O as createStaticVNode, a as createTextVNode } from "./chunks/framework.e5b3d34b.js";
const _hoisted_1 = /* @__PURE__ */ createStaticVNode("", 6);
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
