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

<div id="calendar"></div>

<style>
  .calendar-table {
    border-collapse: collapse;
    margin-bottom: 2rem;
  }
  .calendar-table caption {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  .calendar-table th,
  .calendar-table td {
    border: 1px solid #ccc;
    width: 14%;
    vertical-align: top;
    padding: 4px;
  }
  .calendar-table td div {
    font-size: 0.8rem;
    margin-top: 0.25rem;
  }
</style>

<script>
const events = {{ site.data.events | jsonify }};

function renderMonth(year, month, monthEvents) {
  const table = document.createElement('table');
  table.className = 'calendar-table';
  const caption = document.createElement('caption');
  const date = new Date(year, month, 1);
  caption.textContent = date.toLocaleString('default', { month: 'long', year: 'numeric' });
  table.appendChild(caption);

  const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  const thead = table.createTHead();
  const headRow = thead.insertRow();
  days.forEach(d => {
    const th = document.createElement('th');
    th.textContent = d;
    headRow.appendChild(th);
  });

  const tbody = table.createTBody();
  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();
  let row = tbody.insertRow();

  for (let i = 0; i < firstDay; i++) {
    row.insertCell();
  }

  for (let d = 1; d <= lastDate; d++) {
    if ((firstDay + d - 1) % 7 === 0 && d !== 1) {
      row = tbody.insertRow();
    }
    const cell = row.insertCell();
    cell.textContent = d;
    monthEvents.filter(ev => new Date(ev.date).getDate() === d).forEach(ev => {
      const div = document.createElement('div');
      div.textContent = ev.title;
      cell.appendChild(div);
    });
  }

  return table;
}

function buildCalendar() {
  const calendarDiv = document.getElementById('calendar');
  const monthMap = {};

  events.forEach(ev => {
    const date = new Date(ev.date);
    const key = `${date.getFullYear()}-${date.getMonth()}`;
    if (!monthMap[key]) monthMap[key] = [];
    monthMap[key].push(ev);
  });

  Object.keys(monthMap)
    .sort((a, b) => new Date(a.split('-')[0], a.split('-')[1]) - new Date(b.split('-')[0], b.split('-')[1]))
    .forEach(key => {
      const [year, month] = key.split('-').map(Number);
      calendarDiv.appendChild(renderMonth(year, month, monthMap[key]));
    });
}

document.addEventListener('DOMContentLoaded', buildCalendar);
</script>
