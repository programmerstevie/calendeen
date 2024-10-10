import styles from '@/styles/calendar.module.css';

const DAYS_OF_WEEK = [
  'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'
];

export default function Home() {
  return (
    <div className="flex w-full">
      <aside className="w-40">
        <div className="border p-2">
          <h2>Calendar</h2>
        </div>
      </aside>
      <section className="grow">
        <Calendar />
      </section>
    </div>
  );
}

function Calendar() {
  const FIRST_COL_WIDTH = '70px';

  return (
    <>
      <div
        className="grid gap-x-1"
        style={{
          gridTemplateColumns: `${FIRST_COL_WIDTH} repeat(7, 1fr)`,
          gridTemplateRows: `1fr`,
          gap: '1px',
          border: '1px solid rgba(0, 0, 0, 0.12)'
        }}
      >
        <div></div>
        {DAYS_OF_WEEK.map((day, ix) => (
          <div
            key={ix}
            className="border p-2 capitalize"
            style={{
              gridColumn: `${ix + 2} / span 1`,
              gridRow: '1 / span 1',
            }}
          >
            {day}
          </div>
        ))}
      </div>
      {/* 
       TODO: MAKE THE FIRST COLUMN ITS OWN FLEXBOX/GRID AND 
       MAKE IT HAVE 25 ROWS WHERE THE 1ST AND LAST ROWS ARE HALF THE LENGTH 
       e.g. grid-row: 1fr repeat(23, 2fr) 1fr 
       */}
      <div className="overflow-y-auto scrollbar-hide" style={{ height: 'calc(100vh - 44px)' }}>
        <div
          className="grid bg-white"
          style={{
            gridTemplateColumns: `${FIRST_COL_WIDTH} repeat(7, 1fr)`,
            gridTemplateRows: `repeat(24, 1fr)`,
            gap: '1px',
            border: '1px solid rgba(0, 0, 0, 0.12)',
          }}
        >
          {
            Array.from({ length: 22 }, (_, h) => (<div
              key={h + 0.5}
              className="border p-2 text-center h-16"
              style={{
                gridColumn: `1 / span 1`,
                gridRow: `${h + 2} / span 1`,
              }}>
              hello
            </div>))
          }
          {DAYS_OF_WEEK.map((_, ix) => (
            <GridColumn key={ix} col={ix + 2} />
          ))}
        </div>
      </div>
    </>
  );
}

function GridColumn({ col }) {
  return Array.from({ length: 24 }, (_, hour) => (
    <div
      key={hour + 1}
      className="border p-2 text-center h-16"
      style={{
        gridColumn: `${col} / span 1`,
        gridRow: `${hour + 1} / span 1`,
      }}
    ></div>
  ));
}
