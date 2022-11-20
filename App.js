import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { VictoryChart, VictoryTheme, VictoryLine } from "victory-native";

const App = () => {
  const [time, setTime] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prevCounter => prevCounter + 1);
    }, 1000);
    return () => clearInterval(interval);
  });
  return (
    <View style={styles.container}>
      <Text>Time: {time}</Text>
      <VictoryChart
        theme={VictoryTheme.material}
      >
        <VictoryLine
          style={{
            data: { stroke: "#c43a31" },
            parent: { border: "1px solid #ccc"}
          }}
          data={[1, 2, 3, 4, 5, 2, 6]}
        />
      </VictoryChart>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff"
  }
});

export default App;
