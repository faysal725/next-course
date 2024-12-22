import React, { useEffect, useState } from "react";
import useSWR from "swr";

export default function LastSalesPage(props) {
  const [sales, setSales] = useState(props.sales);
  // const [isLoading, setIsLoading] = useState(false);

  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data, error } = useSWR(
    "https://nextjs-course-bcb5b-default-rtdb.firebaseio.com/sales.json",
    fetcher
  );

  useEffect(() => {
    console.log(data);
    if (data) {
      const transformedSales = [];
      for (const key in data) {
        transformedSales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
        // console.log(key)
      }
      setSales(transformedSales);
    }
  }, [data]);

  // useEffect(() => {
  //   setIsLoading(true);
  //   fetch("https://nextjs-course-bcb5b-default-rtdb.firebaseio.com/sales.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const transformedSales = [];
  //       for (const key in data) {
  //         transformedSales.push({
  //           id: key,
  //           username: data[key].username,
  //           volume: data[key].volume,
  //         });
  //         // console.log(key)
  //       }

  //       setSales(transformedSales);
  //       console.log(sales);
  //       setIsLoading(false);
  //     });
  // }, []);

  if (error) {
    return <p>failed to load</p>;
  }
  if (!data && !sales) {
    return <p>....Loading</p>;
  }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username} - {sale.volume}
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  return fetch(
    "https://nextjs-course-bcb5b-default-rtdb.firebaseio.com/sales.json"
  )
    .then((res) => res.json())
    .then((data) => {
      const transformedSales = [];
      for (const key in data) {
        transformedSales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
        // console.log(key)
      }

      return {
        props: {
          sales: transformedSales,
        },
        revalidate: 10,
      };
    });
}
