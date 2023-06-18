import type { DateTimeInputProps } from "sanity";
import { defineField, defineType, set, unset } from "sanity";
import { TextInput } from "@sanity/ui";
import ct from "countries-and-timezones";

const timezones = ct.getAllTimezones();

const CustomDateTimeInput = ({ onChange, value }: DateTimeInputProps) => {
  return (
    <TextInput
      type="datetime-local"
      onChange={(event) => {
        console.log(
          event.currentTarget.value,
          // This is probably pretty fragile, but seems to work well enough?
          // Basically appending "+00:00" to instruct the Date contructor to interpret our string as UTC.
          // The other option would be parsing the string and using Date.UTC().
          // idk time zones are hard :/
          new Date(event.currentTarget.value + "+00:00")
        );
        onChange(
          event.currentTarget.value
            ? set(new Date(event.currentTarget.value + "+00:00").toISOString())
            : unset()
        );
      }}
      // Ensure pattern matches on browers that don't support `datetime-local`.
      pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}"
      value={value ? new Date(value).toISOString().slice(0, 16) : undefined}
    />
  );
};

export default defineType({
  name: "timeRange",
  title: "Time Range",
  type: "object",
  fields: [
    defineField({
      name: "timezone",
      title: "Timezone",
      type: "string",
      initialValue: "America/Los_Angeles",
      options: {
        list: Object.entries(timezones).map(([key, timezone]) => ({
          title: `${timezone.name} (${timezone.utcOffsetStr})`,
          value: key,
        })),
      },
      validation: (Rule) => Rule.required(),
    }),
    // The default behavior for datetime fields is to display / set the datetime based on the user's local timezone and store in UTC. For example if I'm in NY and select 9AM it'll be stored as 13:00 (assuming we're not in daylight savings), but still displayed as 9AM. This is neither configurable nor transparent to the user.
    // I was unable to find a way to set the timezone of the datetime field, or disable the timezone conversion.
    // Since there's no way to set the timezone, we need to be able to select the datetime as it's stored, hence the custom component. I've opted to use a native input field.
    // I'm honestly quite shocked they have no way to take timezones into account.
    defineField({
      name: "start",
      title: "Start",
      type: "datetime",
      components: {
        input: CustomDateTimeInput,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "end",
      title: "End",
      type: "datetime",
      components: {
        input: CustomDateTimeInput,
      },
      validation: (Rule) => Rule.required().min(Rule.valueOfField("start")),
    }),
  ],
});
