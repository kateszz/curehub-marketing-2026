import type { StructureResolver } from "sanity/structure";

/** Custom Studio menu: groups the two CMS collections under clear labels. */
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Team Members")
        .schemaType("teamMember")
        .child(
          S.documentTypeList("teamMember")
            .title("Team Members")
            .defaultOrdering([{ field: "ranking", direction: "asc" }])
        ),
      S.listItem()
        .title("Researchers")
        .schemaType("researcher")
        .child(S.documentTypeList("researcher").title("Researchers")),
    ]);
