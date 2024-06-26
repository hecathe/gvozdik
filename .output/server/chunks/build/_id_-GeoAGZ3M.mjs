import { _ as __nuxt_component_0 } from './Breadcrumbs-CwrKlUWl.mjs';
import { _ as __nuxt_component_0$1 } from './TheSection-55IjZ0Ou.mjs';
import { _ as __nuxt_component_2 } from './ContainerNarrow-DGEX011r.mjs';
import { _ as __nuxt_component_2$1 } from './SocialList-Zcdo9BAY.mjs';
import { mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
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
          link: "/news/",
          title: "\u041D\u043E\u0432\u043E\u0441\u0442\u0438",
          active: false
        },
        {
          link: "#",
          title: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u043D\u043E\u0432\u043E\u0441\u0442\u0438",
          active: true
        }
      ],
      content: {
        title: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u043D\u043E\u0432\u043E\u0441\u0442\u0438",
        text: '<p>\u041D\u043E \u0438\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0435 \u043F\u0440\u043E\u0442\u043E\u0442\u0438\u043F\u044B \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u044E\u0442 \u0441\u043E\u0431\u043E\u0439 \u043D\u0435 \u0447\u0442\u043E \u0438\u043D\u043E\u0435, \u043A\u0430\u043A \u043A\u0432\u0438\u043D\u0442\u044D\u0441\u0441\u0435\u043D\u0446\u0438\u044E \u043F\u043E\u0431\u0435\u0434\u044B \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u0430 \u043D\u0430\u0434 \u0440\u0430\u0437\u0443\u043C\u043E\u043C \u0438 \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u0441\u0432\u043E\u0435\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E \u0432\u0435\u0440\u0438\u0444\u0438\u0446\u0438\u0440\u043E\u0432\u0430\u043D\u044B. \u0411\u0430\u043D\u0430\u043B\u044C\u043D\u044B\u0435, \u043D\u043E \u043D\u0435\u043E\u043F\u0440\u043E\u0432\u0435\u0440\u0436\u0438\u043C\u044B\u0435 \u0432\u044B\u0432\u043E\u0434\u044B, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043D\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u044B\u0435 \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0430 \u043E\u0441\u0432\u0435\u0449\u0430\u044E\u0442 \u0447\u0440\u0435\u0437\u0432\u044B\u0447\u0430\u0439\u043D\u043E \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u044B\u0435 \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u043A\u0430\u0440\u0442\u0438\u043D\u044B \u0432 \u0446\u0435\u043B\u043E\u043C, \u043E\u0434\u043D\u0430\u043A\u043E \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u044B\u0435 \u0432\u044B\u0432\u043E\u0434\u044B, \u0440\u0430\u0437\u0443\u043C\u0435\u0435\u0442\u0441\u044F, \u0430\u0441\u0441\u043E\u0446\u0438\u0430\u0442\u0438\u0432\u043D\u043E \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u044B \u043F\u043E \u043E\u0442\u0440\u0430\u0441\u043B\u044F\u043C. \u041A\u0430\u0440\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0441\u0433\u043E\u0432\u043E\u0440\u044B \u043D\u0435 \u0434\u043E\u043F\u0443\u0441\u043A\u0430\u044E\u0442 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0438, \u043F\u0440\u0438 \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u0441\u0442\u043E\u0440\u043E\u043D\u043D\u0438\u043A\u0438 \u0442\u043E\u0442\u0430\u043B\u0438\u0442\u0430\u0440\u0438\u0437\u043C\u0430 \u0432 \u043D\u0430\u0443\u043A\u0435 \u043B\u0438\u0448\u044C \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u044E\u0442 \u0444\u0440\u0430\u043A\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u0440\u0430\u0437\u043D\u043E\u0433\u043B\u0430\u0441\u0438\u0439 \u0438 \u043E\u0431\u044A\u0435\u0434\u0438\u043D\u0435\u043D\u044B \u0432 \u0446\u0435\u043B\u044B\u0435 \u043A\u043B\u0430\u0441\u0442\u0435\u0440\u044B \u0441\u0435\u0431\u0435 \u043F\u043E\u0434\u043E\u0431\u043D\u044B\u0445. \u0412\u043E\u0442 \u0432\u0430\u043C \u044F\u0440\u043A\u0438\u0439 \u043F\u0440\u0438\u043C\u0435\u0440 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445 \u0442\u0435\u043D\u0434\u0435\u043D\u0446\u0438\u0439 \u2014 \u0443\u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u0435 \u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0435\u0439 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u044B \u043F\u0440\u0435\u0434\u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u0442 \u0432\u044B\u0441\u043E\u043A\u0443\u044E \u0432\u043E\u0441\u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u043D\u043E\u0441\u0442\u044C \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F \u043A\u0430\u0434\u0440\u043E\u0432, \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u0439 \u043D\u0430\u0441\u0443\u0449\u043D\u044B\u043C \u043F\u043E\u0442\u0440\u0435\u0431\u043D\u043E\u0441\u0442\u044F\u043C. \u0421\u043B\u043E\u0436\u043D\u043E \u0441\u043A\u0430\u0437\u0430\u0442\u044C, \u043F\u043E\u0447\u0435\u043C\u0443 \u0430\u043A\u0446\u0438\u043E\u043D\u0435\u0440\u044B \u043A\u0440\u0443\u043F\u043D\u0435\u0439\u0448\u0438\u0445 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439 \u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u043F\u0440\u0438\u0437\u0432\u0430\u043D\u044B \u043A \u043E\u0442\u0432\u0435\u0442\u0443. \u041F\u0440\u0435\u0436\u0434\u0435 \u0432\u0441\u0435\u0433\u043E, \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u0435 \u0443\u0440\u043E\u0432\u043D\u044F \u0433\u0440\u0430\u0436\u0434\u0430\u043D\u0441\u043A\u043E\u0433\u043E \u0441\u043E\u0437\u043D\u0430\u043D\u0438\u044F \u0441\u043E\u0437\u0434\u0430\u0451\u0442 \u043F\u0440\u0435\u0434\u043F\u043E\u0441\u044B\u043B\u043A\u0438 \u0434\u043B\u044F \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0445 \u043F\u043E\u0434\u0445\u043E\u0434\u043E\u0432.</p><p>\u041D\u043E \u0438\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0435 \u043F\u0440\u043E\u0442\u043E\u0442\u0438\u043F\u044B \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u044E\u0442 \u0441\u043E\u0431\u043E\u0439 \u043D\u0435 \u0447\u0442\u043E \u0438\u043D\u043E\u0435, \u043A\u0430\u043A \u043A\u0432\u0438\u043D\u0442\u044D\u0441\u0441\u0435\u043D\u0446\u0438\u044E \u043F\u043E\u0431\u0435\u0434\u044B \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u0430 \u043D\u0430\u0434 \u0440\u0430\u0437\u0443\u043C\u043E\u043C \u0438 \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u0441\u0432\u043E\u0435\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E \u0432\u0435\u0440\u0438\u0444\u0438\u0446\u0438\u0440\u043E\u0432\u0430\u043D\u044B. \u0411\u0430\u043D\u0430\u043B\u044C\u043D\u044B\u0435, \u043D\u043E \u043D\u0435\u043E\u043F\u0440\u043E\u0432\u0435\u0440\u0436\u0438\u043C\u044B\u0435 \u0432\u044B\u0432\u043E\u0434\u044B, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043D\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u044B\u0435 \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0430 \u043E\u0441\u0432\u0435\u0449\u0430\u044E\u0442 \u0447\u0440\u0435\u0437\u0432\u044B\u0447\u0430\u0439\u043D\u043E \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u044B\u0435 \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u043A\u0430\u0440\u0442\u0438\u043D\u044B \u0432 \u0446\u0435\u043B\u043E\u043C, \u043E\u0434\u043D\u0430\u043A\u043E \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u044B\u0435 \u0432\u044B\u0432\u043E\u0434\u044B, \u0440\u0430\u0437\u0443\u043C\u0435\u0435\u0442\u0441\u044F, \u0430\u0441\u0441\u043E\u0446\u0438\u0430\u0442\u0438\u0432\u043D\u043E \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u044B \u043F\u043E \u043E\u0442\u0440\u0430\u0441\u043B\u044F\u043C. \u041A\u0430\u0440\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0441\u0433\u043E\u0432\u043E\u0440\u044B \u043D\u0435 \u0434\u043E\u043F\u0443\u0441\u043A\u0430\u044E\u0442 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0438, \u043F\u0440\u0438 \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u0441\u0442\u043E\u0440\u043E\u043D\u043D\u0438\u043A\u0438 \u0442\u043E\u0442\u0430\u043B\u0438\u0442\u0430\u0440\u0438\u0437\u043C\u0430 \u0432 \u043D\u0430\u0443\u043A\u0435 \u043B\u0438\u0448\u044C \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u044E\u0442 \u0444\u0440\u0430\u043A\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u0440\u0430\u0437\u043D\u043E\u0433\u043B\u0430\u0441\u0438\u0439 \u0438 \u043E\u0431\u044A\u0435\u0434\u0438\u043D\u0435\u043D\u044B \u0432 \u0446\u0435\u043B\u044B\u0435 \u043A\u043B\u0430\u0441\u0442\u0435\u0440\u044B \u0441\u0435\u0431\u0435 \u043F\u043E\u0434\u043E\u0431\u043D\u044B\u0445. \u0412\u043E\u0442 \u0432\u0430\u043C \u044F\u0440\u043A\u0438\u0439 \u043F\u0440\u0438\u043C\u0435\u0440 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445 \u0442\u0435\u043D\u0434\u0435\u043D\u0446\u0438\u0439 \u2014 \u0443\u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u0435 \u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0435\u0439 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u044B \u043F\u0440\u0435\u0434\u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u0442 \u0432\u044B\u0441\u043E\u043A\u0443\u044E \u0432\u043E\u0441\u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u043D\u043E\u0441\u0442\u044C \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F \u043A\u0430\u0434\u0440\u043E\u0432, \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u0439 \u043D\u0430\u0441\u0443\u0449\u043D\u044B\u043C \u043F\u043E\u0442\u0440\u0435\u0431\u043D\u043E\u0441\u0442\u044F\u043C. \u0421\u043B\u043E\u0436\u043D\u043E \u0441\u043A\u0430\u0437\u0430\u0442\u044C, \u043F\u043E\u0447\u0435\u043C\u0443 \u0430\u043A\u0446\u0438\u043E\u043D\u0435\u0440\u044B \u043A\u0440\u0443\u043F\u043D\u0435\u0439\u0448\u0438\u0445 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439 \u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u043F\u0440\u0438\u0437\u0432\u0430\u043D\u044B \u043A \u043E\u0442\u0432\u0435\u0442\u0443. \u041F\u0440\u0435\u0436\u0434\u0435 \u0432\u0441\u0435\u0433\u043E, \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u0435 \u0443\u0440\u043E\u0432\u043D\u044F \u0433\u0440\u0430\u0436\u0434\u0430\u043D\u0441\u043A\u043E\u0433\u043E \u0441\u043E\u0437\u043D\u0430\u043D\u0438\u044F \u0441\u043E\u0437\u0434\u0430\u0451\u0442 \u043F\u0440\u0435\u0434\u043F\u043E\u0441\u044B\u043B\u043A\u0438 \u0434\u043B\u044F \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0445 \u043F\u043E\u0434\u0445\u043E\u0434\u043E\u0432.</p><span>Alex Lee / <span class="grey">\u041E\u0441\u043D\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438</span></span>',
        images: [
          "../../images/tools-store.jpg",
          "../../images/tools-store.jpg",
          "../../images/tools-store.jpg"
        ],
        date: "11/04/2024"
      },
      social: [
        {
          whatsapp: "#"
        },
        {
          telegram: "#"
        },
        {
          youtube: "#"
        },
        {
          vk: "#"
        }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_breadcrumbs = __nuxt_component_0;
  const _component_the_section = __nuxt_component_0$1;
  const _component_container_narrow = __nuxt_component_2;
  const _component_social_list = __nuxt_component_2$1;
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "main" }, _attrs))} data-v-823f56fb>`);
  _push(ssrRenderComponent(_component_app_breadcrumbs, { breadcrumbs: $data.breadcrumbs }, null, _parent));
  _push(ssrRenderComponent(_component_the_section, { class: "news-detail" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_container_narrow, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="news-detail__top" data-v-823f56fb${_scopeId2}><h1 class="news-detail__title h1" data-v-823f56fb${_scopeId2}>${ssrInterpolate($data.content.title)}</h1><div class="news-detail__social" data-v-823f56fb${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_social_list, {
                "social-list": $data.social,
                vertical: "",
                blue: ""
              }, null, _parent3, _scopeId2));
              _push3(`</div><span class="news-detail__date grey" data-v-823f56fb${_scopeId2}>${ssrInterpolate($data.content.date)}</span></div><div class="news-detail__text" data-v-823f56fb${_scopeId2}>${$data.content.text}</div>`);
            } else {
              return [
                createVNode("div", { class: "news-detail__top" }, [
                  createVNode("h1", { class: "news-detail__title h1" }, toDisplayString($data.content.title), 1),
                  createVNode("div", { class: "news-detail__social" }, [
                    createVNode(_component_social_list, {
                      "social-list": $data.social,
                      vertical: "",
                      blue: ""
                    }, null, 8, ["social-list"])
                  ]),
                  createVNode("span", { class: "news-detail__date grey" }, toDisplayString($data.content.date), 1)
                ]),
                createVNode("div", {
                  class: "news-detail__text",
                  innerHTML: $data.content.text
                }, null, 8, ["innerHTML"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<swiper-container class="news-detail__slider news-detail-slider" navigation="true" data-v-823f56fb${_scopeId}><!--[-->`);
        ssrRenderList($data.content.images, (image, index) => {
          _push2(`<swiper-slide class="news-detail-slider__item" data-v-823f56fb${_scopeId}><img class="news-detail-slider__img"${ssrRenderAttr("src", image)} alt="" data-v-823f56fb${_scopeId}></swiper-slide>`);
        });
        _push2(`<!--]--></swiper-container>`);
      } else {
        return [
          createVNode(_component_container_narrow, null, {
            default: withCtx(() => [
              createVNode("div", { class: "news-detail__top" }, [
                createVNode("h1", { class: "news-detail__title h1" }, toDisplayString($data.content.title), 1),
                createVNode("div", { class: "news-detail__social" }, [
                  createVNode(_component_social_list, {
                    "social-list": $data.social,
                    vertical: "",
                    blue: ""
                  }, null, 8, ["social-list"])
                ]),
                createVNode("span", { class: "news-detail__date grey" }, toDisplayString($data.content.date), 1)
              ]),
              createVNode("div", {
                class: "news-detail__text",
                innerHTML: $data.content.text
              }, null, 8, ["innerHTML"])
            ]),
            _: 1
          }),
          createVNode("swiper-container", {
            class: "news-detail__slider news-detail-slider",
            navigation: "true"
          }, [
            (openBlock(true), createBlock(Fragment, null, renderList($data.content.images, (image, index) => {
              return openBlock(), createBlock("swiper-slide", {
                class: "news-detail-slider__item",
                key: index
              }, [
                createVNode("img", {
                  class: "news-detail-slider__img",
                  src: image,
                  alt: ""
                }, null, 8, ["src"])
              ]);
            }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/news/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-823f56fb"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-GeoAGZ3M.mjs.map
