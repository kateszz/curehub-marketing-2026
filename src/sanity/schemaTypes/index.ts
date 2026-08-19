import { type SchemaTypeDefinition } from "sanity";
import { teamMember } from "./teamMember";
import { researcher } from "./researcher";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [teamMember, researcher],
};
