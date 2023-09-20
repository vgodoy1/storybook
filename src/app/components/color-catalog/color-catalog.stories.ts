import { Meta, StoryObj } from '@storybook/angular';
import { ColorCatalogComponent } from './color-catalog.component';

const meta: Meta<ColorCatalogComponent> = {
  title: 'Catalog/Colors',
  component: ColorCatalogComponent,
  render: (args: ColorCatalogComponent) => ({
    props: {
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<ColorCatalogComponent>;

export const Principais: Story = {
  args: {
    colors: [
      {
        name: 'Marca',
        value: '#009DAF',
      },
      {
        name: 'Tipografia - Padrão',
        value: '#464646',
      },
      {
        name: 'Tipografia - Hiperlink',
        value: '#0079BE',
      },
      {
        name: 'Destaque - Apoio',
        value: '#FDAB30',
      },
      {
        name: 'Bordas - Apoio',
        value: '#E5E7EB',
      },
      {
        name: 'Background - Padrão',
        value: '#FFFFFF',
      },
      {
        name: 'Background - Elementos',
        value: '#56B684',
      },
      {
        name: 'Background - Apoio',
        value: '#008C99',
      },
    ],
  },
};

export const TonsDaMarca: Story = {
  args: {
    colors: [
      {
        name: '100%',
        value: '#009DAF',
        opacity: 1,
      },
      {
        name: '90%',
        value: '#009DAF',
        opacity: 0.9,
      },
      {
        name: '80%',
        value: '#009DAF',
        opacity: 0.8,
      },
      {
        name: '70%',
        value: '#009DAF',
        opacity: 0.7,
      },
      {
        name: '60%',
        value: '#009DAF',
        opacity: 0.6,
      },
      {
        name: '50%',
        value: '#009DAF',
        opacity: 0.5,
      },
      {
        name: '40%',
        value: '#009DAF',
        opacity: 0.4,
      },
      {
        name: '30%',
        value: '#009DAF',
        opacity: 0.3,
      },
      {
        name: '20%',
        value: '#009DAF',
        opacity: 0.2,
      },
      {
        name: '10%',
        value: '#009DAF',
        opacity: 0.1,
      },
    ],
  },
};
