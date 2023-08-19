// import flow types
import "@cldcvr/flow-core/dist/types/react";
import "@cldcvr/flow-lineage/dist/types/react";

declare module "*.scss" {
  const content: Record<string, string>;
  export default content;
}

declare module "*.css" {
  const content: Record<string, string>;
  export default content;
}
