import React, { useEffect, useState, Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import { VictoryChart, VictoryTheme, VictoryLine } from "victory-native";

const App = () => {
  const [time, setTime] = useState(0);
  const [currUser, setCurrUser] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prevCounter => prevCounter + 1);
    }, 1000);
    return () => clearInterval(interval);
  });
  const patients = [
    {id:1, color:"#FF4500", icon:"https://bootdey.com/img/Content/avatar/avatar1.png", name: "King Robertson"},
    {id:2, color:"#87CEEB", icon:"https://bootdey.com/img/Content/avatar/avatar2.png", name: "Buster Owen"}, 
    {id:3, color:"#4682B4", icon:"https://bootdey.com/img/Content/avatar/avatar3.png", name: "Rena Wiley"}, 
    {id:4, color:"#6A5ACD", icon:"https://bootdey.com/img/Content/avatar/avatar4.png", name: "Jerrell Leach"}, 
    {id:5, color:"#FF69B4", icon:"https://bootdey.com/img/Content/avatar/avatar5.png", name: "Harris Whitney"}, 
    {id:6, color:"#00BFFF", icon:"https://bootdey.com/img/Content/avatar/avatar6.png", name: "Anton Watts"}, 
    {id:7, color:"#00FFFF", icon:"https://bootdey.com/img/Content/avatar/avatar1.png", name: "Elliot Mccall"}, 
    {id:8, color:"#20B2AA", icon:"https://bootdey.com/img/Content/avatar/avatar2.png", name: "Markus Zhang"},
    {id:9, color:"#191970", icon:"https://bootdey.com/img/Content/avatar/avatar3.png", name: "Edith Maxwell"},
  ];
  // const data = Array.from({length: 40}, () => Math.floor(Math.random() * 40));
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return currUser >= 0 ? (
    <View style={styles.userContainer}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => setCurrUser(-1)}>
          <Image style={styles.backButton} source={require('./assets/back.png')}/>
        </TouchableOpacity>
        <Text style={styles.name}>{patients[currUser].name}</Text>
      </View>
      <View style={styles.graphContainer}>
        <VictoryChart
          theme={VictoryTheme.material}
        >
          <VictoryLine
            style={{
              data: { stroke: "#c43a31" },
              parent: { border: "1px solid #ccc"}
            }}
            data={data}
          />
        </VictoryChart>
      </View>
      <View style={styles.graphContainer}>
      </View>
      <View style={styles.graphContainer}>
      </View>
    </View>
  ) : (
    <View style={styles.container}>
      <FlatList 
        style={styles.notificationList}
        data={patients}
        keyExtractor= {item => item.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity style={[styles.card, {borderColor:item.color}]} onPress={() => setCurrUser(item.id-1)}>
              <View style={styles.cardContent}>
                <Image style={[styles.image, styles.imageContent]} source={{uri: item.icon}}/>
                <Text style={styles.name}>{item.name}</Text>
              </View>
              <View style={[styles.iconContent, styles.tagsContent]}>
                <View style={styles.normalIcon}>
                  <Image style={styles.healthIcon} source={require('./assets/movement.png')}/>
                </View>
                <View style={styles.normalIcon}>
                  <Image style={styles.healthIcon} source={require('./assets/temperature.png')}/>
                </View>
                <View style={styles.normalIcon}>
                  <Image style={styles.healthIcon} source={require('./assets/pressure.png')}/>
                </View>
              </View>
            </TouchableOpacity>
          )
        }}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#EBEBEB',
  },
  formContent:{
    flexDirection: 'row',
    marginTop:30,
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius:30,
    borderBottomWidth: 1,
    height:45,
    flexDirection: 'row',
    alignItems:'center',
    flex:1,
    margin:10,
  },
  icon:{
    width:30,
    height:30,
  },
  iconBtnSearch:{
    alignSelf:'center'
  },
  inputs:{
    height:45,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex:1,
  },
  inputIcon:{
    marginLeft:15,
    justifyContent: 'center'
  },
  notificationList:{
    marginTop:20,
    padding:10,
  },
  card: {
    height:null,
    paddingTop:10,
    paddingBottom:10,
    marginTop:5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    borderTopWidth:40,
    marginBottom:20,
    width: 350,
  },
  cardContent:{
    flexDirection:'row',
    marginLeft:10,
  },
  iconContent:{
    flexDirection:'row',
    marginLeft:10,
    alignContent:'center',
    justifyContent:'center',
  },
  imageContent:{
    marginTop:-40,
  },
  tagsContent:{
    marginTop:10,
    flexWrap:'wrap'
  },
  image:{
    width:60,
    height:60,
    borderRadius:30,
  },
  name:{
    fontSize:20,
    fontWeight: 'bold',
    marginLeft:10,
    alignSelf: 'center'
  },
  btnColor: {
    padding:10,
    borderRadius:40,
    marginHorizontal:3,
    backgroundColor: "#eee",
    marginTop:5,
  },
  healthIcon: {
    width:40,
    height:40,
  },
  normalIcon: {
    padding: 5,
    margin: 5,
    borderRadius:40,
    borderWidth:5,
    borderColor:"green",
  },
  userContainer: {
    flex: 1,
    backgroundColor: '#EBEBEB',
  },
  topBar: {
    flexDirection: 'row',
    padding: 10,
    paddingTop: 30,
    flex: 1,
    borderWidth: 5,
  },
  graphContainer: {
    flex: 5,
    borderWidth: 5,
  },
  backButton: {
    width: 50,
    height: 50,
  },
});

export default App;
