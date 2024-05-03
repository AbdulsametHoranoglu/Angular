
import { Product } from "./Product";
import { ResponseModel } from "./responseModel";

export interface productResponseModel extends ResponseModel{
    data:Product[],
}