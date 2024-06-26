import { _ as __nuxt_component_0 } from './Breadcrumbs-CwrKlUWl.mjs';
import { _ as __nuxt_component_0$1 } from './TheSection-55IjZ0Ou.mjs';
import { _ as __nuxt_component_2 } from './CatalogNav-DbNWYANY.mjs';
import { _ as __nuxt_component_3 } from './ProductSliderSection-DQzo6yMZ.mjs';
import { mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import './nuxt-link-P6SDANQl.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import './svg-icon-CZ9JOHhh.mjs';
import './Title-Dyxyn3i3.mjs';
import './ProductSlider-8XOnfrGB.mjs';
import './client-only-BCdukaZs.mjs';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'swiper/element/bundle';
import 'vue-awesome-paginate';

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
          link: "#",
          title: "\u041A\u0430\u0442\u0430\u043B\u043E\u0433",
          active: true
        }
      ],
      catalogNav: [
        {
          title: "\u0418\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
          url: "/gvozdik/images/y-tools.jpg",
          link: "/catalog/tools",
          span: false
        },
        {
          title: "\u042D\u043B\u0435\u043A\u0442\u0440\u0438\u043A\u0430",
          url: "/gvozdik/images/y-tools.jpg",
          link: "/catalog/electric",
          span: false
        },
        {
          title: "\u0421\u0430\u043D\u0442\u0435\u0445\u043D\u0438\u043A\u0430",
          url: "/gvozdik/images/y-tools.jpg",
          link: "/catalog/santechnika",
          span: false
        },
        {
          title: "\u0418\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
          url: "/gvozdik/images/y-tools.jpg",
          link: "/catalog/instrumenty",
          span: false
        },
        {
          title: "\u042D\u043B\u0435\u043A\u0442\u0440\u0438\u043A\u0430",
          url: "/gvozdik/images/y-tools.jpg",
          link: "/catalog/instrumenty",
          span: false
        },
        {
          title: "\u0421\u0430\u043D\u0442\u0435\u0445\u043D\u0438\u043A\u0430",
          url: "/gvozdik/images/y-tools.jpg",
          link: "/catalog/instrumenty",
          span: false
        },
        {
          title: "\u0418\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
          url: "/gvozdik/images/y-tools.jpg",
          link: "/catalog/instrumenty",
          span: false
        },
        {
          title: "\u042D\u043B\u0435\u043A\u0442\u0440\u0438\u043A\u0430",
          url: "/gvozdik/images/y-tools.jpg",
          link: "/catalog/instrumenty",
          span: false
        },
        {
          title: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u043E\u0435",
          url: "/gvozdik/images/y-tools.jpg",
          link: "/catalog/popular",
          span: true
        },
        {
          title: "\u0410\u043A\u0446\u0438\u0438",
          url: "/gvozdik/images/y-tools.jpg",
          link: "/catalog/sales",
          span: true
        }
      ],
      saleCards: [
        {
          images: ["/gvozdik/images/goods-item-1.jpg", "/gvozdik/images/goods-item-1.jpg", "/gvozdik/images/goods-item-1.jpg"],
          title: "\u041A\u043B\u0435\u0449\u0438 \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u0432\u043D\u044B\u0435 Sparta 250 \u043C\u043C",
          price: "150 \u20BD",
          link: "/catalog/tools/handtools/kleshi-sparta-250mm/"
        },
        {
          images: ["/gvozdik/images/goods-item-1.jpg", "/gvozdik/images/goods-item-1.jpg", "/gvozdik/images/goods-item-1.jpg"],
          title: "\u041A\u043B\u0435\u0449\u0438 \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u0432\u043D\u044B\u0435 Sparta 250 \u043C\u043C",
          price: "150 \u20BD",
          link: "/catalog/tools/handtools/kleshi-sparta-250mm/"
        },
        {
          images: ["/gvozdik/images/goods-item-1.jpg", "/gvozdik/images/goods-item-1.jpg", "/gvozdik/images/goods-item-1.jpg"],
          title: "\u041A\u043B\u0435\u0449\u0438 \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u0432\u043D\u044B\u0435 Sparta 250 \u043C\u043C",
          price: "150 \u20BD",
          link: "/catalog/tools/handtools/kleshi-sparta-250mm/"
        },
        {
          images: ["/gvozdik/images/goods-item-1.jpg", "/gvozdik/images/goods-item-1.jpg", "/gvozdik/images/goods-item-1.jpg"],
          title: "\u041A\u043B\u0435\u0449\u0438 \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u0432\u043D\u044B\u0435 Sparta 250 \u043C\u043C",
          price: "150 \u20BD",
          link: "/catalog/tools/handtools/kleshi-sparta-250mm/"
        },
        {
          images: ["/gvozdik/images/goods-item-1.jpg", "/gvozdik/images/goods-item-1.jpg", "/gvozdik/images/goods-item-1.jpg"],
          title: "\u041A\u043B\u0435\u0449\u0438 \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u0432\u043D\u044B\u0435 Sparta 250 \u043C\u043C",
          price: "150 \u20BD",
          link: "/catalog/tools/handtools/kleshi-sparta-250mm/"
        }
      ],
      newCards: [
        {
          images: ["/gvozdik/images/goods-item-1.jpg", "/gvozdik/images/goods-item-1.jpg", "/gvozdik/images/goods-item-1.jpg"],
          title: "\u041A\u043B\u0435\u0449\u0438 \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u0432\u043D\u044B\u0435 Sparta 250 \u043C\u043C",
          price: "150 \u20BD",
          link: "/catalog/tools/handtools/kleshi-sparta-250mm/"
        },
        {
          images: ["/gvozdik/images/goods-item-1.jpg", "/gvozdik/images/goods-item-1.jpg", "/gvozdik/images/goods-item-1.jpg"],
          title: "\u041A\u043B\u0435\u0449\u0438 \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u0432\u043D\u044B\u0435 Sparta 250 \u043C\u043C",
          price: "150 \u20BD",
          link: "/catalog/tools/handtools/kleshi-sparta-250mm/"
        },
        {
          images: ["/gvozdik/images/goods-item-1.jpg", "/gvozdik/images/goods-item-1.jpg", "/gvozdik/images/goods-item-1.jpg"],
          title: "\u041A\u043B\u0435\u0449\u0438 \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u0432\u043D\u044B\u0435 Sparta 250 \u043C\u043C",
          price: "150 \u20BD",
          link: "/catalog/tools/handtools/kleshi-sparta-250mm/"
        },
        {
          images: ["/gvozdik/images/goods-item-1.jpg", "/gvozdik/images/goods-item-1.jpg", "/gvozdik/images/goods-item-1.jpg"],
          title: "\u041A\u043B\u0435\u0449\u0438 \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u0432\u043D\u044B\u0435 Sparta 250 \u043C\u043C",
          price: "150 \u20BD",
          link: "/catalog/tools/handtools/kleshi-sparta-250mm/"
        },
        {
          images: ["/gvozdik/images/goods-item-1.jpg", "/gvozdik/images/goods-item-1.jpg", "/gvozdik/images/goods-item-1.jpg"],
          title: "\u041A\u043B\u0435\u0449\u0438 \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u0432\u043D\u044B\u0435 Sparta 250 \u043C\u043C",
          price: "150 \u20BD",
          link: "/catalog/tools/handtools/kleshi-sparta-250mm/"
        }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_breadcrumbs = __nuxt_component_0;
  const _component_the_section = __nuxt_component_0$1;
  const _component_catalog_nav = __nuxt_component_2;
  const _component_product_slider_section = __nuxt_component_3;
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "main" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_app_breadcrumbs, { breadcrumbs: $data.breadcrumbs }, null, _parent));
  _push(ssrRenderComponent(_component_the_section, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_catalog_nav, { "catalog-nav": $data.catalogNav }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_catalog_nav, { "catalog-nav": $data.catalogNav }, null, 8, ["catalog-nav"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_product_slider_section, { "slider-list": $data.saleCards }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u043E\u0435`);
      } else {
        return [
          createTextVNode("\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u043E\u0435")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_product_slider_section, { "slider-list": $data.newCards }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u041D\u043E\u0432\u0438\u043D\u043A\u0438`);
      } else {
        return [
          createTextVNode("\u041D\u043E\u0432\u0438\u043D\u043A\u0438")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/catalog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-B3r7mPGD.mjs.map
