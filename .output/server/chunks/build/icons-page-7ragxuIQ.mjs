import _sfc_main$1 from './svg-icon-CZ9JOHhh.mjs';
import { u as useHead } from './index-BabADJUJ.mjs';
import { ref, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '@unhead/shared';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import 'vue-router';
import 'swiper/element/bundle';
import 'vue-awesome-paginate';

const icons = [
  "icons/add-plus",
  "icons/arrow-down",
  "icons/bath",
  "icons/arrow-left",
  "icons/brick-wall",
  "icons/arrow-up",
  "icons/arrow-down-right",
  "icons/arrow-right",
  "icons/burger",
  "icons/check",
  "icons/chevron-left-md",
  "icons/chevron-right-md",
  "icons/cart",
  "icons/close",
  "icons/construction-rounded",
  "icons/heart",
  "icons/logo",
  "icons/more-grid",
  "icons/pipeline",
  "icons/power-supply",
  "icons/remove-minus",
  "icons/screw",
  "icons/search",
  "icons/user",
  "icons/star",
  "icons/telegram",
  "icons/trash",
  "icons/wrench",
  "icons/whatsapp",
  "icons/youtube",
  "icons/vk"
];
const _sfc_main = {
  __name: "icons-page",
  __ssrInlineRender: true,
  props: {
    size: {
      type: Number,
      default: 60
    },
    onClick: {
      type: Function,
      default: () => () => {
      }
    }
  },
  setup(__props) {
    useHead({ title: "Icons list - @nuxtjs/svg-sprite" });
    const query = ref("");
    const filteredSprites = computed(() => {
      return icons.filter((icon) => query.value ? icon.match(query.value || "") : true).reduce((acc, icon) => {
        const [sprite, name] = icon.split("/");
        acc[sprite] = acc[sprite] || {
          name: sprite,
          symbols: []
        };
        acc[sprite].symbols.push({
          name,
          key: icon
        });
        return acc;
      }, {});
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_svg_icon = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "_icon-container" }, _attrs))} data-v-ada2fcf8><div class="_icon-search-wrapper" data-v-ada2fcf8><input${ssrRenderAttr("value", query.value)} class="_icon-search" placeholder="Search Icons" data-v-ada2fcf8></div><div data-v-ada2fcf8><!--[-->`);
      ssrRenderList(filteredSprites.value, (sprite) => {
        _push(`<div class="_icon-preview-wrapper" data-v-ada2fcf8><h2 class="_icon-sprite-title" data-v-ada2fcf8>${ssrInterpolate(sprite.name)}</h2><!--[-->`);
        ssrRenderList(sprite.symbols, (symbol) => {
          _push(`<div class="_icon-preview" data-v-ada2fcf8><div class="_icon-card" data-v-ada2fcf8><div class="_icon-svg" data-v-ada2fcf8>`);
          _push(ssrRenderComponent(_component_svg_icon, {
            name: symbol.key,
            title: symbol.key,
            class: "icon",
            width: __props.size + "px",
            height: __props.size + "px"
          }, null, _parent));
          _push(`</div><code class="_icon-name" data-v-ada2fcf8>${ssrInterpolate(symbol.name)}</code><input class="_icon-name-input" type="text" readonly${ssrRenderAttr("value", symbol.key)} data-v-ada2fcf8></div></div>`);
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxtjs/svg-sprite/dist/runtime/components/icons-page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const iconsPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ada2fcf8"]]);

export { iconsPage as default };
//# sourceMappingURL=icons-page-7ragxuIQ.mjs.map
