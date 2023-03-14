import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { Offer } from '../../types';

export const getStaticPaths = async () => {
  const response = await fetch(`${process.env.API}/offers`);
  const offers = (await response.json()) as Offer[];

  return {
    paths: offers.map((offer) => ({
      params: { id: offer.id.toString() },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  { offer: Offer },
  { id: string }
> = async (context) => {
  const response = await fetch(
    `${process.env.API}/offers/${context.params?.id}`,
  );

  return {
    props: {
      offer: await response.json(),
    },
  };
};

function OfferDetails({
  offer,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <h1>Offer detail</h1>
      <pre>{JSON.stringify(offer, null, 2)}</pre>
    </>
  );
}

export default OfferDetails;
