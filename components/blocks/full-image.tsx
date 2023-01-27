import * as React from "react";
import { Section } from "../section";
import { imageSchema } from "../../schema/image";

export const FullImage = ({ data, parentField = "" }) => {
  return (
    <Section
      background={data.background}
      navigationLabel={data.navigationLabel}
    >
      <img className="w-full h-auto" src={data.image?.src} />
    </Section>
  );
};

export const fullImageBlockSchema: any = {
  label: "Full Image",
  name: "fullImage",
  fields: [
    imageSchema,
  ],
};