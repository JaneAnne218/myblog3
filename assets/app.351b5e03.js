import { d as defineComponent, o as openBlock, A as createBlock, B as withCtx, b as unref, z as createBaseVNode, _ as _export_sfc, c as createElementBlock, K as inBrowser, a2 as useUpdateHead, u as useData, p as onMounted, k as watchEffect, a3 as usePrefetch, a4 as useCopyCode, a5 as useCodeGroups, a6 as h, a7 as RouterSymbol, a8 as initData, a9 as dataSymbol, aa as Content, ab as ClientOnly, ac as siteDataRef, ad as createSSRApp, ae as createRouter, af as pathToFile, ag as __vitePreload } from "./chunks/framework.e5b3d34b.js";
import { t as theme$1 } from "./chunks/theme.61f68ec0.js";
const _hoisted_1$1 = /* @__PURE__ */ createBaseVNode("div", null, "Before Doc Content", -1);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ThemeLayout",
  setup(__props) {
    const { Layout } = theme$1;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Layout), null, {
        "doc-before": withCtx(() => [
          _hoisted_1$1
        ]),
        _: 1
      });
    };
  }
});
const _sfc_main = {};
const _hoisted_1 = { class: "theme-style-div" };
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1, "This is a test theme component");
}
const TestThemeComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const style$1 = "";
const theme = {
  ...theme$1,
  Layout: _sfc_main$1,
  enhanceApp({ app, router, siteData }) {
    theme$1.enhanceApp({ app, router, siteData });
    app.component("TestThemeComponent", TestThemeComponent);
  }
};
const style = "";
const RawTheme = {
  ...theme,
  // if you need to add more here, this is how to ensure the base theme's components are installed
  enhanceApp({ app, router, siteData }) {
    theme.enhanceApp({ app, router, siteData });
  }
};
function resolveThemeExtends(theme2) {
  if (theme2.extends) {
    const base = resolveThemeExtends(theme2.extends);
    return {
      ...base,
      ...theme2,
      async enhanceApp(ctx) {
        if (base.enhanceApp)
          await base.enhanceApp(ctx);
        if (theme2.enhanceApp)
          await theme2.enhanceApp(ctx);
      }
    };
  }
  return theme2;
}
const Theme = resolveThemeExtends(RawTheme);
const VitePressApp = defineComponent({
  name: "VitePressApp",
  setup() {
    const { site } = useData();
    onMounted(() => {
      watchEffect(() => {
        document.documentElement.lang = site.value.lang;
        document.documentElement.dir = site.value.dir;
      });
    });
    {
      usePrefetch();
    }
    useCopyCode();
    useCodeGroups();
    if (Theme.setup)
      Theme.setup();
    return () => h(Theme.Layout);
  }
});
async function createApp() {
  const router = newRouter();
  const app = newApp();
  app.provide(RouterSymbol, router);
  const data = initData(router.route);
  app.provide(dataSymbol, data);
  app.component("Content", Content);
  app.component("ClientOnly", ClientOnly);
  Object.defineProperties(app.config.globalProperties, {
    $frontmatter: {
      get() {
        return data.frontmatter.value;
      }
    },
    $params: {
      get() {
        return data.page.value.params;
      }
    }
  });
  if (Theme.enhanceApp) {
    await Theme.enhanceApp({
      app,
      router,
      siteData: siteDataRef
    });
  }
  return { app, router, data };
}
function newApp() {
  return createSSRApp(VitePressApp);
}
function newRouter() {
  let isInitialPageLoad = inBrowser;
  let initialPath;
  return createRouter((path) => {
    let pageFilePath = pathToFile(path);
    if (isInitialPageLoad) {
      initialPath = pageFilePath;
    }
    if (isInitialPageLoad || initialPath === pageFilePath) {
      pageFilePath = pageFilePath.replace(/\.js$/, ".lean.js");
    }
    if (inBrowser) {
      isInitialPageLoad = false;
    }
    return __vitePreload(() => import(
      /*@vite-ignore*/
      pageFilePath
    ), true ? [] : void 0);
  }, Theme.NotFound);
}
if (inBrowser) {
  createApp().then(({ app, router, data }) => {
    router.go().then(() => {
      useUpdateHead(router.route, data.site);
      app.mount("#app");
    });
  });
}
export {
  createApp
};
