import { Node } from "../node/Node";
import { ITreeProps } from "./ITreeProps";

export const Tree: React.FC<ITreeProps> = (props) => {
  return (
    <Node
      node={props.rootNode}
      level={0}
      onCollapseNode={(node) => props.onCollapseNode?.(node)}
      onExpandNode={(node) => props.onExpandNode?.(node)}
      onSelectNode={(node) => props.onSelectNode?.(node)}
    />
  );
};
