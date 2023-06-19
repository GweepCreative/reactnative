import React from "react";
import { View, Text, Image, FlatList } from "react-native";
const Matches = (props) => {
  const matchesData = [
    {
      id: 1,
      homeTeam: "FNC",
      awayTeam: "TL",
      homeLogo: require("../assest/teams/fnc.png"),
      awayLogo: require("../assest/teams/tl.png"),
      score: "1 - 0",
      event:"VALORANT MASTERS 2023: TOKYO"
    },
    {
      id: 2,
      homeTeam: "NAVI",
      awayTeam: "BBL",
      homeLogo: require("../assest/teams/navi.png"),
      awayLogo: require("../assest/teams/bbl.png"),
      score: "2 - 1",
      event:"VCT2023: EMEA LAST CHANCE QUALIFIER"
    },
    // Diğer maç verileri buraya eklenebilir
  ];
  const renderItem = ({ item }) => (
    <View className="flex-col items-center justify-between p-4 mx-2 bg-mor rounded-lg w-[250px] h-[120px]">
      <View className="items-center">
        <Text className="text-white text-[6px] font-normal font-montbold text-center ">{item.event}</Text>
      </View>
      <View className="flex flex-row items-center justify-between w-full">
        <View className="items-center">
          <Image source={item.homeLogo} className="w-12 h-12" resizeMode="contain"/>
          <Text className="text-white text-center mt-2 font-normal font-montbold">
            {item.homeTeam}
          </Text>
        </View>
        <Text className="text-white text-lg font-normal font-montbold">{item.score}</Text>
        <View className="items-center">
          <Image source={item.awayLogo} className="w-12 h-12" resizeMode="contain" />
          <Text className="text-white text-center mt-2 font-normal font-montbold">
            {item.awayTeam}
          </Text>
        </View>
      </View>
    </View>
  );
  return (
    <View className={"mt-4"} {...props}>
      <Text
        className={"text-black text-lg mb-2 ml-4 font-normal font-montbold"}
      >
        MAÇLAR
      </Text>
      <FlatList
        data={matchesData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Matches;
