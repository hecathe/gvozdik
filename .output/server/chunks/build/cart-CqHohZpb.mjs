import { _ as __nuxt_component_0 } from './TheSection-oCR6a-xp.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-P6SDANQl.mjs';
import _sfc_main$2 from './svg-icon-C-TKLOKq.mjs';
import { _ as __nuxt_component_3$1, a as __nuxt_component_2$1 } from './ProductSideBar-Bn7n5Eu9.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, createTextVNode, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import './InputNumber-Dt29a5r_.mjs';
import './Button-DuwhWeWl.mjs';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'swiper/element/bundle';

const _sfc_main$1 = {
  props: {
    cartItem: {
      type: Object,
      default: () => {
      }
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ui_button_like = __nuxt_component_2$1;
  const _component_svg_icon = _sfc_main$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "cart-item" }, _attrs))} data-v-c3bf6d3b><div class="cart-item__left" data-v-c3bf6d3b><div class="cart-item__img" data-v-c3bf6d3b><img${ssrRenderAttr("src", $props.cartItem.img)} alt="" data-v-c3bf6d3b></div><div class="cart-item__wrap" data-v-c3bf6d3b><div class="cart-item__info" data-v-c3bf6d3b><h3 data-v-c3bf6d3b>${ssrInterpolate($props.cartItem.title)}</h3><p data-v-c3bf6d3b>\u0410\u0440\u0442\u0438\u043A\u0443\u043B: ${ssrInterpolate($props.cartItem.article)}</p><p data-v-c3bf6d3b>\u0412\u0435\u0441: ${ssrInterpolate($props.cartItem.weight)}</p></div><div class="cart-item__actions" data-v-c3bf6d3b>`);
  _push(ssrRenderComponent(_component_ui_button_like, {
    class: "cart-item__btn",
    width: "24",
    height: "24"
  }, null, _parent));
  _push(`<button class="cart-item__btn cart-item__delete" data-v-c3bf6d3b>`);
  _push(ssrRenderComponent(_component_svg_icon, {
    name: "trash",
    width: "24",
    height: "24"
  }, null, _parent));
  _push(`</button></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CartItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-c3bf6d3b"]]);
const _sfc_main = {
  data() {
    return {
      cart_list: [
        {
          img: "/gvozdik/images/drill.jpg",
          title: "\u041A\u043B\u0435\u0449\u0438 \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u0432\u043D\u044B\u0435 Sparta 250 \u043C\u043C",
          article: "123456",
          weight: "300 \u0433",
          price: 150
        }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_the_section = __nuxt_component_0;
  const _component_nuxt_link = __nuxt_component_0$1;
  const _component_svg_icon = _sfc_main$2;
  const _component_cart_item = __nuxt_component_3;
  const _component_product_side_bar = __nuxt_component_3$1;
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "main" }, _attrs))} data-v-91f964c0>`);
  _push(ssrRenderComponent(_component_the_section, { class: "cart" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_nuxt_link, { to: "#" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_svg_icon, {
                name: "arrow-left",
                width: "24",
                height: "24"
              }, null, _parent3, _scopeId2));
              _push3(` \u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043A \u043F\u043E\u043A\u0443\u043F\u043A\u0430\u043C `);
            } else {
              return [
                createVNode(_component_svg_icon, {
                  name: "arrow-left",
                  width: "24",
                  height: "24"
                }),
                createTextVNode(" \u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043A \u043F\u043E\u043A\u0443\u043F\u043A\u0430\u043C ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<h1 class="h1" data-v-91f964c0${_scopeId}>\u041A\u043E\u0440\u0437\u0438\u043D\u0430</h1><div class="cart__content" data-v-91f964c0${_scopeId}><ul class="cart__list" data-v-91f964c0${_scopeId}><!--[-->`);
        ssrRenderList($data.cart_list, (cartItem, index) => {
          _push2(`<li class="cart__good" data-v-91f964c0${_scopeId}>`);
          _push2(ssrRenderComponent(_component_cart_item, { "cart-item": cartItem }, null, _parent2, _scopeId));
          _push2(`</li>`);
        });
        _push2(`<!--]--></ul>`);
        _push2(ssrRenderComponent(_component_product_side_bar, null, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode(_component_nuxt_link, { to: "#" }, {
            default: withCtx(() => [
              createVNode(_component_svg_icon, {
                name: "arrow-left",
                width: "24",
                height: "24"
              }),
              createTextVNode(" \u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043A \u043F\u043E\u043A\u0443\u043F\u043A\u0430\u043C ")
            ]),
            _: 1
          }),
          createVNode("h1", { class: "h1" }, "\u041A\u043E\u0440\u0437\u0438\u043D\u0430"),
          createVNode("div", { class: "cart__content" }, [
            createVNode("ul", { class: "cart__list" }, [
              (openBlock(true), createBlock(Fragment, null, renderList($data.cart_list, (cartItem, index) => {
                return openBlock(), createBlock("li", {
                  class: "cart__good",
                  key: index
                }, [
                  createVNode(_component_cart_item, { "cart-item": cartItem }, null, 8, ["cart-item"])
                ]);
              }), 128))
            ]),
            createVNode(_component_product_side_bar)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const cart = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-91f964c0"]]);

export { cart as default };
//# sourceMappingURL=cart-CqHohZpb.mjs.map
