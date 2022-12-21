import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useQuery, gql } from "@apollo/client";
const QUERY = gql`
  query ExampleQuery {
    hello
  }
`;
export default function hoge() {
  // const client = ...
  const { loading, error, data } = useQuery(QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  console.log(data);
  return (
    <div className="underline underline-offset-8 bg-red-300, mr-auto">hoge</div>
  );
}
