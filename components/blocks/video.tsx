import * as React from "react";
import { Section } from "../section";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export const Video = ({ data, parentField = "" }) => {
  return (
    <Section>
      <div className="mx-auto max-w-desktop-full transform scale-110">
        <video width="1280" height="720" className="relative" autoPlay loop muted>
          <source src={`/uploads/${data.src}`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {data?.text?.children && (
        <div className={`mx-auto max-w-desktop-full text-center absolute top-1/2 transform -translate-y-1/2 ${data.padding} ${data.textStyles}`}>
          <TinaMarkdown content={data.text} />
        </div>
      )}
    </Section>
  );
};

export const videoBlockSchema: any = {
  label: "Video",
  name: "video",
  fields: [
    {
      label: "Video",
      name: "src",
      type: "string",
    },
    {
      label: "Overlay Text",
      name: "text",
      type: "rich-text",
    },
    {
      type: "string",
      label: "Text",
      name: "textStyles",
      ui: {
        component: "typeControl"
      }
    },
    {
      label: "Padding",
      name: "padding",
      type: "string",
      ui: {
        component: "paddingControl",
      }
    },
  ],
};