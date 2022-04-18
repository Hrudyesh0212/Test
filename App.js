

import React, {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerContent } from './screens/DrawerContent';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Maintab from './screens/Maintab';
import RootStackScreen from './screens/RootStackScreen'
//import { useEffect } from 'react/cjs/react.production.min';
import { View, ActivityIndicator } from 'react-native';
import { AuthContext } from './components/context';
const Drawer = createDrawerNavigator();

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null); 
  
  const authContext = React.useMemo(() => ({
    signIn:() => {
      setUserToken('fgkj');
      setIsLoading(false);
    },
    signOut:() => {
      setUserToken(null);
      setIsLoading(false);
    },
    signUp: () => {
      setUserToken('fgkj');
      setIsLoading(false);
    },
  }));

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    },1000);
  },[]);

  if( isLoading ) {
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }
  return (
    <AuthContext.Provider value={authContext}>
    <NavigationContainer>
    {  userToken !== null ? (
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
          <Drawer.Screen name="HomeDrawer" component={Maintab} />
        </Drawer.Navigator>
      )
    :
      <RootStackScreen/>
}
    </NavigationContainer>
    </AuthContext.Provider>
  );
}
export default App;