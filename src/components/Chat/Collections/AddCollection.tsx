import { useState } from "react";

const AddCollection: React.FC<{
  addCollection: (collectionName: string) => void;
}> = ({ addCollection }) => {
  const [collectionName, setCollectionName] = useState<string>("");
  return (
    <div className="flex flex-col">
      <input
        type="text"
        value={collectionName}
        onChange={(e) => setCollectionName(e.target.value)}
      />
      <button
        onClick={() => {
          addCollection(collectionName);
          setCollectionName("");
        }}
      >
        Add Collection
      </button>
    </div>
  );
};

export default AddCollection;
