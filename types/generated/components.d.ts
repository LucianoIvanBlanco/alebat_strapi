import type { Schema, Attribute } from '@strapi/strapi';

export interface AlergenosAlergenos extends Schema.Component {
  collectionName: 'components_alergenos_alergenos';
  info: {
    displayName: 'Alergenos';
    icon: 'bulletList';
  };
  attributes: {
    ingrediente: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'alergenos.alergenos': AlergenosAlergenos;
    }
  }
}
