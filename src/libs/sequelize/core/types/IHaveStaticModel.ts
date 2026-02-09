import { IHaveStaticAssociate } from "./IHaveStaticAssociate";
import { IHaveStaticInitModel } from "./IHaveStaticInitModel";

export type IHaveStaticModel = IHaveStaticInitModel & IHaveStaticAssociate;
