
import CustomHeader from '../Components/CustomHeader';
import { Stack } from 'expo-router';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import Colors from '../constants/Colors';


export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'index',
};


export default function RootLayoutNav() {

  return (
    <BottomSheetModalProvider>
      <Stack>
      <Stack.Screen 
      name="index" 
       options={{
        header:() => <CustomHeader/>,
      }} 
      />
      <Stack.Screen 
      name="(modal)/filter" 
      options={{
        presentation: 'modal',
        headerTitle: 'Filter',
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: Colors.lightGrey,
        },
      }}
      
      />
    </Stack>
    </BottomSheetModalProvider>
  
  );
}
