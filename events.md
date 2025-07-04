---
layout: default
title: "Brussels Art Events"
---

# Brussels Art Events

Below is a list of upcoming art events in Brussels. To update this page, edit the file `_data/events.yml` in the repository and commit your changes.

<table>
  <thead>
    <tr>
      <th>Date</th>
      <th>Event</th>
      <th>Location</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    {% for event in site.data.events %}
    <tr>
      <td>{{ event.date | date: "%B %-d, %Y" }}</td>
      <td>{{ event.title }}</td>
      <td>{{ event.location }}</td>
      <td>{{ event.description }}</td>
    </tr>
    {% endfor %}
  </tbody>
</table>

## Calendar

<iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Europe%2FBrussels&src=fakecalendar%40example.com&color=%230F4B8E&mode=AGENDA" style="border:0" width="800" height="600" frameborder="0" scrolling="no"></iframe>

<p>Edit the calendar URL above to link your own public calendar.</p>
