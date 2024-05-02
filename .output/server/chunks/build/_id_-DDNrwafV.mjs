import { _ as __nuxt_component_0 } from './Breadcrumbs-D72gJu_z.mjs';
import { _ as __nuxt_component_1 } from './TheSection-CfXk1VPd.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import './nuxt-link-P6SDANQl.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'swiper/element/bundle';

const _sfc_main$1 = {
  props: {
    infoList: {
      type: Array,
      default: ""
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<ul${ssrRenderAttrs(mergeProps({ class: "product-info-list" }, _attrs))} data-v-b470da97><!--[-->`);
  ssrRenderList($props.infoList, (item, index) => {
    _push(`<li class="product-info-list__item" data-v-b470da97><span data-v-b470da97>${ssrInterpolate(item.key)}</span><span data-v-b470da97>${ssrInterpolate(item.value)}</span></li>`);
  });
  _push(`<!--]--></ul>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductInfoList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-b470da97"]]);
const _sfc_main = {
  data() {
    return {
      breadcrumbs: [
        {
          link: "/",
          title: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F",
          active: false
        },
        {
          link: "/catalog/",
          title: "\u041A\u0430\u0442\u0430\u043B\u043E\u0433",
          active: false
        },
        {
          link: "/catalog/tools/",
          title: "\u0418\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442",
          active: false
        },
        {
          link: "/catalog/tools/handtools/",
          title: "\u0420\u0443\u0447\u043D\u043E\u0439 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442",
          active: false
        },
        {
          link: "#",
          title: "\u041A\u043B\u0435\u0449\u0438",
          active: true
        }
      ],
      images: [
        "/gvozdik/images/goods-item-1.jpg",
        "/gvozdik/images/goods-item-1.jpg",
        "/gvozdik/images/goods-item-1.jpg"
      ],
      infoList: [
        {
          key: "\u0410\u0440\u0442\u0438\u043A\u0443\u043B",
          value: "1234567"
        },
        {
          key: "\u0422\u043E\u0432\u0430\u0440",
          value: "\u041A\u043B\u0435\u0449\u0438"
        },
        {
          key: "\u0420\u0430\u0437\u043C\u0435\u0440",
          value: "30 \u0445 20"
        },
        {
          key: "\u0412\u0435\u0441",
          value: "100 \u0433"
        }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_breadcrumbs = __nuxt_component_0;
  const _component_the_section = __nuxt_component_1;
  const _component_product_info_list = __nuxt_component_2;
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "main" }, _attrs))} data-v-638c8894>`);
  _push(ssrRenderComponent(_component_app_breadcrumbs, { breadcrumbs: $data.breadcrumbs }, null, _parent));
  _push(ssrRenderComponent(_component_the_section, { class: "product-section" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h1 class="h1" data-v-638c8894${_scopeId}>\u041A\u043B\u0435\u0449\u0438 \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u0432\u043D\u044B\u0435 Sparta 250 \u043C\u043C</h1><div class="product-section__wrap" data-v-638c8894${_scopeId}><div class="product-section__slider" data-v-638c8894${_scopeId}><swiper-container class="product-section__slider-container" slides-per-view="1" pagination="true" data-v-638c8894${_scopeId}><!--[-->`);
        ssrRenderList($data.images, (item, index) => {
          _push2(`<swiper-slide class="product-section__slider-item" data-v-638c8894${_scopeId}><div class="product-section__img" data-v-638c8894${_scopeId}><img${ssrRenderAttr("src", item)} alt="" data-v-638c8894${_scopeId}></div></swiper-slide>`);
        });
        _push2(`<!--]--></swiper-container></div>`);
        _push2(ssrRenderComponent(_component_product_info_list, { "info-list": $data.infoList }, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("h1", { class: "h1" }, "\u041A\u043B\u0435\u0449\u0438 \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u0432\u043D\u044B\u0435 Sparta 250 \u043C\u043C"),
          createVNode("div", { class: "product-section__wrap" }, [
            createVNode("div", { class: "product-section__slider" }, [
              createVNode("swiper-container", {
                class: "product-section__slider-container",
                "slides-per-view": "1",
                pagination: "true"
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList($data.images, (item, index) => {
                  return openBlock(), createBlock("swiper-slide", {
                    class: "product-section__slider-item",
                    key: index
                  }, [
                    createVNode("div", { class: "product-section__img" }, [
                      createVNode("img", {
                        src: item,
                        alt: ""
                      }, null, 8, ["src"])
                    ])
                  ]);
                }), 128))
              ])
            ]),
            createVNode(_component_product_info_list, { "info-list": $data.infoList }, null, 8, ["info-list"])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/catalog/[category]/[subcategory]/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-638c8894"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-DDNrwafV.mjs.map
