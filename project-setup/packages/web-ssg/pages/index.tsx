import type { NextPage } from 'next';
import Link from 'next/link';
import { Offer } from '../types';
import styles from './index.module.css';

interface HomeProps {
  offers: Offer[];
}

export async function getStaticProps() {
  const response = await fetch(`${process.env.API}/offers`);

  return {
    props: {
      offers: await response.json(),
    },
  };
}

const Home: NextPage<HomeProps> = ({ offers }) => (
  <>
    <h1>List of Offers</h1>
    <div className={styles.grid}>
      {offers.map((offer) => (
        <div key={offer.id}>
          <Link href={`/offer/${offer.id}`}>
            <a>
              <span>{offer.title}</span>
            </a>
          </Link>
        </div>
      ))}
    </div>
  </>
);

export default Home;
