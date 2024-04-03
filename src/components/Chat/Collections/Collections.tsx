"use client";

import { collection, document } from "@/types";
import AddCollection from "./AddCollection";
import { useEffect, useState } from "react";
import AddDocument from "./AddDocument";

const Collections: React.FC<{
  collections: collection[];
  addCollection: (collectionName: string) => void;
  currentCollection: collection | null;
}> = ({ collections, addCollection, currentCollection }) => {
  const [isAddCollection, setIsAddCollection] = useState<boolean>(false);
  const [documents, setDocuments] = useState<document[]>([]);
  const [isAddDocument, setIsAddDocument] = useState<boolean>(false);

  const fetchDocuments = async (collectionId: string) => {
    const response = await fetch(
      `http://localhost:3001/get-documents?collectionId=${collectionId}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    console.log("Data: ", data);
    setDocuments(data);
  };
  useEffect(() => {
    if (currentCollection) {
      fetchDocuments(currentCollection.collectionId);
    }
  }, [currentCollection]);

  if (!currentCollection) {
    return (
      <div className="flex justify-center items-center max-w-full h-full bg-grey">
        <div className="flex flex-col">
          <p className="text-2xl text-white text-poppins">
            No collections found
          </p>
          <AddCollection addCollection={addCollection} />
        </div>
      </div>
    );
  }
  return (
    <div className="flex justify-center h-full bg-grey">
      <div className="flex flex-col items-center ">
        <button
          className="bg-grey2 w-5/6 mt-4 rounded-2xl text-black font-bold text-2xl p-1 font-poppins"
          onClick={() => setIsAddCollection(!isAddCollection)}
        >
          Add Collection
        </button>
        <button
          className="bg-grey2 w-5/6 mt-4 rounded-2xl text-black font-bold text-2xl p-1 font-poppins"
          onClick={() => setIsAddCollection(!isAddCollection)}
        >
          Change Collection
        </button>
        {isAddCollection && <AddCollection addCollection={addCollection} />}
        <div className="flex flex-col bg-grey2 w-5/6 mt-4 rounded-2xl items-center h-full mb-4">
          <p className="text-2xl text-black font-bold text-poppins text-center">
            {currentCollection.name}
          </p>
          <p className="text-xl text-black text-poppins mt-2 text-center">
            {currentCollection.prompt}
          </p>
          {documents.map((document) => (
            <div
              key={document.id}
              className="flex w-5/6 flex-col text-xs text-white text-clip overflow-hidden bg-black mt-2 rounded-2xl items-center p-2 mb-4"
            >
              {/* {document.name} */}
            </div>
          ))}
        </div>

        <button
          onClick={() => setIsAddDocument(!isAddDocument)}
          className="bg-grey2 w-5/6 mt-4 mb-4 rounded-2xl text-black font-bold text-2xl p-1 font-poppins"
        >
          Add Document
        </button>
        {isAddDocument && (
          <AddDocument
            collectionId={currentCollection.collectionId}
            fetchDocuments={fetchDocuments}
          />
        )}
      </div>
    </div>
  );
};

export default Collections;
