import {defineField, defineType} from 'sanity'
import {CalendarIcon} from '@sanity/icons'
import ct from 'countries-and-timezones'

const timezones = ct.getAllTimezones()

export default defineType({
  name: 'events',
  title: 'Events',
  icon: CalendarIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'cover',
      title: 'Cover',
      description: 'Should be at least 1200 x 630, with an aspect ratio of 1.9:1.',
      type: 'image',
    }),
    defineField({
      name: 'timeRange',
      title: 'Time Range',
      type: 'object',
      fields: [
        defineField({
          name: 'timezone',
          title: 'Timezone',
          type: 'string',
          initialValue: 'America/Los_Angeles',
          options: {
            list: Object.entries(timezones).map(([key, timezone]) => ({
              title: `${timezone.name} (${timezone.utcOffsetStr})`,
              value: key,
            })),
          },
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'start',
          title: 'Start',
          type: 'datetime',
          options: {
            dateFormat: 'ddd, MMM Do YYYY',
            timeFormat: 'h:mm A',
          },
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'end',
          title: 'End',
          type: 'datetime',
          options: {
            dateFormat: 'ddd, MMM Do YYYY',
            timeFormat: 'h:mm A',
          },
        }),
      ],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => [
        Rule.required(),
        Rule.regex(/\n\n/, {invert: true}).warning(
          'Double newlines should not be used for stylistic reasons. Content will be properly styled when displayed.'
        ),
      ],
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      start: 'timeRange.start',
      end: 'timeRange.end',
    },
    prepare({title, start, end}) {
      const dateTimeFormat = new Intl.DateTimeFormat('en', {
        dateStyle: 'medium',
        timeStyle: 'short',
      })

      const time = end
        ? dateTimeFormat.formatRange(new Date(start), new Date(end))
        : dateTimeFormat.format(new Date(start))

      return {
        title,
        subtitle: time,
      }
    },
  },
})
