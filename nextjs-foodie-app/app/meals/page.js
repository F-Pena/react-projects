import Link from 'next/link';
import { Suspense } from 'react';
import classes from './page.module.css';
import { getMeals } from '@/app/lib/meals';
import MealsGrid from '@/components/meals/meals-grid';
import Loading from './loading-out';

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />
}

export default async function MealsPage() {

  return <>
    <header className={classes.header}>
    <h1>
      Delicious meals, created {' '}

    <span className={classes.highlight}>by you</span>
    </h1>
    <p>
      Choose your favorite recipe and cook it yourself.
    </p>
    <p className={classes.cta}>
      <Link href="/meals/share" className={classes.ctaLink}>Share Your Favorite Recipe</Link>
    </p>
    </header>
    <div className={classes.main}>
      <Suspense fallback={<Loading />}>
        <Meals />
      </Suspense>
    </div>
  </>;
}
