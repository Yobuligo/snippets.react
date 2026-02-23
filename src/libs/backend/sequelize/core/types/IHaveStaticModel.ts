import { IHaveStaticAssociate } from "./IHaveStaticAssociate";
import { IHaveStaticInitModel } from "./IHaveStaticInitModel";

/**
 * Represents a model that can be initialized via static methods initModel and associate.
 */
export type IHaveStaticModel = IHaveStaticInitModel & IHaveStaticAssociate;
