// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import React from 'react';
// // import {Dimensions} from 'react-native';
// // import {ChartDot, ChartPath, ChartPathProvider, monotoneCubicInterpolation} from '@rainbow-me/animated-charts';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


// // export const {width: SIZE} = Dimensions.get('window');

// // export const data = [
// //   {x: 1453075200, y: 1.47}, {x: 1453161600, y: 1.37},
// //   {x: 1453248000, y: 1.53}, {x: 1453334400, y: 1.54},
// //   {x: 1453420800, y: 1.52}, {x: 1453507200, y: 2.03},
// //   {x: 1453593600, y: 2.10}, {x: 1453680000, y: 2.50},
// //   {x: 1453766400, y: 2.30}, {x: 1453852800, y: 2.42},
// //   {x: 1453939200, y: 2.55}, {x: 1454025600, y: 2.41},
// //   {x: 1454112000, y: 2.43}, {x: 1454198400, y: 2.20},
// // ];

// // const points = monotoneCubicInterpolation({data, range: 40});

// // const BasicExample = () => (
// //   <View style={{ backgroundColor: 'black' }}>
// //     <ChartPathProvider data={{ points, smoothingStrategy: 'bezier' }}>
// //       <ChartPath height={SIZE / 2} stroke="yellow" width={SIZE} />
// //       <ChartDot style={{ backgroundColor: 'blue' }} />
// //     </ChartPathProvider>
// //   </View>
// // );

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  TextInput,
  FlatList
} from 'react-native';

export default class Users extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, color:"#FF4500", icon:"https://bootdey.com/img/Content/avatar/avatar1.png", name: "User 1", tags:['tag 1', 'tag 2', 'tag 3', 'Mobile dev', 'RN', 'Bootdey']},
        {id:2, color:"#87CEEB", icon:"https://bootdey.com/img/Content/avatar/avatar2.png", name: "User 2", tags:['tag 1', 'tag 2', 'tag 3', 'Dey-Dey', 'Developer']}, 
        {id:3, color:"#4682B4", icon:"https://bootdey.com/img/Content/avatar/avatar3.png", name: "User 3", tags:['tag 1', 'tag 2', 'tag 3']}, 
        {id:4, color:"#6A5ACD", icon:"https://bootdey.com/img/Content/avatar/avatar4.png", name: "User 4", tags:['tag 1', 'tag 2', 'tag 3']}, 
        {id:5, color:"#FF69B4", icon:"https://bootdey.com/img/Content/avatar/avatar5.png", name: "User 5", tags:['tag 1', 'tag 2', 'tag 3']}, 
        {id:6, color:"#00BFFF", icon:"https://bootdey.com/img/Content/avatar/avatar6.png", name: "User 6", tags:['tag 1', 'tag 2', 'tag 3']}, 
        {id:7, color:"#00FFFF", icon:"https://bootdey.com/img/Content/avatar/avatar1.png", name: "User 7", tags:['tag 1', 'tag 2', 'tag 3']}, 
        {id:8, color:"#20B2AA", icon:"https://bootdey.com/img/Content/avatar/avatar2.png", name: "User 8", tags:['tag 1', 'tag 2', 'tag 3']},
        {id:9, color:"#191970", icon:"https://bootdey.com/img/Content/avatar/avatar3.png", name: "User 9", tags:['tag 1', 'tag 2', 'tag 3']},
      ],
    };
  }

  cardClickEventListener = (item) => {
    Alert.alert(item.name);
  }

  tagClickEventListener = (tagName) => {
    Alert.alert(tagName);
  }

  renderTags = (item) =>{
    return item.tags.map((tag, key) => {
      return (
        <TouchableOpacity key={key} style={styles.btnColor} onPress={() => {this.tagClickEventListener(tag)}}>
          <Text>{tag}</Text>
        </TouchableOpacity> 
      );
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.formContent}>
          <View style={styles.inputContainer}>
            <Image style={[styles.icon, styles.inputIcon]} source={{uri: 'https://png.icons8.com/search/androidL/100/000000'}}/>
            <TextInput style={styles.inputs}
              ref={'txtSearch'}
              placeholder="Search"
              underlineColorAndroid='transparent'
              onChangeText={(name_address) => this.setState({name_address})}/>
          </View>
        </View>

        <FlatList 
          style={styles.notificationList}
          data={this.state.data}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={[styles.card, {borderColor:item.color}]} onPress={() => {this.cardClickEventListener(item)}}>
                <View style={styles.cardContent}>
                  <Image style={[styles.image, styles.imageContent]} source={{uri: item.icon}}/>
                  <Text style={styles.name}>{item.name}</Text>
                </View>
                <View style={[styles.cardContent, styles.tagsContent]}>
                  {this.renderTags(item)}
                </View>
              </TouchableOpacity>
            )
          }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
  cardContent:{
    flexDirection:'row',
    marginLeft:10, 
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
});  

