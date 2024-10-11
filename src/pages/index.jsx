import styles from '@/styles/calendar.module.css';
import TagSEO from '@/components/TagSEO';

const DAYS_OF_WEEK = [
  'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'
];

export default function Home() {
  return (
    <>
      <TagSEO canonicalSlug="" />
      {/* 
        <TagSchema />

      
       */}

      <main>
        <Header></Header>
        <Landing></Landing>
        <Pricing></Pricing>
      </main>

    </>
  );
}
