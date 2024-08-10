import { IHaveNodeEvents } from "../types/IHaveNodeEvents";
import { INode } from "../types/INode";

export interface ITreeProps extends IHaveNodeEvents {
  rootNode: INode;
}
