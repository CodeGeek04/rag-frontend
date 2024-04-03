"use client";

import React, { useEffect, useState } from "react";
import Collections from "@/components/Chat/Collections/Collections";
import Rag from "@/components/Chat/Rag/Rag";
import Query from "@/components/Chat/Query/Query";
import { collection } from "@/types";

const Page: React.FC = () => {
  const [userId, setUserId] = useState<string>("test001");
  const [collections, setCollections] = useState<collection[]>([]);
  const [currentCollection, setCurrentCollection] = useState<collection | null>(
    null
  );

  const fetCollections = async () => {
    const response = await fetch(
      `http://localhost:3001/get-collections?userId=${userId}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    setCollections(data);
    if (data.length > 0) {
      setCurrentCollection(data[0]);
    }
  };

  const addCollection = async (collectionName: string) => {
    const response = await fetch(
      `http://localhost:3001/add-collection?userId=${userId}&collectionName=${collectionName}`,
      {
        method: "POST",
      }
    );
    const data = await response.json();
    setCollections([...collections, data]);
    setCurrentCollection(data);
  };

  useEffect(() => {
    fetCollections();
  }, []);
  return (
    <div className="flex h-screen">
      <div style={{ flex: "20%" }}>
        <Collections
          collections={collections}
          addCollection={addCollection}
          currentCollection={currentCollection}
        />
      </div>
      <div style={{ flex: "40%" }}>
        <Rag />
      </div>
      <div style={{ flex: "40%" }}>
        <Query />
      </div>
    </div>
  );
};

export default Page;
