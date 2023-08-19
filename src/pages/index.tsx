import { FLineage } from "@/flow-elements";
import {
  LineageNodes,
  LineageNodeElement,
  LineageNodeLinks,
} from "@cldcvr/flow-lineage";
import { html } from "lit";
import { useState, useEffect } from "react";

export default function Home() {
  const [nodes, setNodes] = useState<LineageNodes>({});
  const [links, setLinks] = useState<LineageNodeLinks>([]);

  const nodeTemplate = function (node: LineageNodeElement) {
    return html`
      <f-div
        width="100%"
        state="secondary"
        height="100%"
        padding="small"
        align="top-left"
        variant="curved"
        gap="small"
      >
        <f-pictogram
          variant="circle"
          source="${node.fData?.fullName}"
        ></f-pictogram>
        <f-div direction="column">
          <f-text size="small" ellipsis>${node.fData?.fullName}</f-text>
          <f-text size="x-small" ellipsis>${node.fData?.description}</f-text>
        </f-div>
        ${node.childrenToggle}
      </f-div>
    `;
  };

  const childNodeTemplate = function (node: LineageNodeElement) {
    return html`
      <f-div
        state="secondary"
        width="100%"
        height="100%"
        padding="none medium"
        align="middle-left"
        gap="small"
        border="small solid default bottom"
      >
        <f-icon source="${node.fData?.icon}" size="small"></f-icon>
        <f-text size="small" ellipsis>${node.fData?.title}</f-text>
      </f-div>
    `;
  };

  useEffect(() => {
    setNodes({
      rdj: {
        fData: {
          fullName: "Robert Downey Jr.",
          description: "Movies",
        },
      },
      judge: {
        fData: {
          fullName: "The Judge",
          description: "Hank Palmer",
        },
      },
      ironman: {
        fData: {
          fullName: "Iron Man",
          description: "Tony stark",
        },
        fChildren: {
          irchild1: {
            fData: {
              icon: "i-hashtag",
              title: "Iron man 1",
            },
          },
          irchild2: {
            fData: {
              icon: "i-paragraph",
              title: "Iron man 2",
            },
          },
        },
        fHideChildren: false,
      },
    });
    setLinks([
      {
        from: "rdj",
        to: "judge",
      },
      {
        from: "rdj",
        to: "ironman",
      },
    ]);
  }, []);
  return (
    <>
      <FLineage
        direction="horizontal"
        padding={28}
        gap={100}
        node-size={{ width: 240, height: 53 }}
        children-node-size={{ width: 240, height: 32 }}
        max-childrens={8}
        links={links}
        nodes={nodes}
        node-template={nodeTemplate}
        children-node-template={childNodeTemplate}
      ></FLineage>
    </>
  );
}
