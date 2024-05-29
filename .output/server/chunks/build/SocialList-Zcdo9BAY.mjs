import _sfc_main$1 from './svg-icon-CZ9JOHhh.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  props: {
    socialList: {
      type: Array,
      default: () => []
    },
    vertical: {
      type: Boolean,
      default: false
    },
    blue: {
      type: Boolean,
      default: false
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_svg_icon = _sfc_main$1;
  _push(`<ul${ssrRenderAttrs(mergeProps({
    class: ["social-list", { vertical: $props.vertical }]
  }, _attrs))} data-v-e96a2772><!--[-->`);
  ssrRenderList($props.socialList, (item, index) => {
    _push(`<li class="social-list__item" data-v-e96a2772><!--[-->`);
    ssrRenderList(Object.entries(item), (obj, index2) => {
      _push(`<a class="${ssrRenderClass([{ blue: $props.blue }, "social-list__link"])}"${ssrRenderAttr("href", obj[1])} data-v-e96a2772>`);
      _push(ssrRenderComponent(_component_svg_icon, {
        name: obj[0],
        width: "24",
        height: "24"
      }, null, _parent));
      _push(`</a>`);
    });
    _push(`<!--]--></li>`);
  });
  _push(`<!--]--></ul>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SocialList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-e96a2772"]]);

export { __nuxt_component_2 as _ };
//# sourceMappingURL=SocialList-Zcdo9BAY.mjs.map
