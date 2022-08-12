import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Modal from "../components/Modal";

const Home: NextPage = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Modal show={showModal} setShow={setShowModal} />

      <button
        className="px-5 py-2 bg-yellow-200 rounded-md"
        onClick={() => setShowModal(true)}
      >
        Show Modal
      </button>
    </div>
  );
};

export default Home;
