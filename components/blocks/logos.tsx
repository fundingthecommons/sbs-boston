import * as React from "react"
import { getWordWith } from '../../helpers/utilities';
import { Section } from "../section"
import { Content } from '../content'
import { backgroundSchema } from "../../schema/background"
import { contentSchema } from "../../schema/content"
import { navigationLabelSchema } from "../../schema/navigation-label"
import { typographySchema } from "../../schema/typography"

export const Logos = ({ data, parentField = "" }) => {
  const style = data.style
  const textAlign = getWordWith(style.featureContent, 'text-')
  const textAlignMobile = getWordWith(style.featureContent, 'sm:text-')
  const logoSpacing = Number(getWordWith(style.grid, 'gap-').replace('gap-', '')) / 2
  const logoSpacingMobile =  Number(getWordWith(style.grid, 'sm:gap-').replace('sm:gap-', '')) / 2
  const logoJustify = `justify-${getWordWith(style.grid, 'justify-').replace('justify-', '')}`
  const logoJustifyMobile = `sm:justify-${getWordWith(style.grid, 'sm:justify-').replace('sm:justify-', '')}`
  const numberOfColumns = getWordWith(style.grid, 'grid-cols-').replace('grid-cols-', '')
  const numberOfColumnsMobile = getWordWith(style.grid, 'sm:grid-cols-').replace('sm:grid-cols-', '')
  const logoWidth = numberOfColumns === '1' ? 'w-full' : `w-1/${numberOfColumns}`
  const logoWidthMobile = numberOfColumnsMobile === '1' ? 'sm:w-full' : `sm:w-1/${numberOfColumnsMobile}`

  return (
    <Section background={data.background} navigationLabel={data.navigationLabel}>
      <div className={`relative w-full max-w-site-full mx-auto ${style?.padding} ${style?.alignment}`}>
        <div className={`flex-none ${style.featureContent}`}>
          <Content
            data = {data}
            styles = {style}
            alignment = {`${textAlign} ${textAlignMobile}`}
            width = "w-full"
            parentField = {parentField}
            className = ""
          />
        </div>
        <div className={`mx-auto ${style.gridWidth}`}>
          <div className={`flex flex-wrap items-center ${logoJustify} -mx-${logoSpacing} -mt-${logoSpacing} ${logoJustifyMobile} sm:-mx-${logoSpacingMobile} sm:-mt-${logoSpacingMobile}`}>
            {data.items && (
              data.items.map(function (item, index) {
                return (
                  <div className={`basis-0 p-${logoSpacing} ${logoWidth} sm:p-${logoSpacingMobile} ${logoWidthMobile}`} key={index}>
                    <img
                      alt={item.alt}
                      src={item.src}
                    />
                  </div>
                )
              })
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};

export const logosBlockSchema: any = {
  name: "logos",
  label: "Logos",
  ui: {
    defaultItem: {
      headline: "Headline",
      subhead: "Subhead",
      style: {
        padding: "pt-20 pb-20 pr-10 pl-10",
        featureContent: "w-full min-h-0 text-center",
        grid: "grid-cols-2 justify-start gap-4",
        labelStyles: "text-black",
        headlineStyles: "text-black",
        subheadStyles: "text-black",
        textStyles: "text-black",
      },
    },
  },
  fields: [
    {
      label: "Section Style",
      name: "style",
      type: "object",
      fields: [
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
        {
          label: "Grid",
          name: "grid",
          type: "string",
          ui: {
            component: "gridControl",
          },
        },
        {
          label: 'Grid Width',
          name: 'gridWidth',
          type: 'string',
          ui: {
            component: "selectField",
          },
          options: [
            { label: "20%", value: "w-1/5"},
            { label: "25%", value: "w-1/4"},
            { label: "33%", value: "w-1/3"},
            { label: "40%", value: "w-2/5"},
            { label: "50%", value: "w-1/2"},
            { label: "60%", value: "w-3/5"},
            { label: "66%", value: "w-2/3"},
            { label: "75%", value: "w-3/4"},
            { label: "80%", value: "w-4/5"},
            { label: "100%", value: "w-full"},
          ],
        },
        ...typographySchema,
      ],
    },
    backgroundSchema,
    ...contentSchema,
    {
      type: "object",
      label: "Logos",
      name: "items",
      list: true,
      ui: {
        component: "itemListField",
      },
      fields: [
        {
          label: "Image Source",
          name: "src",
          type: "image",
          ui: {
            clearable: true,
          }
        },
        {
          name: "alt",
          label: "Alt Text",
          type: "string",
        },
      ]
    },
    navigationLabelSchema,
  ],
};
