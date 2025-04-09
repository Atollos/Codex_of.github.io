---
layout: default
title: Календарь
---
<div id="calendar"></div>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fullcalendar@5.11.3/main.min.css">
<script src="https://cdn.jsdelivr.net/npm/fullcalendar@5.11.3/main.min.js"></script>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const calendarEl = document.getElementById('calendar');
    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: [
            {% for project in site.projects %}
            {
                title: '{{ project.title }}',
                start: '{{ project.date }}',
                url: '{{ project.url }}'
            },
            {% endfor %}
        ]
    });
    calendar.render();
});
</script>