import { _ as __nuxt_component_1$2 } from './TheSection-CfXk1VPd.mjs';
import { useSSRContext, withCtx, createVNode, createTextVNode, mergeProps, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderDynamicModel } from 'vue/server-renderer';
import { p as publicAssetsURL, _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_2$2, a as __nuxt_component_3, b as __nuxt_component_4 } from './ProductSlider-D24t8i85.mjs';
import { _ as __nuxt_component_0$2 } from './nuxt-link-P6SDANQl.mjs';
import _sfc_main$a from './svg-icon-C1IWtUPM.mjs';
import { _ as __nuxt_component_0$1 } from './Button-cwf0K7Ou.mjs';
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
import './ProductCard-CkysG2P_.mjs';

const _sfc_main$9 = {
  props: {
    mainSlides: {
      type: Array,
      default: () => []
    }
  }
};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<swiper-container${ssrRenderAttrs(mergeProps({
    class: "main-slider",
    loop: "true",
    navigation: "true"
  }, _attrs), "swiper-container")} data-v-5e2d7708><!--[-->`);
  ssrRenderList($props.mainSlides, (item, index2) => {
    _push(`<swiper-slide class="main-slider__item" data-v-5e2d7708><img class="main-slider__img"${ssrRenderAttr("src", item.url)} alt="" data-v-5e2d7708><div class="container" data-v-5e2d7708><div class="main-slider__text" data-v-5e2d7708><h1 class="main-slider__title" data-v-5e2d7708>We produce the best products</h1><p data-v-5e2d7708>We produce the best products</p></div></div></swiper-slide>`);
  });
  _push(`<!--]--></swiper-container>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MainSlider.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$9], ["__scopeId", "data-v-5e2d7708"]]);
const _imports_0 = publicAssetsURL("/images/tools-store.jpg");
const _sfc_main$8 = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  const _component_the_section = __nuxt_component_1$2;
  const _component_app_title = __nuxt_component_3;
  _push(ssrRenderComponent(_component_the_section, mergeProps({ class: "about-company" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_app_title, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`\u041E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438`);
            } else {
              return [
                createTextVNode("\u041E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<div class="about-company__content" data-v-35c68279${_scopeId}><div class="about-company__text" data-v-35c68279${_scopeId}><span class="grey" data-v-35c68279${_scopeId}>\u0426\u0438\u0442\u0430\u0442\u0430</span><p data-v-35c68279${_scopeId}>\u041D\u043E \u0438\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0435 \u043F\u0440\u043E\u0442\u043E\u0442\u0438\u043F\u044B \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u044E\u0442 \u0441\u043E\u0431\u043E\u0439 \u043D\u0435 \u0447\u0442\u043E \u0438\u043D\u043E\u0435, \u043A\u0430\u043A \u043A\u0432\u0438\u043D\u0442\u044D\u0441\u0441\u0435\u043D\u0446\u0438\u044E \u043F\u043E\u0431\u0435\u0434\u044B \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u0430 \u043D\u0430\u0434 \u0440\u0430\u0437\u0443\u043C\u043E\u043C \u0438 \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u0441\u0432\u043E\u0435\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E \u0432\u0435\u0440\u0438\u0444\u0438\u0446\u0438\u0440\u043E\u0432\u0430\u043D\u044B. \u0411\u0430\u043D\u0430\u043B\u044C\u043D\u044B\u0435, \u043D\u043E \u043D\u0435\u043E\u043F\u0440\u043E\u0432\u0435\u0440\u0436\u0438\u043C\u044B\u0435 \u0432\u044B\u0432\u043E\u0434\u044B, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043D\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u044B\u0435 \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0430 \u043E\u0441\u0432\u0435\u0449\u0430\u044E\u0442 \u0447\u0440\u0435\u0437\u0432\u044B\u0447\u0430\u0439\u043D\u043E \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u044B\u0435 \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u043A\u0430\u0440\u0442\u0438\u043D\u044B \u0432 \u0446\u0435\u043B\u043E\u043C, \u043E\u0434\u043D\u0430\u043A\u043E \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u044B\u0435 \u0432\u044B\u0432\u043E\u0434\u044B, \u0440\u0430\u0437\u0443\u043C\u0435\u0435\u0442\u0441\u044F, \u0430\u0441\u0441\u043E\u0446\u0438\u0430\u0442\u0438\u0432\u043D\u043E \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u044B \u043F\u043E \u043E\u0442\u0440\u0430\u0441\u043B\u044F\u043C. \u041A\u0430\u0440\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0441\u0433\u043E\u0432\u043E\u0440\u044B \u043D\u0435 \u0434\u043E\u043F\u0443\u0441\u043A\u0430\u044E\u0442 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0438, \u043F\u0440\u0438 \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u0441\u0442\u043E\u0440\u043E\u043D\u043D\u0438\u043A\u0438 \u0442\u043E\u0442\u0430\u043B\u0438\u0442\u0430\u0440\u0438\u0437\u043C\u0430 \u0432 \u043D\u0430\u0443\u043A\u0435 \u043B\u0438\u0448\u044C \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u044E\u0442 \u0444\u0440\u0430\u043A\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u0440\u0430\u0437\u043D\u043E\u0433\u043B\u0430\u0441\u0438\u0439 \u0438 \u043E\u0431\u044A\u0435\u0434\u0438\u043D\u0435\u043D\u044B \u0432 \u0446\u0435\u043B\u044B\u0435 \u043A\u043B\u0430\u0441\u0442\u0435\u0440\u044B \u0441\u0435\u0431\u0435 \u043F\u043E\u0434\u043E\u0431\u043D\u044B\u0445. \u0412\u043E\u0442 \u0432\u0430\u043C \u044F\u0440\u043A\u0438\u0439 \u043F\u0440\u0438\u043C\u0435\u0440 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445 \u0442\u0435\u043D\u0434\u0435\u043D\u0446\u0438\u0439 \u2014 \u0443\u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u0435 \u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0435\u0439 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u044B \u043F\u0440\u0435\u0434\u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u0442 \u0432\u044B\u0441\u043E\u043A\u0443\u044E \u0432\u043E\u0441\u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u043D\u043E\u0441\u0442\u044C \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F \u043A\u0430\u0434\u0440\u043E\u0432, \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u0439 \u043D\u0430\u0441\u0443\u0449\u043D\u044B\u043C \u043F\u043E\u0442\u0440\u0435\u0431\u043D\u043E\u0441\u0442\u044F\u043C. \u0421\u043B\u043E\u0436\u043D\u043E \u0441\u043A\u0430\u0437\u0430\u0442\u044C, \u043F\u043E\u0447\u0435\u043C\u0443 \u0430\u043A\u0446\u0438\u043E\u043D\u0435\u0440\u044B \u043A\u0440\u0443\u043F\u043D\u0435\u0439\u0448\u0438\u0445 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439 \u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u043F\u0440\u0438\u0437\u0432\u0430\u043D\u044B \u043A \u043E\u0442\u0432\u0435\u0442\u0443. \u041F\u0440\u0435\u0436\u0434\u0435 \u0432\u0441\u0435\u0433\u043E, \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u0435 \u0443\u0440\u043E\u0432\u043D\u044F \u0433\u0440\u0430\u0436\u0434\u0430\u043D\u0441\u043A\u043E\u0433\u043E \u0441\u043E\u0437\u043D\u0430\u043D\u0438\u044F \u0441\u043E\u0437\u0434\u0430\u0451\u0442 \u043F\u0440\u0435\u0434\u043F\u043E\u0441\u044B\u043B\u043A\u0438 \u0434\u043B\u044F \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0445 \u043F\u043E\u0434\u0445\u043E\u0434\u043E\u0432.</p><span data-v-35c68279${_scopeId}>Alex Lee / <span class="grey" data-v-35c68279${_scopeId}>\u041E\u0441\u043D\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438</span></span></div><div class="about-company__img" data-v-35c68279${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-35c68279${_scopeId}></div></div>`);
      } else {
        return [
          createVNode(_component_app_title, null, {
            default: withCtx(() => [
              createTextVNode("\u041E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438")
            ]),
            _: 1
          }),
          createVNode("div", { class: "about-company__content" }, [
            createVNode("div", { class: "about-company__text" }, [
              createVNode("span", { class: "grey" }, "\u0426\u0438\u0442\u0430\u0442\u0430"),
              createVNode("p", null, "\u041D\u043E \u0438\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0435 \u043F\u0440\u043E\u0442\u043E\u0442\u0438\u043F\u044B \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u044E\u0442 \u0441\u043E\u0431\u043E\u0439 \u043D\u0435 \u0447\u0442\u043E \u0438\u043D\u043E\u0435, \u043A\u0430\u043A \u043A\u0432\u0438\u043D\u0442\u044D\u0441\u0441\u0435\u043D\u0446\u0438\u044E \u043F\u043E\u0431\u0435\u0434\u044B \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u0430 \u043D\u0430\u0434 \u0440\u0430\u0437\u0443\u043C\u043E\u043C \u0438 \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u0441\u0432\u043E\u0435\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E \u0432\u0435\u0440\u0438\u0444\u0438\u0446\u0438\u0440\u043E\u0432\u0430\u043D\u044B. \u0411\u0430\u043D\u0430\u043B\u044C\u043D\u044B\u0435, \u043D\u043E \u043D\u0435\u043E\u043F\u0440\u043E\u0432\u0435\u0440\u0436\u0438\u043C\u044B\u0435 \u0432\u044B\u0432\u043E\u0434\u044B, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043D\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u044B\u0435 \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0430 \u043E\u0441\u0432\u0435\u0449\u0430\u044E\u0442 \u0447\u0440\u0435\u0437\u0432\u044B\u0447\u0430\u0439\u043D\u043E \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u044B\u0435 \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u043A\u0430\u0440\u0442\u0438\u043D\u044B \u0432 \u0446\u0435\u043B\u043E\u043C, \u043E\u0434\u043D\u0430\u043A\u043E \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u044B\u0435 \u0432\u044B\u0432\u043E\u0434\u044B, \u0440\u0430\u0437\u0443\u043C\u0435\u0435\u0442\u0441\u044F, \u0430\u0441\u0441\u043E\u0446\u0438\u0430\u0442\u0438\u0432\u043D\u043E \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u044B \u043F\u043E \u043E\u0442\u0440\u0430\u0441\u043B\u044F\u043C. \u041A\u0430\u0440\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0441\u0433\u043E\u0432\u043E\u0440\u044B \u043D\u0435 \u0434\u043E\u043F\u0443\u0441\u043A\u0430\u044E\u0442 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0438, \u043F\u0440\u0438 \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u0441\u0442\u043E\u0440\u043E\u043D\u043D\u0438\u043A\u0438 \u0442\u043E\u0442\u0430\u043B\u0438\u0442\u0430\u0440\u0438\u0437\u043C\u0430 \u0432 \u043D\u0430\u0443\u043A\u0435 \u043B\u0438\u0448\u044C \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u044E\u0442 \u0444\u0440\u0430\u043A\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u0440\u0430\u0437\u043D\u043E\u0433\u043B\u0430\u0441\u0438\u0439 \u0438 \u043E\u0431\u044A\u0435\u0434\u0438\u043D\u0435\u043D\u044B \u0432 \u0446\u0435\u043B\u044B\u0435 \u043A\u043B\u0430\u0441\u0442\u0435\u0440\u044B \u0441\u0435\u0431\u0435 \u043F\u043E\u0434\u043E\u0431\u043D\u044B\u0445. \u0412\u043E\u0442 \u0432\u0430\u043C \u044F\u0440\u043A\u0438\u0439 \u043F\u0440\u0438\u043C\u0435\u0440 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445 \u0442\u0435\u043D\u0434\u0435\u043D\u0446\u0438\u0439 \u2014 \u0443\u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u0435 \u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0435\u0439 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u044B \u043F\u0440\u0435\u0434\u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u0442 \u0432\u044B\u0441\u043E\u043A\u0443\u044E \u0432\u043E\u0441\u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u043D\u043E\u0441\u0442\u044C \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F \u043A\u0430\u0434\u0440\u043E\u0432, \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u0439 \u043D\u0430\u0441\u0443\u0449\u043D\u044B\u043C \u043F\u043E\u0442\u0440\u0435\u0431\u043D\u043E\u0441\u0442\u044F\u043C. \u0421\u043B\u043E\u0436\u043D\u043E \u0441\u043A\u0430\u0437\u0430\u0442\u044C, \u043F\u043E\u0447\u0435\u043C\u0443 \u0430\u043A\u0446\u0438\u043E\u043D\u0435\u0440\u044B \u043A\u0440\u0443\u043F\u043D\u0435\u0439\u0448\u0438\u0445 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439 \u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u043F\u0440\u0438\u0437\u0432\u0430\u043D\u044B \u043A \u043E\u0442\u0432\u0435\u0442\u0443. \u041F\u0440\u0435\u0436\u0434\u0435 \u0432\u0441\u0435\u0433\u043E, \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u0435 \u0443\u0440\u043E\u0432\u043D\u044F \u0433\u0440\u0430\u0436\u0434\u0430\u043D\u0441\u043A\u043E\u0433\u043E \u0441\u043E\u0437\u043D\u0430\u043D\u0438\u044F \u0441\u043E\u0437\u0434\u0430\u0451\u0442 \u043F\u0440\u0435\u0434\u043F\u043E\u0441\u044B\u043B\u043A\u0438 \u0434\u043B\u044F \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0445 \u043F\u043E\u0434\u0445\u043E\u0434\u043E\u0432."),
              createVNode("span", null, [
                createTextVNode("Alex Lee / "),
                createVNode("span", { class: "grey" }, "\u041E\u0441\u043D\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438")
              ])
            ]),
            createVNode("div", { class: "about-company__img" }, [
              createVNode("img", {
                src: _imports_0,
                alt: ""
              })
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MainAboutCompany.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8], ["__scopeId", "data-v-35c68279"]]);
const _sfc_main$7 = {
  props: {
    newsCard: {
      type: Object,
      default: () => {
      }
    },
    isImgLeft: {
      type: Boolean,
      default: false
    }
  }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$2;
  if ($props.newsCard.img_left) {
    _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-news-card" }, _attrs))}><div class="main-news-card__img"><img${ssrRenderAttr("src", $props.newsCard.image)} alt=""></div><div class="main-news-card__content"><h3 class="main-news-card__title">${ssrInterpolate($props.newsCard.title)}</h3><div class="main-news-card__text">${$props.newsCard.text}</div>`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      class: "main-news-card__link",
      to: "#"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435`);
        } else {
          return [
            createTextVNode("\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div></div>`);
  } else {
    _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-news-card" }, _attrs))}><div class="main-news-card__content"><h3 class="main-news-card__title">${ssrInterpolate($props.newsCard.title)}</h3><div class="main-news-card__text">${$props.newsCard.text}</div>`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      class: "main-news-card__link",
      to: "#"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435`);
        } else {
          return [
            createTextVNode("\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div><div class="main-news-card__img"><img${ssrRenderAttr("src", $props.newsCard.image)} alt=""></div></div>`);
  }
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MainNewsCard.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$6 = {
  props: {
    newsList: {
      type: Array,
      default: () => []
    }
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_main_news_card = __nuxt_component_0;
  _push(`<ul${ssrRenderAttrs(mergeProps({ class: "main-news-list" }, _attrs))} data-v-1366c1b5><!--[-->`);
  ssrRenderList($props.newsList, (newsItem, index2) => {
    _push(`<li class="main-news-list__item" data-v-1366c1b5>`);
    _push(ssrRenderComponent(_component_main_news_card, { "news-card": newsItem }, null, _parent));
    _push(`</li>`);
  });
  _push(`<!--]--></ul>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MainNewsList.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6], ["__scopeId", "data-v-1366c1b5"]]);
const _sfc_main$5 = {
  props: {
    newsList: {
      type: Array,
      default: () => []
    }
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_the_section = __nuxt_component_1$2;
  const _component_app_title = __nuxt_component_3;
  const _component_main_news_list = __nuxt_component_2$1;
  _push(ssrRenderComponent(_component_the_section, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_app_title, {
          link: "",
          "link-text": "\u0432\u0441\u0435 \u043D\u043E\u0432\u043E\u0441\u0442\u0438",
          url: "/news/"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`\u041D\u043E\u0432\u043E\u0441\u0442\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438`);
            } else {
              return [
                createTextVNode("\u041D\u043E\u0432\u043E\u0441\u0442\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_main_news_list, { "news-list": $props.newsList }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_app_title, {
            link: "",
            "link-text": "\u0432\u0441\u0435 \u043D\u043E\u0432\u043E\u0441\u0442\u0438",
            url: "/news/"
          }, {
            default: withCtx(() => [
              createTextVNode("\u041D\u043E\u0432\u043E\u0441\u0442\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438")
            ]),
            _: 1
          }),
          createVNode(_component_main_news_list, { "news-list": $props.newsList }, null, 8, ["news-list"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MainNews.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$4 = {
  props: {
    acc: {
      type: Object,
      default: () => {
      }
    }
  },
  data() {
    return {
      isOpen: false
    };
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_svg_icon = _sfc_main$a;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "accordion" }, _attrs))} data-v-d58cc346><button class="accordion__btn" data-v-d58cc346><span data-v-d58cc346>${ssrInterpolate($props.acc.title)}</span>`);
  _push(ssrRenderComponent(_component_svg_icon, {
    name: $data.isOpen ? "remove-minus" : "add-plus",
    width: "24",
    height: "24"
  }, null, _parent));
  _push(`</button>`);
  if ($data.isOpen) {
    _push(`<div class="accordion__content" data-v-d58cc346><div data-v-d58cc346>${$props.acc.text}</div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Accordion.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-d58cc346"]]);
const _sfc_main$3 = {
  props: {
    accList: {
      type: Array,
      default: () => []
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_the_section = __nuxt_component_1$2;
  const _component_app_title = __nuxt_component_3;
  const _component_ui_accordion = __nuxt_component_2;
  _push(ssrRenderComponent(_component_the_section, mergeProps({ class: "main-accordion" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_app_title, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`\u0427\u0430\u0441\u0442\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B`);
            } else {
              return [
                createTextVNode("\u0427\u0430\u0441\u0442\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<ul class="main-accordion__list" data-v-99548e15${_scopeId}><!--[-->`);
        ssrRenderList($props.accList, (item, index2) => {
          _push2(`<li class="main-accordion__item" data-v-99548e15${_scopeId}>`);
          _push2(ssrRenderComponent(_component_ui_accordion, { acc: item }, null, _parent2, _scopeId));
          _push2(`</li>`);
        });
        _push2(`<!--]--></ul>`);
      } else {
        return [
          createVNode(_component_app_title, null, {
            default: withCtx(() => [
              createTextVNode("\u0427\u0430\u0441\u0442\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B")
            ]),
            _: 1
          }),
          createVNode("ul", { class: "main-accordion__list" }, [
            (openBlock(true), createBlock(Fragment, null, renderList($props.accList, (item, index2) => {
              return openBlock(), createBlock("li", {
                class: "main-accordion__item",
                key: index2
              }, [
                createVNode(_component_ui_accordion, { acc: item }, null, 8, ["acc"])
              ]);
            }), 128))
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MainAccordion.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-99548e15"]]);
const _sfc_main$2 = {
  props: {
    label: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: ""
    },
    id: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      value: ""
    };
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "input" }, _attrs))} data-v-2dc26ace><label${ssrRenderAttr("for", $props.id)} class="input__label" data-v-2dc26ace>${ssrInterpolate($props.label)}</label><input${ssrRenderAttr("type", $props.type)}${ssrRenderAttr("id", $props.id)}${ssrRenderDynamicModel($props.type, $data.value, null)}${ssrRenderAttr("placeholder", $props.placeholder)} class="input__field" data-v-2dc26ace></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Input.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-2dc26ace"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_the_section = __nuxt_component_1$2;
  const _component_ui_input = __nuxt_component_1;
  const _component_ui_button = __nuxt_component_0$1;
  _push(ssrRenderComponent(_component_the_section, mergeProps({ class: "subscribe" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="subscribe__content" data-v-28eb084b${_scopeId}><div class="subscribe__text" data-v-28eb084b${_scopeId}><h2 class="h2" data-v-28eb084b${_scopeId}>\u041F\u043E\u0434\u043F\u0438\u0448\u0438\u0442\u0435\u0441\u044C</h2><p data-v-28eb084b${_scopeId}>\u0418 \u0431\u0443\u0434\u044C\u0442\u0435 \u0432 \u043A\u0443\u0440\u0441\u0435 \u043D\u043E\u0432\u043E\u0441\u0442\u0435\u0439 \u0438 \u0430\u043A\u0446\u0438\u0439</p></div><form class="subscribe__form" data-v-28eb084b${_scopeId}>`);
        _push2(ssrRenderComponent(_component_ui_input, {
          label: "E-mail",
          id: "email",
          type: "email",
          placeholder: "example@mail.com"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_ui_button, { type: "submit" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`\u041F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F`);
            } else {
              return [
                createTextVNode("\u041F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</form></div>`);
      } else {
        return [
          createVNode("div", { class: "subscribe__content" }, [
            createVNode("div", { class: "subscribe__text" }, [
              createVNode("h2", { class: "h2" }, "\u041F\u043E\u0434\u043F\u0438\u0448\u0438\u0442\u0435\u0441\u044C"),
              createVNode("p", null, "\u0418 \u0431\u0443\u0434\u044C\u0442\u0435 \u0432 \u043A\u0443\u0440\u0441\u0435 \u043D\u043E\u0432\u043E\u0441\u0442\u0435\u0439 \u0438 \u0430\u043A\u0446\u0438\u0439")
            ]),
            createVNode("form", { class: "subscribe__form" }, [
              createVNode(_component_ui_input, {
                label: "E-mail",
                id: "email",
                type: "email",
                placeholder: "example@mail.com"
              }),
              createVNode(_component_ui_button, { type: "submit" }, {
                default: withCtx(() => [
                  createTextVNode("\u041F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F")
                ]),
                _: 1
              })
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SubscribeForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_8 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-28eb084b"]]);
const _sfc_main = {
  data() {
    return {
      slides: [
        {
          url: "images/tools.jpg"
        },
        {
          url: "images/tools.jpg"
        },
        {
          url: "images/tools.jpg"
        }
      ],
      catalogNav: [
        {
          title: "\u0418\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
          url: "images/y-tools.jpg",
          link: "/catalog/tools/",
          span: false
        },
        {
          title: "\u042D\u043B\u0435\u043A\u0442\u0440\u0438\u043A\u0430",
          url: "images/y-tools.jpg",
          link: "/catalog/electric/",
          span: false
        },
        {
          title: "\u0421\u0430\u043D\u0442\u0435\u0445\u043D\u0438\u043A\u0430",
          url: "images/y-tools.jpg",
          link: "/catalog/",
          span: false
        },
        {
          title: "\u0418\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
          url: "images/y-tools.jpg",
          link: "/catalog/",
          span: false
        },
        {
          title: "\u042D\u043B\u0435\u043A\u0442\u0440\u0438\u043A\u0430",
          url: "images/y-tools.jpg",
          link: "/catalog/",
          span: false
        },
        {
          title: "\u0421\u0430\u043D\u0442\u0435\u0445\u043D\u0438\u043A\u0430",
          url: "images/y-tools.jpg",
          link: "/catalog/",
          span: false
        },
        {
          title: "\u0412\u0435\u0441\u044C \u043A\u0430\u0442\u0430\u043B\u043E\u0433",
          url: "images/y-tools.jpg",
          link: "/catalog/",
          span: true
        }
      ],
      saleCards: [
        {
          images: ["images/goods-item-1.jpg", "images/goods-item-1.jpg", "images/goods-item-1.jpg"],
          title: "\u041A\u043B\u0435\u0449\u0438 \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u0432\u043D\u044B\u0435 Sparta 250 \u043C\u043C",
          price: "150 \u20BD"
        },
        {
          images: ["images/goods-item-1.jpg", "images/goods-item-1.jpg", "images/goods-item-1.jpg"],
          title: "\u041A\u043B\u0435\u0449\u0438 \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u0432\u043D\u044B\u0435 Sparta 250 \u043C\u043C",
          price: "150 \u20BD"
        },
        {
          images: ["images/goods-item-1.jpg", "images/goods-item-1.jpg", "images/goods-item-1.jpg"],
          title: "\u041A\u043B\u0435\u0449\u0438 \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u0432\u043D\u044B\u0435 Sparta 250 \u043C\u043C",
          price: "150 \u20BD"
        },
        {
          images: ["images/goods-item-1.jpg", "images/goods-item-1.jpg", "images/goods-item-1.jpg"],
          title: "\u041A\u043B\u0435\u0449\u0438 \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u0432\u043D\u044B\u0435 Sparta 250 \u043C\u043C",
          price: "150 \u20BD"
        },
        {
          images: ["images/goods-item-1.jpg", "images/goods-item-1.jpg", "images/goods-item-1.jpg"],
          title: "\u041A\u043B\u0435\u0449\u0438 \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u0432\u043D\u044B\u0435 Sparta 250 \u043C\u043C",
          price: "150 \u20BD"
        }
      ],
      newCards: [
        {
          images: ["images/goods-item-1.jpg", "images/goods-item-1.jpg", "images/goods-item-1.jpg"],
          title: "\u041A\u043B\u0435\u0449\u0438 \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u0432\u043D\u044B\u0435 Sparta 250 \u043C\u043C",
          price: "150 \u20BD"
        },
        {
          images: ["images/goods-item-1.jpg", "images/goods-item-1.jpg", "images/goods-item-1.jpg"],
          title: "\u041A\u043B\u0435\u0449\u0438 \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u0432\u043D\u044B\u0435 Sparta 250 \u043C\u043C",
          price: "150 \u20BD"
        },
        {
          images: ["images/goods-item-1.jpg", "images/goods-item-1.jpg", "images/goods-item-1.jpg"],
          title: "\u041A\u043B\u0435\u0449\u0438 \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u0432\u043D\u044B\u0435 Sparta 250 \u043C\u043C",
          price: "150 \u20BD"
        },
        {
          images: ["images/goods-item-1.jpg", "images/goods-item-1.jpg", "images/goods-item-1.jpg"],
          title: "\u041A\u043B\u0435\u0449\u0438 \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u0432\u043D\u044B\u0435 Sparta 250 \u043C\u043C",
          price: "150 \u20BD"
        },
        {
          images: ["images/goods-item-1.jpg", "images/goods-item-1.jpg", "images/goods-item-1.jpg"],
          title: "\u041A\u043B\u0435\u0449\u0438 \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u0432\u043D\u044B\u0435 Sparta 250 \u043C\u043C",
          price: "150 \u20BD"
        }
      ],
      news: [
        {
          image: "images/work-tools.jpg",
          title: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u043D\u043E\u0432\u043E\u0441\u0442\u0438",
          text: "<p>\u0417\u0430\u0434\u0430\u0447\u0430 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438, \u0432 \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0436\u0435 \u0443\u0431\u0435\u0436\u0434\u0451\u043D\u043D\u043E\u0441\u0442\u044C \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u043E\u043F\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432, \u0432 \u0441\u0432\u043E\u0451\u043C \u043A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u043E\u043C \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0438, \u0434\u043E\u043F\u0443\u0441\u043A\u0430\u0435\u0442 \u0432\u043D\u0435\u0434\u0440\u0435\u043D\u0438\u0435 \u043A\u0430\u043A \u0441\u0430\u043C\u043E\u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u044B\u0445, \u0442\u0430\u043A \u0438 \u0432\u043D\u0435\u0448\u043D\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u044B\u0445 \u043A\u043E\u043D\u0446\u0435\u043F\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0445 \u0440\u0435\u0448\u0435\u043D\u0438\u0439.</p><p>\u0417\u0430\u0434\u0430\u0447\u0430 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438, \u0432 \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0436\u0435 \u0443\u0431\u0435\u0436\u0434\u0451\u043D\u043D\u043E\u0441\u0442\u044C \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u043E\u043F\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432, \u0432 \u0441\u0432\u043E\u0451\u043C \u043A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u043E\u043C \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0438, \u0434\u043E\u043F\u0443\u0441\u043A\u0430\u0435\u0442 \u0432\u043D\u0435\u0434\u0440\u0435\u043D\u0438\u0435 \u043A\u0430\u043A \u0441\u0430\u043C\u043E\u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u044B\u0445, \u0442\u0430\u043A \u0438 \u0432\u043D\u0435\u0448\u043D\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u044B\u0445 \u043A\u043E\u043D\u0446\u0435\u043F\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0445 \u0440\u0435\u0448\u0435\u043D\u0438\u0439.</p>",
          img_left: true
        },
        {
          image: "images/work-tools.jpg",
          title: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u043D\u043E\u0432\u043E\u0441\u0442\u0438",
          text: "<p>\u0417\u0430\u0434\u0430\u0447\u0430 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438, \u0432 \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0436\u0435 \u0443\u0431\u0435\u0436\u0434\u0451\u043D\u043D\u043E\u0441\u0442\u044C \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u043E\u043F\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432, \u0432 \u0441\u0432\u043E\u0451\u043C \u043A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u043E\u043C \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0438, \u0434\u043E\u043F\u0443\u0441\u043A\u0430\u0435\u0442 \u0432\u043D\u0435\u0434\u0440\u0435\u043D\u0438\u0435 \u043A\u0430\u043A \u0441\u0430\u043C\u043E\u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u044B\u0445, \u0442\u0430\u043A \u0438 \u0432\u043D\u0435\u0448\u043D\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u044B\u0445 \u043A\u043E\u043D\u0446\u0435\u043F\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0445 \u0440\u0435\u0448\u0435\u043D\u0438\u0439.</p>",
          img_left: false
        },
        {
          image: "images/work-tools.jpg",
          title: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u043D\u043E\u0432\u043E\u0441\u0442\u0438",
          text: "<p>\u0417\u0430\u0434\u0430\u0447\u0430 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438, \u0432 \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0436\u0435 \u0443\u0431\u0435\u0436\u0434\u0451\u043D\u043D\u043E\u0441\u0442\u044C \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u043E\u043F\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432, \u0432 \u0441\u0432\u043E\u0451\u043C \u043A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u043E\u043C \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0438, \u0434\u043E\u043F\u0443\u0441\u043A\u0430\u0435\u0442 \u0432\u043D\u0435\u0434\u0440\u0435\u043D\u0438\u0435 \u043A\u0430\u043A \u0441\u0430\u043C\u043E\u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u044B\u0445, \u0442\u0430\u043A \u0438 \u0432\u043D\u0435\u0448\u043D\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u044B\u0445 \u043A\u043E\u043D\u0446\u0435\u043F\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0445 \u0440\u0435\u0448\u0435\u043D\u0438\u0439.</p>",
          img_left: true
        }
      ],
      acc_list: [
        {
          title: "\u0412\u043E\u043F\u0440\u043E\u0441 1",
          text: "<p>\u0412\u043E\u0442 \u0432\u0430\u043C \u044F\u0440\u043A\u0438\u0439 \u043F\u0440\u0438\u043C\u0435\u0440 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445 \u0442\u0435\u043D\u0434\u0435\u043D\u0446\u0438\u0439 \u2014 \u0431\u0430\u0437\u043E\u0432\u044B\u0439 \u0432\u0435\u043A\u0442\u043E\u0440 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u0430\u043D\u0430\u043B\u0438\u0437\u0430 \u043F\u043E\u0437\u0438\u0446\u0438\u0439, \u0437\u0430\u043D\u0438\u043C\u0430\u0435\u043C\u044B\u0445 \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0430\u043C\u0438 \u0432 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0438 \u043F\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0445 \u0437\u0430\u0434\u0430\u0447. \u0422\u0430\u043A\u0438\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C, \u0433\u043B\u0443\u0431\u043E\u043A\u0438\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u043F\u043E\u0433\u0440\u0443\u0436\u0435\u043D\u0438\u044F \u043E\u0434\u043D\u043E\u0437\u043D\u0430\u0447\u043D\u043E \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u0442 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0430 \u043A\u0430\u043A \u0441\u043F\u043E\u0441\u043E\u0431\u043D\u043E\u0433\u043E \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0442\u044C \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u043A\u0430\u0441\u0430\u0435\u043C\u043E \u0431\u043B\u0430\u0433\u043E\u043F\u0440\u0438\u044F\u0442\u043D\u044B\u0445 \u043F\u0435\u0440\u0441\u043F\u0435\u043A\u0442\u0438\u0432.</p>"
        },
        {
          title: "\u0412\u043E\u043F\u0440\u043E\u0441 2",
          text: "<p>\u0417\u0430\u0434\u0430\u0447\u0430 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438, \u0432 \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0436\u0435 \u0443\u0431\u0435\u0436\u0434\u0451\u043D\u043D\u043E\u0441\u0442\u044C \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u043E\u043F\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432, \u0432 \u0441\u0432\u043E\u0451\u043C \u043A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u043E\u043C \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0438, \u0434\u043E\u043F\u0443\u0441\u043A\u0430\u0435\u0442 \u0432\u043D\u0435\u0434\u0440\u0435\u043D\u0438\u0435 \u043A\u0430\u043A \u0441\u0430\u043C\u043E\u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u044B\u0445, \u0442\u0430\u043A \u0438 \u0432\u043D\u0435\u0448\u043D\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u044B\u0445 \u043A\u043E\u043D\u0446\u0435\u043F\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0445 \u0440\u0435\u0448\u0435\u043D\u0438\u0439. </p>"
        },
        {
          title: "\u0412\u043E\u043F\u0440\u043E\u0441 3",
          text: "<p>\u0412\u043E\u0442 \u0432\u0430\u043C \u044F\u0440\u043A\u0438\u0439 \u043F\u0440\u0438\u043C\u0435\u0440 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445 \u0442\u0435\u043D\u0434\u0435\u043D\u0446\u0438\u0439 \u2014 \u0431\u0430\u0437\u043E\u0432\u044B\u0439 \u0432\u0435\u043A\u0442\u043E\u0440 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u0430\u043D\u0430\u043B\u0438\u0437\u0430 \u043F\u043E\u0437\u0438\u0446\u0438\u0439, \u0437\u0430\u043D\u0438\u043C\u0430\u0435\u043C\u044B\u0445 \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0430\u043C\u0438 \u0432 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0438 \u043F\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0445 \u0437\u0430\u0434\u0430\u0447. \u0422\u0430\u043A\u0438\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C, \u0433\u043B\u0443\u0431\u043E\u043A\u0438\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u043F\u043E\u0433\u0440\u0443\u0436\u0435\u043D\u0438\u044F \u043E\u0434\u043D\u043E\u0437\u043D\u0430\u0447\u043D\u043E \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u0442 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0430 \u043A\u0430\u043A \u0441\u043F\u043E\u0441\u043E\u0431\u043D\u043E\u0433\u043E \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0442\u044C \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u043A\u0430\u0441\u0430\u0435\u043C\u043E \u0431\u043B\u0430\u0433\u043E\u043F\u0440\u0438\u044F\u0442\u043D\u044B\u0445 \u043F\u0435\u0440\u0441\u043F\u0435\u043A\u0442\u0438\u0432.</p>"
        }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_the_section = __nuxt_component_1$2;
  const _component_main_slider = __nuxt_component_1$1;
  const _component_catalog_nav = __nuxt_component_2$2;
  const _component_app_title = __nuxt_component_3;
  const _component_product_slider = __nuxt_component_4;
  const _component_main_about_company = __nuxt_component_5;
  const _component_main_news = __nuxt_component_6;
  const _component_main_accordion = __nuxt_component_7;
  const _component_subscribe_form = __nuxt_component_8;
  _push(`<main${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_the_section, {
    class: "main-slider",
    wide: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_main_slider, { "main-slides": $data.slides }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_main_slider, { "main-slides": $data.slides }, null, 8, ["main-slides"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_the_section, { class: "catalog-nav" }, {
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
  _push(ssrRenderComponent(_component_the_section, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_app_title, {
          link: "",
          "link-text": "\u0432\u0441\u0435 \u0430\u043A\u0446\u0438\u0438"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`\u0422\u043E\u0432\u0430\u0440\u044B \u043F\u043E \u0430\u043A\u0446\u0438\u0438 / \u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u043E\u0435`);
            } else {
              return [
                createTextVNode("\u0422\u043E\u0432\u0430\u0440\u044B \u043F\u043E \u0430\u043A\u0446\u0438\u0438 / \u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u043E\u0435")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_product_slider, { cards: $data.saleCards }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_app_title, {
            link: "",
            "link-text": "\u0432\u0441\u0435 \u0430\u043A\u0446\u0438\u0438"
          }, {
            default: withCtx(() => [
              createTextVNode("\u0422\u043E\u0432\u0430\u0440\u044B \u043F\u043E \u0430\u043A\u0446\u0438\u0438 / \u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u043E\u0435")
            ]),
            _: 1
          }),
          createVNode(_component_product_slider, { cards: $data.saleCards }, null, 8, ["cards"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_the_section, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_app_title, {
          link: "",
          "link-text": "\u0432\u0441\u0435 \u043D\u043E\u0432\u0438\u043D\u043A\u0438"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`\u041D\u043E\u0432\u0438\u043D\u043A\u0438`);
            } else {
              return [
                createTextVNode("\u041D\u043E\u0432\u0438\u043D\u043A\u0438")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_product_slider, { cards: $data.newCards }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_app_title, {
            link: "",
            "link-text": "\u0432\u0441\u0435 \u043D\u043E\u0432\u0438\u043D\u043A\u0438"
          }, {
            default: withCtx(() => [
              createTextVNode("\u041D\u043E\u0432\u0438\u043D\u043A\u0438")
            ]),
            _: 1
          }),
          createVNode(_component_product_slider, { cards: $data.newCards }, null, 8, ["cards"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_main_about_company, null, null, _parent));
  _push(ssrRenderComponent(_component_main_news, { "news-list": $data.news }, null, _parent));
  _push(ssrRenderComponent(_component_main_accordion, { "acc-list": $data.acc_list }, null, _parent));
  _push(ssrRenderComponent(_component_subscribe_form, null, null, _parent));
  _push(`</main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-C4kq0FS5.mjs.map
