import { objectType } from "nexus";

export const ProductType = objectType({
  name: "Product",
  definition(t){
    t.nonNull.int("id"), t.nonNull.string("name"), t.nonNull.float("price");
  }
});