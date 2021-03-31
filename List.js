import React, { useState } from 'react';
import {Text, View, StyleSheet, TouchableOpacity,StatusBar} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';


const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
  

  const Item = ({ title }) => (
    <View style={{}}>
      <Text style={{}}>{title}</Text>
    </View>
  );
  

const List = (props) => {
    const [hidden, setHidden] = useState(true);
    const [dataList,setDataList]=useState()

    React.useEffect(async () => {
       
          var response = await  fetch('https://swapi.dev/api/planets/');
          
        
          if (response.ok === true) {
            
            const json = await response.json();
            //console.log(json.results[0].name)
            await setDataList(json.results)

        }


          
      }, []);

      const renderItem = ({ item }) => (
        <Item title={item.title} />
      );
    

    return (


        <View style={{flex:1, marginHorizontal:14,
            }}>
               <StatusBar
                   animated={true}
                   hidden={hidden} />


            <View style={{flex:.8,}}>
            {/* {dataList? */}
            
            <FlatList
            //style={{marginLeft:12}}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
            {/* :null} */}
            

            </View>

            <View style={{flex:.2,justifyContent:"center"}}>

            <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        
      }}
      style={{ width: '100%',
      marginTop:33,
      backgroundColor:"green",
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: (16),
      height: (55)}}>
      <Text style={{ fontSize: (16),
    fontWeight: 'bold',
    padding: 12,
    
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: 0.32,
    textAlign: "center"
  
  }}>Back</Text>
    </TouchableOpacity>

            </View>

            
                   </View>
    );
  };
  
  export default List;