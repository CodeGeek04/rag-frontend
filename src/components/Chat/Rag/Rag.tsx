import { useState } from "react";

const Rag = () => {
  const [citation, setCitations] = useState<string>(
    "Textbook of Anatomy: Upper Limb and Thorax 260 HEART The heart (syn. Gk. Kardia/Cardia ; L. Cor/Cordis ) is a hollow muscular organ situated in the mediastinum of the thoracic cavity, enclosed in the pericardium. It is somewhat pyramidal in shape and placed obliquely behind the sternum and adjoining parts of costal cartilages so that one-third of the heart is to the right of median plane and two-third of the heart is to the left of the median plane. The heart consists of four chambers—right atrium and right ventricle, and left atrium and left ventricle. On the surface the atria are separated from the ventricles by the atrioventricular groove (also called coronary sulcus ) and ventricles from each other by interventricular grooves. Shape and Measurements Shape: Pyramidal or conical. Measurements: Length = 12 cm. Width = 9 cm. Weight = 300 g in males; 250 g in females. N.B. The heart is slightly larger than one’s own clenched fist. EXTERNAL FEATURES (Figs 20.6 and 20.7) The heart presents the following external features: 1. Apex. 2. Base.3. Three surfaces (sternocostal, diaphragmatic, and left) 4. Four borders (right, left, upper, and inferior). APEX OF THE HEART The apex of the heart is a conical area formed by left ventricle. It is directed downwards and forwards, and to the left. It lies at the level of the 5th left intercostal space, 3.5 inches (9 cm) from the midline and just medial to the midclavicular line. Apex beat: It is the outermost and lowermost thrust of the cardiac contraction (during ventricular systole) felt on the front of the chest or it is the point of maximum cardiac impulse ( PMCI ). Normally the apex beat is felt as a light tap in left 5th intercostal space in the midclavicular line. In infants, the heart is positioned more horizontally so that the apex of the heart lies in third or fourth left intercostal space and consequently the apex beat in children up to 7 years of age is felt in the third or fourth intercostal space just lateral to the midclavicular line. N.B. Normally the apex of the heart is on the left side and apex beat is felt on the left side (left 5th in"
  );
  const [source, setSource] = useState<string>(
    "Vishram singh-1_240320_190050.pdf"
  );
  const [location, setLocation] = useState<string>("Page: 274");

  return (
    <div className="flex justify-center items-center h-full p-2 bg-black">
      <div className="flex flex-col justify-between bg-white h-full w-full rounded-3xl">
        <div className="flex justify-center p-4">
          <p className="flex justify-center text-2xl p-1 w-full text-white bg-black font-bold rounded-3xl h-fit text-poppins">
            CITATION SEARCH
          </p>
        </div>
        <div className="flex flex-col items-center mx-4 max-h-full">
          <p className="overflow-auto">{citation}</p>
          <p className="mt-4">{source}</p>
          <p className="mt-4">{location}</p>
        </div>
        <div className="bg-grey3 rounded-b-3xl min-h-12"></div>
      </div>
    </div>
  );
};

export default Rag;
