import { _ as __nuxt_component_0$1 } from './nuxt-link-P6SDANQl.mjs';
import _sfc_main$4 from './svg-icon-BzhGSkRY.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_0$2 } from './ProductCard-rCMoo9XJ.mjs';

const _sfc_main$3 = {
  props: {
    title: {
      type: String,
      default: ""
    },
    imgUrl: {
      type: String,
      default: ""
    },
    isSpan: {
      type: Boolean,
      default: ""
    },
    link: {
      type: String,
      default: ""
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  const _component_svg_icon = _sfc_main$4;
  _push(`<li${ssrRenderAttrs(mergeProps({
    class: ["catalog-nav-item", { "span-2": $props.isSpan }]
  }, _attrs))} data-v-298cee83>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: $props.link,
    class: "catalog-nav-item__link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="catalog-nav-item__content" data-v-298cee83${_scopeId}><h3 data-v-298cee83${_scopeId}>${ssrInterpolate($props.title)}</h3>`);
        _push2(ssrRenderComponent(_component_svg_icon, {
          class: "catalog-nav-item__icon",
          width: "28",
          height: "28",
          name: "arrow-down-right"
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="catalog-nav-item__background" data-v-298cee83${_scopeId}><img class="catalog-nav-item__img"${ssrRenderAttr("src", $props.imgUrl)} alt="" data-v-298cee83${_scopeId}></div>`);
      } else {
        return [
          createVNode("div", { class: "catalog-nav-item__content" }, [
            createVNode("h3", null, toDisplayString($props.title), 1),
            createVNode(_component_svg_icon, {
              class: "catalog-nav-item__icon",
              width: "28",
              height: "28",
              name: "arrow-down-right"
            })
          ]),
          createVNode("div", { class: "catalog-nav-item__background" }, [
            createVNode("img", {
              class: "catalog-nav-item__img",
              src: $props.imgUrl,
              alt: ""
            }, null, 8, ["src"])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CatalogNavItem.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-298cee83"]]);
const _sfc_main$2 = {
  props: {
    catalogNav: {
      type: Array,
      default: () => []
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_catalog_nav_item = __nuxt_component_0;
  _push(`<ul${ssrRenderAttrs(mergeProps({ class: "catalog-nav-list" }, _attrs))} data-v-cf963fac><!--[-->`);
  ssrRenderList($props.catalogNav, (item, index) => {
    _push(ssrRenderComponent(_component_catalog_nav_item, {
      key: index,
      title: item.title,
      "img-url": item.url,
      link: item.link,
      "is-span": item.span
    }, null, _parent));
  });
  _push(`<!--]--></ul>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CatalogNav.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-cf963fac"]]);
const _sfc_main$1 = {
  props: {
    link: {
      type: Boolean,
      default: false
    },
    linkText: {
      type: String,
      default: ""
    },
    url: {
      type: String,
      default: "#"
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  const _component_svg_icon = _sfc_main$4;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "title" }, _attrs))} data-v-d51a7db8><h2 class="title__h2" data-v-d51a7db8>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</h2>`);
  if ($props.link) {
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: $props.url,
      class: "title__link"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<span data-v-d51a7db8${_scopeId}>${ssrInterpolate($props.linkText)}</span>`);
          _push2(ssrRenderComponent(_component_svg_icon, {
            class: "title__icon",
            width: "24",
            height: "24",
            name: "arrow-right"
          }, null, _parent2, _scopeId));
        } else {
          return [
            createVNode("span", null, toDisplayString($props.linkText), 1),
            createVNode(_component_svg_icon, {
              class: "title__icon",
              width: "24",
              height: "24",
              name: "arrow-right"
            })
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/Title.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-d51a7db8"]]);
const _sfc_main = {
  props: {
    cards: {
      type: Array,
      default: () => []
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_product_card = __nuxt_component_0$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "swiper" }, _attrs))} data-v-d237bc42><swiper-container class="product-slider" slides-per-view="4" mousewheel="false" allow-touch-move="true" space-between="60" data-v-d237bc42><!--[-->`);
  ssrRenderList($props.cards, (item, index) => {
    _push(`<swiper-slide class="product-slider__item" data-v-d237bc42>`);
    _push(ssrRenderComponent(_component_product_card, { card: item }, null, _parent));
    _push(`</swiper-slide>`);
  });
  _push(`<!--]--></swiper-container></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductSlider.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-d237bc42"]]);

export { __nuxt_component_2 as _, __nuxt_component_3 as a, __nuxt_component_4 as b };
//# sourceMappingURL=ProductSlider-4bWgdrox.mjs.map
