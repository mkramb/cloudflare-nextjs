import type { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Offer, User } from "../types";
import styles from "./index.module.css";

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

const Home: NextPage<HomeProps> = ({ offers }) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function getUsers() {
      const response = await fetch(`/api/users`);
      setUsers(await response.json());
    }
    getUsers();
  }, []);

  return (
    <>
      <h1>Static Site Generation = List of Offers</h1>
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
      <h1>Client Side Rendering = List of User</h1>
      <div className={styles.grid}>
        {users.map((user) => (
          <div key={user.id}>
            <span>{user.username}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
