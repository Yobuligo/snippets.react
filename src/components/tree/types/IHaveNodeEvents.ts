import { INode } from "./INode";

export interface IHaveNodeEvents {
  onCollapseNode?: (node: INode) => void;
  onExpandNode?: (node: INode) => void;
  onSelectNode?: (node: INode) => void;
}
