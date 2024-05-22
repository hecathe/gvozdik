import { _ as __nuxt_component_0$1 } from './Breadcrumbs-J2LYRQzJ.mjs';
import { _ as __nuxt_component_0$2 } from './TheSection-mbyzIumG.mjs';
import { defineComponent, ref, provide, createElementBlock, useSSRContext, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_1 } from './Input-Dj4LeJ2f.mjs';
import { _ as __nuxt_component_2$1 } from './Button-DuwhWeWl.mjs';
import { _ as _imports_0 } from './virtual_public-DSBkGB97.mjs';
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

const clientOnlySymbol = Symbol.for("nuxt:client-only");
const __nuxt_component_2 = defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  // eslint-disable-next-line vue/require-prop-types
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    provide(clientOnlySymbol, true);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const _sfc_main$2 = {
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439..."
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "textarea" }, _attrs))} data-v-ea733459><label class="textarea__label"${ssrRenderAttr("for", $props.id)} data-v-ea733459>${ssrInterpolate($props.label)}</label><textarea class="textarea__field"${ssrRenderAttr("name", $props.name)}${ssrRenderAttr("id", $props.id)}${ssrRenderAttr("placeholder", $props.placeholder)} cols="10" rows="5" data-v-ea733459></textarea></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Textarea.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-ea733459"]]);
const _sfc_main$1 = {
  props: {
    formFields: {
      type: Array,
      default: () => []
    },
    btnText: {
      type: String,
      default: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ui_textarea = __nuxt_component_0;
  const _component_ui_input = __nuxt_component_1;
  const _component_ui_button = __nuxt_component_2$1;
  _push(`<form${ssrRenderAttrs(mergeProps({ class: "form" }, _attrs))} data-v-8d096029><ul class="form__list" data-v-8d096029><!--[-->`);
  ssrRenderList($props.formFields, (field, index) => {
    _push(`<li class="${ssrRenderClass([{ "form__item_full": field.full }, "form__item"])}" data-v-8d096029>`);
    if (field.textarea) {
      _push(ssrRenderComponent(_component_ui_textarea, {
        id: field.id,
        label: field.label,
        name: field.name,
        placeholder: field.placeholder
      }, null, _parent));
    } else {
      _push(ssrRenderComponent(_component_ui_input, {
        id: field.id,
        label: field.label,
        type: field.type,
        placeholder: field.placeholder
      }, null, _parent));
    }
    _push(`</li>`);
  });
  _push(`<!--]--></ul>`);
  _push(ssrRenderComponent(_component_ui_button, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate($props.btnText)}`);
      } else {
        return [
          createTextVNode(toDisplayString($props.btnText), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</form>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/Form.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-8d096029"]]);
const _sfc_main = {
  data() {
    return {
      coordinates: [59.953424, 30.306071],
      controls: ["fullscreenControl"],
      detailedControls: {
        zoomControl: {
          position: { right: 10, top: 50 }
        }
      },
      breadcrumbs: [
        {
          link: "/",
          title: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F",
          active: false
        },
        {
          // link: '#',
          title: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B",
          active: true
        }
      ],
      form_fields: [
        {
          label: "\u0424\u0418\u041E",
          id: "fio",
          type: "text",
          placeholder: "Insert your name",
          full: true
        },
        {
          label: "\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430",
          id: "tel",
          type: "tel",
          placeholder: "+7 900 000 00 00"
        },
        {
          label: "E-mail",
          id: "email",
          type: "email",
          placeholder: "ivanov@ivan.com"
        },
        {
          label: "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439",
          id: "comment",
          name: "comment",
          placeholder: "Comment...",
          textarea: true,
          full: true
        }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_breadcrumbs = __nuxt_component_0$1;
  const _component_the_section = __nuxt_component_0$2;
  const _component_client_only = __nuxt_component_2;
  const _component_YandexMap = resolveComponent("YandexMap");
  const _component_app_form = __nuxt_component_3;
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "main" }, _attrs))} data-v-8f203c50>`);
  _push(ssrRenderComponent(_component_app_breadcrumbs, { breadcrumbs: $data.breadcrumbs }, null, _parent));
  _push(ssrRenderComponent(_component_the_section, { class: "contacts" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h1 class="h1" data-v-8f203c50${_scopeId}>\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B</h1><div class="contacts__map-wrap" data-v-8f203c50${_scopeId}><div class="contacts__map" data-v-8f203c50${_scopeId}>`);
        _push2(ssrRenderComponent(_component_client_only, null, {}, _parent2, _scopeId));
        _push2(`</div><div class="contacts__sidebar" data-v-8f203c50${_scopeId}><div class="contacts__block" data-v-8f203c50${_scopeId}><h3 class="h3" data-v-8f203c50${_scopeId}>\u041D\u0430\u0448 \u0430\u0434\u0440\u0435\u0441</h3><address class="contacts__link" data-v-8f203c50${_scopeId}>\u0433. \u0421\u0430\u043D\u043A\u0442-\u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433, \u0423\u043B. \u041F\u0443\u0448\u043A\u0438\u043D\u0430, \u0434. 1</address></div><div class="contacts__block" data-v-8f203c50${_scopeId}><h3 class="h3" data-v-8f203c50${_scopeId}>Call-\u0446\u0435\u043D\u0442\u0440</h3><a class="contacts__link" href="tel:8 800 555 55 55" data-v-8f203c50${_scopeId}>8 800 555 55 55</a></div><div class="contacts__block" data-v-8f203c50${_scopeId}><h3 class="h3" data-v-8f203c50${_scopeId}>\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430</h3><a class="contacts__link" href="mailto:example@mail.com" data-v-8f203c50${_scopeId}>example@mail.com</a></div></div></div>`);
      } else {
        return [
          createVNode("h1", { class: "h1" }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"),
          createVNode("div", { class: "contacts__map-wrap" }, [
            createVNode("div", { class: "contacts__map" }, [
              createVNode(_component_client_only, null, {
                default: withCtx(() => [
                  createVNode(_component_YandexMap, {
                    coordinates: $data.coordinates,
                    "detailed-controls": $data.detailedControls,
                    controls: $data.controls,
                    "map-type": "map"
                  }, null, 8, ["coordinates", "detailed-controls", "controls"])
                ]),
                _: 1
              })
            ]),
            createVNode("div", { class: "contacts__sidebar" }, [
              createVNode("div", { class: "contacts__block" }, [
                createVNode("h3", { class: "h3" }, "\u041D\u0430\u0448 \u0430\u0434\u0440\u0435\u0441"),
                createVNode("address", { class: "contacts__link" }, "\u0433. \u0421\u0430\u043D\u043A\u0442-\u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433, \u0423\u043B. \u041F\u0443\u0448\u043A\u0438\u043D\u0430, \u0434. 1")
              ]),
              createVNode("div", { class: "contacts__block" }, [
                createVNode("h3", { class: "h3" }, "Call-\u0446\u0435\u043D\u0442\u0440"),
                createVNode("a", {
                  class: "contacts__link",
                  href: "tel:8 800 555 55 55"
                }, "8 800 555 55 55")
              ]),
              createVNode("div", { class: "contacts__block" }, [
                createVNode("h3", { class: "h3" }, "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430"),
                createVNode("a", {
                  class: "contacts__link",
                  href: "mailto:example@mail.com"
                }, "example@mail.com")
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_the_section, { class: "contacts-form" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h2 class="h2" data-v-8f203c50${_scopeId}>\u0424\u043E\u0440\u043C\u0430 \u043E\u0431\u0440\u0430\u0442\u043D\u043E\u0439 \u0441\u0432\u044F\u0437\u0438</h2><div class="contacts-form__wrap" data-v-8f203c50${_scopeId}>`);
        _push2(ssrRenderComponent(_component_app_form, { "form-fields": $data.form_fields }, null, _parent2, _scopeId));
        _push2(`<div class="contacts-form__img" data-v-8f203c50${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-8f203c50${_scopeId}></div></div><p class="contacts-form__notice" data-v-8f203c50${_scopeId}>\u041D\u043E \u0438\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0435 \u043F\u0440\u043E\u0442\u043E\u0442\u0438\u043F\u044B \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u044E\u0442 \u0441\u043E\u0431\u043E\u0439 \u043D\u0435 \u0447\u0442\u043E \u0438\u043D\u043E\u0435, \u043A\u0430\u043A \u043A\u0432\u0438\u043D\u0442\u044D\u0441\u0441\u0435\u043D\u0446\u0438\u044E \u043F\u043E\u0431\u0435\u0434\u044B \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u0430 \u043D\u0430\u0434 \u0440\u0430\u0437\u0443\u043C\u043E\u043C \u0438 \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u0441\u0432\u043E\u0435\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E \u0432\u0435\u0440\u0438\u0444\u0438\u0446\u0438\u0440\u043E\u0432\u0430\u043D\u044B. \u0411\u0430\u043D\u0430\u043B\u044C\u043D\u044B\u0435, \u043D\u043E \u043D\u0435\u043E\u043F\u0440\u043E\u0432\u0435\u0440\u0436\u0438\u043C\u044B\u0435 \u0432\u044B\u0432\u043E\u0434\u044B, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043D\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u044B\u0435 \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0430 \u043E\u0441\u0432\u0435\u0449\u0430\u044E\u0442 \u0447\u0440\u0435\u0437\u0432\u044B\u0447\u0430\u0439\u043D\u043E \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u044B\u0435 \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u043A\u0430\u0440\u0442\u0438\u043D\u044B \u0432 \u0446\u0435\u043B\u043E\u043C, \u043E\u0434\u043D\u0430\u043A\u043E \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u044B\u0435 \u0432\u044B\u0432\u043E\u0434\u044B, \u0440\u0430\u0437\u0443\u043C\u0435\u0435\u0442\u0441\u044F, \u0430\u0441\u0441\u043E\u0446\u0438\u0430\u0442\u0438\u0432\u043D\u043E \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u044B \u043F\u043E \u043E\u0442\u0440\u0430\u0441\u043B\u044F\u043C.</p>`);
      } else {
        return [
          createVNode("h2", { class: "h2" }, "\u0424\u043E\u0440\u043C\u0430 \u043E\u0431\u0440\u0430\u0442\u043D\u043E\u0439 \u0441\u0432\u044F\u0437\u0438"),
          createVNode("div", { class: "contacts-form__wrap" }, [
            createVNode(_component_app_form, { "form-fields": $data.form_fields }, null, 8, ["form-fields"]),
            createVNode("div", { class: "contacts-form__img" }, [
              createVNode("img", {
                src: _imports_0,
                alt: ""
              })
            ])
          ]),
          createVNode("p", { class: "contacts-form__notice" }, "\u041D\u043E \u0438\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0435 \u043F\u0440\u043E\u0442\u043E\u0442\u0438\u043F\u044B \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u044E\u0442 \u0441\u043E\u0431\u043E\u0439 \u043D\u0435 \u0447\u0442\u043E \u0438\u043D\u043E\u0435, \u043A\u0430\u043A \u043A\u0432\u0438\u043D\u0442\u044D\u0441\u0441\u0435\u043D\u0446\u0438\u044E \u043F\u043E\u0431\u0435\u0434\u044B \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u0430 \u043D\u0430\u0434 \u0440\u0430\u0437\u0443\u043C\u043E\u043C \u0438 \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u0441\u0432\u043E\u0435\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E \u0432\u0435\u0440\u0438\u0444\u0438\u0446\u0438\u0440\u043E\u0432\u0430\u043D\u044B. \u0411\u0430\u043D\u0430\u043B\u044C\u043D\u044B\u0435, \u043D\u043E \u043D\u0435\u043E\u043F\u0440\u043E\u0432\u0435\u0440\u0436\u0438\u043C\u044B\u0435 \u0432\u044B\u0432\u043E\u0434\u044B, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043D\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u044B\u0435 \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0430 \u043E\u0441\u0432\u0435\u0449\u0430\u044E\u0442 \u0447\u0440\u0435\u0437\u0432\u044B\u0447\u0430\u0439\u043D\u043E \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u044B\u0435 \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u043A\u0430\u0440\u0442\u0438\u043D\u044B \u0432 \u0446\u0435\u043B\u043E\u043C, \u043E\u0434\u043D\u0430\u043A\u043E \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u044B\u0435 \u0432\u044B\u0432\u043E\u0434\u044B, \u0440\u0430\u0437\u0443\u043C\u0435\u0435\u0442\u0441\u044F, \u0430\u0441\u0441\u043E\u0446\u0438\u0430\u0442\u0438\u0432\u043D\u043E \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u044B \u043F\u043E \u043E\u0442\u0440\u0430\u0441\u043B\u044F\u043C.")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contacts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contacts = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-8f203c50"]]);

export { contacts as default };
//# sourceMappingURL=contacts-BtlzrN3W.mjs.map
