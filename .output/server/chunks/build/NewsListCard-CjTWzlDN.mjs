import { _ as __nuxt_component_0$1 } from './nuxt-link-P6SDANQl.mjs';
import { mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  props: {
    newsCard: {
      type: Object,
      default: () => {
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(ssrRenderComponent(_component_nuxt_link, mergeProps({
    to: $props.newsCard.url,
    class: "news-list__card news-card"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="news-card__img" data-v-082164b5${_scopeId}><img${ssrRenderAttr("src", $props.newsCard.image)} alt="" data-v-082164b5${_scopeId}></div><div class="news-card__content" data-v-082164b5${_scopeId}><h3 class="news-card__title" data-v-082164b5${_scopeId}>${ssrInterpolate($props.newsCard.title)}</h3><div class="news-card__text" data-v-082164b5${_scopeId}>${$props.newsCard.content}</div><span class="news-card__date" data-v-082164b5${_scopeId}>${ssrInterpolate($props.newsCard.date)}</span></div>`);
      } else {
        return [
          createVNode("div", { class: "news-card__img" }, [
            createVNode("img", {
              src: $props.newsCard.image,
              alt: ""
            }, null, 8, ["src"])
          ]),
          createVNode("div", { class: "news-card__content" }, [
            createVNode("h3", { class: "news-card__title" }, toDisplayString($props.newsCard.title), 1),
            createVNode("div", {
              class: "news-card__text",
              innerHTML: $props.newsCard.content
            }, null, 8, ["innerHTML"]),
            createVNode("span", { class: "news-card__date" }, toDisplayString($props.newsCard.date), 1)
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NewsListCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-082164b5"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=NewsListCard-CjTWzlDN.mjs.map
