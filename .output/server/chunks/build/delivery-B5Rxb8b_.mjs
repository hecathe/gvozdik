import { _ as __nuxt_component_0 } from './Breadcrumbs-CwrKlUWl.mjs';
import { _ as __nuxt_component_0$1 } from './TheSection-55IjZ0Ou.mjs';
import { _ as __nuxt_component_2 } from './ContainerNarrow-DGEX011r.mjs';
import { _ as __nuxt_component_2$1 } from './AccordionList-CtcSws1c.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
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
          // link: '#',
          title: "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430",
          active: true
        }
      ],
      acc_list: [
        {
          title: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438",
          text: "<p>\u0412\u043E\u0442 \u0432\u0430\u043C \u044F\u0440\u043A\u0438\u0439 \u043F\u0440\u0438\u043C\u0435\u0440 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445 \u0442\u0435\u043D\u0434\u0435\u043D\u0446\u0438\u0439 \u2014 \u0431\u0430\u0437\u043E\u0432\u044B\u0439 \u0432\u0435\u043A\u0442\u043E\u0440 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u0430\u043D\u0430\u043B\u0438\u0437\u0430 \u043F\u043E\u0437\u0438\u0446\u0438\u0439, \u0437\u0430\u043D\u0438\u043C\u0430\u0435\u043C\u044B\u0445 \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0430\u043C\u0438 \u0432 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0438 \u043F\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0445 \u0437\u0430\u0434\u0430\u0447. \u0422\u0430\u043A\u0438\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C, \u0433\u043B\u0443\u0431\u043E\u043A\u0438\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u043F\u043E\u0433\u0440\u0443\u0436\u0435\u043D\u0438\u044F \u043E\u0434\u043D\u043E\u0437\u043D\u0430\u0447\u043D\u043E \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u0442 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0430 \u043A\u0430\u043A \u0441\u043F\u043E\u0441\u043E\u0431\u043D\u043E\u0433\u043E \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0442\u044C \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u043A\u0430\u0441\u0430\u0435\u043C\u043E \u0431\u043B\u0430\u0433\u043E\u043F\u0440\u0438\u044F\u0442\u043D\u044B\u0445 \u043F\u0435\u0440\u0441\u043F\u0435\u043A\u0442\u0438\u0432.</p>"
        },
        {
          title: "\u0412\u0440\u0435\u043C\u044F \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438",
          text: "<p>\u0417\u0430\u0434\u0430\u0447\u0430 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438, \u0432 \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0436\u0435 \u0443\u0431\u0435\u0436\u0434\u0451\u043D\u043D\u043E\u0441\u0442\u044C \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u043E\u043F\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432, \u0432 \u0441\u0432\u043E\u0451\u043C \u043A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u043E\u043C \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0438, \u0434\u043E\u043F\u0443\u0441\u043A\u0430\u0435\u0442 \u0432\u043D\u0435\u0434\u0440\u0435\u043D\u0438\u0435 \u043A\u0430\u043A \u0441\u0430\u043C\u043E\u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u044B\u0445, \u0442\u0430\u043A \u0438 \u0432\u043D\u0435\u0448\u043D\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u044B\u0445 \u043A\u043E\u043D\u0446\u0435\u043F\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0445 \u0440\u0435\u0448\u0435\u043D\u0438\u0439. </p> <ul><li>\u0412\u0440\u0435\u043C\u044F \u043D\u0430 \u043F\u043E\u0434\u044A\u0435\u043C \u043D\u0435 \u0432\u0445\u043E\u0434\u0438\u0442 \u0432 \u0438\u043D\u0442\u0435\u0440\u0432\u0430\u043B \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438</li><li>\u0412\u0440\u0435\u043C\u044F \u043D\u0430 \u043F\u043E\u0434\u044A\u0435\u043C \u043D\u0435 \u0432\u0445\u043E\u0434\u0438\u0442 \u0432 \u0438\u043D\u0442\u0435\u0440\u0432\u0430\u043B \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438</li><li>\u0412\u0440\u0435\u043C\u044F \u043D\u0430 \u043F\u043E\u0434\u044A\u0435\u043C \u043D\u0435 \u0432\u0445\u043E\u0434\u0438\u0442 \u0432 \u0438\u043D\u0442\u0435\u0440\u0432\u0430\u043B \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438</li></ul>"
        },
        {
          title: "\u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438",
          text: "<p>\u0412\u043E\u0442 \u0432\u0430\u043C \u044F\u0440\u043A\u0438\u0439 \u043F\u0440\u0438\u043C\u0435\u0440 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445 \u0442\u0435\u043D\u0434\u0435\u043D\u0446\u0438\u0439 \u2014 \u0431\u0430\u0437\u043E\u0432\u044B\u0439 \u0432\u0435\u043A\u0442\u043E\u0440 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u0430\u043D\u0430\u043B\u0438\u0437\u0430 \u043F\u043E\u0437\u0438\u0446\u0438\u0439, \u0437\u0430\u043D\u0438\u043C\u0430\u0435\u043C\u044B\u0445 \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0430\u043C\u0438 \u0432 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0438 \u043F\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0445 \u0437\u0430\u0434\u0430\u0447. \u0422\u0430\u043A\u0438\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C, \u0433\u043B\u0443\u0431\u043E\u043A\u0438\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u043F\u043E\u0433\u0440\u0443\u0436\u0435\u043D\u0438\u044F \u043E\u0434\u043D\u043E\u0437\u043D\u0430\u0447\u043D\u043E \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u0442 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0430 \u043A\u0430\u043A \u0441\u043F\u043E\u0441\u043E\u0431\u043D\u043E\u0433\u043E \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0442\u044C \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u043A\u0430\u0441\u0430\u0435\u043C\u043E \u0431\u043B\u0430\u0433\u043E\u043F\u0440\u0438\u044F\u0442\u043D\u044B\u0445 \u043F\u0435\u0440\u0441\u043F\u0435\u043A\u0442\u0438\u0432.</p>"
        }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_breadcrumbs = __nuxt_component_0;
  const _component_the_section = __nuxt_component_0$1;
  const _component_container_narrow = __nuxt_component_2;
  const _component_ui_accordion_list = __nuxt_component_2$1;
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "main" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_app_breadcrumbs, { breadcrumbs: $data.breadcrumbs }, null, _parent));
  _push(ssrRenderComponent(_component_the_section, { class: "delivery" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_container_narrow, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<h1 class="h1"${_scopeId2}>\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430</h1>`);
              _push3(ssrRenderComponent(_component_ui_accordion_list, { "acc-list": $data.acc_list }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode("h1", { class: "h1" }, "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430"),
                createVNode(_component_ui_accordion_list, { "acc-list": $data.acc_list }, null, 8, ["acc-list"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_container_narrow, null, {
            default: withCtx(() => [
              createVNode("h1", { class: "h1" }, "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430"),
              createVNode(_component_ui_accordion_list, { "acc-list": $data.acc_list }, null, 8, ["acc-list"])
            ]),
            _: 1
          })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/delivery.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const delivery = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { delivery as default };
//# sourceMappingURL=delivery-B5Rxb8b_.mjs.map
