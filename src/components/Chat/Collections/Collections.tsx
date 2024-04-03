"use client";

import { collection, document } from "@/types";
import AddCollection from "./AddCollection";
import { useEffect, useState } from "react";
import AddDocument from "./AddDocument";
import { FaTrash } from "react-icons/fa";

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

  const deleteDocument = async (documentId: string) => {
    const response = await fetch(
      `http://localhost:3001/delete-document?documentId=${documentId}`,
      {
        method: "POST",
      }
    );
    const data = await response.json();
    setDocuments(documents.filter((document) => document.id !== documentId));
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
              className="flex w-5/6 flex-row  max-h-full overflow-y-auto bg-black mt-2 rounded-2xl p-2 font-poppins"
            >
              <div className="text-xs text-white truncate">{document.name}</div>
              <button className="" onClick={() => deleteDocument(document.id)}>
                <FaTrash color="white" />
              </button>
            </div>
          ))}
          <button
            className="w-full text-black font-bold text-3xl p-1 font-poppins"
            onClick={() => setIsAddDocument(!isAddDocument)}
          >
            +
          </button>
        </div>
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
