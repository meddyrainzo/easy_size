export type AppProps = {
  attributes: string[];
  attributeType: string;
  selectAttribute: (attrId: string) => void;
  image: string;
};
