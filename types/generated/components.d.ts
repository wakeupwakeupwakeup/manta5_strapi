import type { Schema, Attribute } from '@strapi/strapi';

export interface FaqFaqItem extends Schema.Component {
  collectionName: 'components_faq_faq_items';
  info: {
    displayName: 'FAQItem';
    icon: 'question';
  };
  attributes: {
    question: Attribute.String & Attribute.Required & Attribute.Unique;
    answer: Attribute.Text & Attribute.Required & Attribute.Unique;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'faq.faq-item': FaqFaqItem;
    }
  }
}
