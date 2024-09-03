import { Button, Pressable, View } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function DrawerIcon({ onPress }: any) {
    return (
        // <Button
        //     color={'white'}
        //     title="test"
        //     onPress={onPress}
        // >
        // </Button>



        <Pressable
            onPress={onPress}
            style={{
                width: 40,
                height: 40,
                borderColor: 'black',
                borderWidth: 0.5,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 20,
                borderRadius: 5
            }}
        >
            <MaterialIcons
                size={30} color={'black'} name="menu"
            />
        </Pressable>



    );
}