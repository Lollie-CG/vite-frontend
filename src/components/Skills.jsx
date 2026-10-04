const reminders = [
  'You can ask questions when you are ready.',
  'Your body belongs to you.',
  'It is okay to ask a trusted grown-up for help.',
]

export default function Skills() {
  return (
    <section className="reminder-section" aria-labelledby="reminders-title">
      <span className="eyebrow">Keep in your pocket</span>
      <h2 id="reminders-title">A few kind reminders</h2>
      <ul className="reminder-list">
        {reminders.map((reminder) => (
          <li key={reminder}>{reminder}</li>
        ))}
      </ul>
    </section>
  )
}
