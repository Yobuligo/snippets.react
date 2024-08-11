import { IHaveNodeEvents } from "../types/IHaveNodeEvents";
import { INode } from "../types/INode";

export interface INodeProps extends IHaveNodeEvents {
  collapsed?: boolean;
  level: number;
  node: INode;
}
