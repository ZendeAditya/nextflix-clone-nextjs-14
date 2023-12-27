"use client";
import { GetServerSidePropsContext, NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";
import React from "react";
import useCurrentUser from "../hooks/useCurrentUser";
export async function serverCompoent(context: GetServerSidePropsContext) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}
const logout = () => {
  const { data: user } = useCurrentUser();
  return (
    <div>
      {user?.name}
      <button
        onClick={() => {
          signOut();
        }}
      >
        Sign Out
      </button>
    </div>
  );
};

export default logout;
