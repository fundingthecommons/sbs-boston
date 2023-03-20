import React from "react";
import { Accordian } from "./blocks/accordian";
import { Cards } from "./blocks/cards";
import { Embed } from "./blocks/embed";
import { EventTimeline } from "./blocks/event-timeline";
import { Feature } from "./blocks/feature";
import { FullImage } from "./blocks/full-image";
import { Logos } from "./blocks/logos";
import { TailwindCards } from "./blocks/tailwind-cards";
import { TailwindFeature } from "./blocks/tailwind-feature";
import { Timeline } from "./blocks/timeline";
import { Video } from "./blocks/video";

export const Blocks = (props: any) => {
  return (
    <>
      {props.blocks
        ? props.blocks.map(function (block, i) {
            switch (block.__typename) {
              case "PageBlocksAccordian":
                return (
                  <div
                    data-tinafield={`blocks.${i}`}
                    key={i + block.__typename}
                  >
                    <Accordian data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case "PageBlocksCards":
                return (
                  <div
                    data-tinafield={`blocks.${i}`}
                    key={i + block.__typename}
                  >
                    <Cards data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case "PageBlocksEmbed":
                return (
                  <div
                    data-tinafield={`blocks.${i}`}
                    key={i + block.__typename}
                  >
                    <Embed data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case "PageBlocksEventTimeline":
                return (
                  <div
                    data-tinafield={`blocks.${i}`}
                    key={i + block.__typename}
                  >
                    <EventTimeline data={block} events={props.events} parentField={`blocks.${i}`} />
                  </div>
                );
              case "PageBlocksFeature":
                return (
                  <div
                    data-tinafield={`blocks.${i}`}
                    key={i + block.__typename}
                  >
                    <Feature data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case "PageBlocksFullImage":
                return (
                  <div
                    data-tinafield={`blocks.${i}`}
                    key={i + block.__typename}
                  >
                    <FullImage data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case "PageBlocksLogos":
                return (
                  <div
                    data-tinafield={`blocks.${i}`}
                    key={i + block.__typename}
                  >
                    <Logos data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case "PageBlocksTailwindCards":
                return (
                  <div
                    data-tinafield={`blocks.${i}`}
                    key={i + block.__typename}
                  >
                    <TailwindCards data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case "PageBlocksTailwindFeature":
                return (
                  <div
                    data-tinafield={`blocks.${i}`}
                    key={i + block.__typename}
                  >
                    <TailwindFeature data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case "PageBlocksTimeline":
                return (
                  <div
                    data-tinafield={`blocks.${i}`}
                    key={i + block.__typename}
                  >
                    <Timeline data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case "PageBlocksVideo":
                return (
                  <div
                    data-tinafield={`blocks.${i}`}
                    key={i + block.__typename}
                  >
                    <Video data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              default:
                return null;
              

              /* Footer Blocks */
              case "GlobalBlocksFeature":
                return (
                  <div
                    data-tinafield={`blocks.${i}`}
                    key={i + block.__typename}
                  >
                    <Feature data={block} parentField={`blocks.${i}`} />
                  </div>
                );
                case "GlobalBlocksCards":
                  return (
                    <div
                      data-tinafield={`blocks.${i}`}
                      key={i + block.__typename}
                    >
                      <Cards data={block} parentField={`blocks.${i}`} />
                    </div>
                  );
                case "GlobalBlocksEmbed":
                  return (
                    <div
                      data-tinafield={`blocks.${i}`}
                      key={i + block.__typename}
                    >
                      <Embed data={block} parentField={`blocks.${i}`} />
                    </div>
                  );
                case "GlobalBlocksTailwindFeature":
                  return (
                    <div
                      data-tinafield={`blocks.${i}`}
                      key={i + block.__typename}
                    >
                      <TailwindFeature data={block} parentField={`blocks.${i}`} />
                    </div>
                  );
                case "GlobalBlocksTailwindCards":
                  return (
                    <div
                      data-tinafield={`blocks.${i}`}
                      key={i + block.__typename}
                    >
                      <TailwindCards data={block} parentField={`blocks.${i}`} />
                    </div>
                  );
            }
          })
        : null}
    </>
  );
};
