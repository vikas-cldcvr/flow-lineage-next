import reactifyWc from "reactify-wc";
/**
 * This is React/Next specific
 * Flow components that accept objects need to be wrapped in reactifyWc.
 */

export const FLineage = reactifyWc(
  "f-lineage"
) as React.ForwardRefExoticComponent<JSX.IntrinsicElements["f-lineage"]>;
