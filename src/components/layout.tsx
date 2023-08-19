import { ReactNode, useEffect, useState } from "react";

interface Props {
  children?: ReactNode;
}

export default function Layout({ children }: Props) {
  const [flowLoaded, setFlowLoaded] = useState(false);
  useEffect(() => {
    //load flow flow library on client side
    Promise.all([
      import("@cldcvr/flow-core"),
      //@ts-ignore
      import("@cldcvr/flow-core/dist/style.css"),
      import("@cldcvr/flow-lineage"),
      //@ts-ignore
      import("@cldcvr/flow-lineage/dist/style.css"),
      import("@cldcvr/flow-system-icon"),
    ]).then(() => {
      setFlowLoaded(true);
    });
  }, []);
  return (
    <>
      {flowLoaded ? (
        <>
          <f-div direction="column" height="100%" width="100%" state="default">
            <f-div
              height="53px"
              border="small solid default bottom"
              align="middle-left"
              padding="medium"
            >
              <f-text variant="heading">Flow lineage next</f-text>
            </f-div>
            <f-div id="content" direction="column">
              {children}
            </f-div>
          </f-div>
        </>
      ) : (
        <>Loading...</>
      )}
    </>
  );
}
