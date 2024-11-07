import { useState, useEffect } from 'react';
import floors from "../data/building.json"

export interface Floor {
  name: string;
  soldiers: number;
  purpose: string;
  description: string;
  activity: string
}

const useBuildingData = () => {
  const [buildingData, setBuildingData] = useState<Floor[]>([]);

  //FILL HERE LOGIC TO SET THE BUILDING DATA
  useEffect(() => {
    const getData = async () => {
      setBuildingData(floors)
    }
    getData()
  }, [])

  const getFloorByIndex = (floorIndex: number): Floor | undefined => {
    //FILL HERE
    if (buildingData) {
      return buildingData[floorIndex]
    }
  }
  const getListOfActivities = (): string[] => {
    //FILL HERE
    const activities: string[] = buildingData.map(f => f.activity)
    return activities
  }

  return {
    buildingData,
    getFloorByIndex,
    getListOfActivities
  };
};

export default useBuildingData;
