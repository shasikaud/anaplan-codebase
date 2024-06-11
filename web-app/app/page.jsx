'use client';

import { useState, useEffect } from "react";
import getDashboards from "@/app/apis/dashboards/getDashboards";

export default function Home() {

  const [dashboards, setDashboards] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    const { data, error } = await getDashboards();
    if (!error) setDashboards(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-between p-24">
        <p className="text-4xl mb-2">Dashboards</p>
        {loading && <p>Loading...</p>}
        {!!dashboards?.length && dashboards.map((dashboard) => (
          <p key={dashboard.id}>{dashboard.id}. {dashboard.title}</p>
        ))}
      </div>
    </main>
  );
}
