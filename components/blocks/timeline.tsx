import React from "react";
import { hasWord, getWordWith } from '../../helpers/utilities';
import { backgroundSchema } from "../../schema/background"
import { typographySchema } from "../../schema/typography";
import { navigationLabelSchema } from "../../schema/navigation-label";
import { Content } from "../content";
import { Section } from "../section";

const TimelineItem = ({ timeline, isActive, index, parentField = ""  }) => {
  const activeClass = !isActive ? 'hidden sm:block' : ''
  return (
    <div className={`timeline ${activeClass}`}>
      <h3 className="text-accent2 font-bold text-lg leading-5">{timeline.headline}</h3>
      <div className="text-accent2 mb-6">{timeline.subhead}</div>
      {timeline.events && (
        <div className="relative">
          <div className="absolute top-2 left-16 border-primary -ml-px border-l-2 h-full w-px sm:hidden"></div>
          { timeline.events.map(function (event, index) {
            return <div key={index}>
              <div className="flex sm:block gap-8 text-accent2 text-md font-bold">
                <div className="relative w-12 text-right sm:inline-block sm:w-auto sm:text-center sm:text-xs sm:rounded sm:border-2 sm:border-primary sm:px-1 sm:mb-2">
                  {event.time}
                  <div className="bg-primary w-2 h-2 absolute top-1.5 -right-5 sm:hidden"></div>
                </div>
                <div className="w-full flex-1 sm:mb-1">{event.headline}</div>
              </div>
              <div className="pl-20 text-md mb-6 sm:pl-0">{event.subhead}</div>
            </div>
          })}
        </div>
      )}
    </div>
  )
}

export const Timeline = ({ data, parentField = "" }) => {
  const style = data.style || {}
  const textAlignMobile = getWordWith(style.featureContent, 'sm:text-')
  const textAlign = getWordWith(style.featureContent, 'text-')
  
  const wrapWidthClasses = (isVertical: boolean, isMobile: boolean) => {
    const mobilePrefix = isMobile ? 'sm:' : ''
    return isVertical ? `${mobilePrefix}w-full ${mobilePrefix}max-w-site-full` : ''
  }
  const wrapClasses = (style) => {
    const isVertical:boolean = hasWord(style.alignment, 'flex-col flex-col-reverse')
    const isVerticalMobile:boolean = hasWord(style.alignment, 'sm:flex-col sm:flex-col-reverse')
    const widthClasses = wrapWidthClasses(isVertical, false)
    const mobileWidthClasses = wrapWidthClasses(isVerticalMobile, true)
    return `relative h-full flex-1 ${widthClasses} ${mobileWidthClasses}`
  }

  return (
    <Section background={data.background} navigationLabel={data.navigationLabel}>
      <div className={`relative flex w-full max-w-site-full mx-auto ${style?.padding} ${style?.alignment}`}>
        {data.timelines && (
          <div className={`${wrapClasses(style)}`}>
            <div className="grid grid-cols-2 gap-16 sm:gap-12">
              <div className="absolute top-40 bottom-20 left-1/2 border-l-2 border-dashed hidden sm:block"></div>
              {data.timelines.map(function (timeline, index) {
                return (
                  <TimelineItem timeline={timeline} isActive={true} index={index} key={index} />
                )
              })}
            </div>
          </div>
        )}
        <div className={`flex-none justify-center ${style.featureContent}`}>
          <Content
            data = {data}
            styles = {data.style}
            alignment = {`${textAlign} ${textAlignMobile}`}
            width = "w-full"
            parentField = {parentField}
            className = ""
          />
        </div>
      </div>
    </Section>
  );
};

const defaultCard = {
  headline: "Headline",
};

export const timelineBlockSchema: any = {
  name: "timeline",
  label: "Timeline",
  ui: {
    defaultItem: {
      headline: "Timeline",
      style: {
        alignment: "flex-row items-center gap-0",
        padding: "pt-20 pb-20 pr-10 pl-10",
        featureContent: "w-1/2 min-h-0 text-left",
        labelStyles: "text-black",
        headlineStyles: "text-black",
        subheadStyles: "text-black",
        textStyles: "text-black",
      },
      timelines: [defaultCard, defaultCard],
    },
  },
  fields: [
    {
      type: "object",
      label: "Style",
      name: "style",
      ui: {
        component: "group",
      },
      fields: [
        {
          label: "Alignment",
          name: "alignment",
          type: "string",
          ui: {
            component: "alignmentControl",
          },
        },
        {
          label: "Padding",
          name: "padding",
          type: "string",
          ui: {
            component: "paddingControl",
          }
        },
        {
          label: "Content",
          name: "featureContent",
          type: "string",
          ui: {
            component: "featureContentControl",
          }
        },
        ...typographySchema
      ]
    },
    backgroundSchema,
    {
      label: "",
      name: "rule",
      type: "string",
      ui: {
        component: "ruledTitle",
      },
    },
    {
      label: "Label",
      name: "label",
      type: "string",
    },
    {
      label: "Headline",
      name: "headline",
      type: "string",
    },
    {
      label: "Subhead",
      name: "subhead",
      type: "string",
    },
    {
      label: "Body",
      name: "body",
      type: "rich-text",
    },
    {
      label: "Timelines",
      name: "timelines",
      type: "object",
      list: true,
      ui: {
        component: 'itemListField',
      },
      fields: [
        {
          label: "Label",
          name: "label",
          type: "string",
        },
        {
          label: "Headline",
          name: "headline",
          type: "string",
        },
        {
          label: "Subhead",
          name: "subhead",
          type: "string",
        },
        {
          label: "Body",
          name: "body",
          type: "rich-text",
        },
        {
          label: "Events",
          name: "events",
          type: "object",
          list: true,
          ui: {
            component: 'itemListField',
          },
          fields: [
            {
              label: "Time",
              name: "time",
              type: "string",
            },
            {
              label: "Headline",
              name: "headline",
              type: "string",
            },
            {
              label: "Subhead",
              name: "subhead",
              type: "string",
            },
          ]
        }
      ]
    },
    {
      label: "",
      name: "rule2",
      type: "string",
      ui: {
        component: "ruledTitle",
      },
    },
    navigationLabelSchema,
  ],
}