import {
    StatusBar,
    
    Text,TouchableOpacity,
    Picker,
    View,TextInput,
  } from 'react-native';
  
  import React, { useState } from 'react';

const Registration = ()=>
{


    const [hidden, setHidden] = useState(true);
    const [selectedValue, setSelectedValue] = useState("Select Planet");
return (
<View style={{flex:1, marginHorizontal:14,
 justifyContent:"center"
 
 }}>
    <StatusBar
        animated={true}
        hidden={hidden} />
  
  {/* Character Name */}

    <View style={{ }}>
<Text style={{fontSize:22}}>Character Name</Text>
<TextInput style={{backgroundColor:"pink",height:55,borderRadius:13, fontSize:22 }} ></TextInput>
    </View>

    <View style={{    
      alignItems:"center",
     marginBottom:90,
    }}>

<Picker
  
  style={{ height: 100, width: 100 }}
  onValueChange={(itemValue, itemIndex) =>
   null
  }>
  <Picker.Item label="Planet 1" value="1" />
  <Picker.Item label="Planet 2" value="2" />
</Picker>
    </View>



    <View>
<Text style={{fontSize:22}}>Age</Text>
<TextInput style={{backgroundColor:"pink",height:55,borderRadius:13, fontSize:22 }} ></TextInput>
    </View>


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
  
  }}>Next</Text>
    </TouchableOpacity>



</View >
 
)
}

export default Registration;