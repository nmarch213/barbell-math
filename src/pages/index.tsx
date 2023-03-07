import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "~/utils/api";
import { useEffect, useState } from "react";
import ShowWeights from "~/components/ShowWeights";

const Home: NextPage = () => {
  const [weight, setWeight] = useState<number>(135);
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Barbell Math</title>
        <meta
          name="description"
          content="Why do math when you can just lift more"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <h1 className="pb-4 text-6xl font-bold text-white">Barbell Math</h1>
        <input
          type="number"
          value={weight ? weight : ""}
          placeholder="Enter Weight in lbs"
          onChange={(e) => {
            if (e.target.value) {
              setWeight(parseInt(e.target.value));
            } else {
              setWeight(0);
            }
          }}
        />
        <ShowWeights weight={weight} isLbs={true} />
      </main>
    </>
  );
};

export default Home;
