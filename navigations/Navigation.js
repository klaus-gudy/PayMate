import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/Home";
import Property from "./screens/Property";
import Tenants from "./screens/Tenants";
import Settings from "./screens/Settings";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

const homeName = "Home";
const property = "Property";
const tenants = "Tenants";
const settings = "Settings";
const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator 
            initialRouteName={homeName}
            screenOptions={({ route }) => ({
                tabBarIcon: ({focused, color , size}) => {
                    let iconName;
                    let routeName = route.name;
                    if(routeName === homeName) {
                        iconName = focused ? "home" : "home-outline";
                    }else if(routeName === property) {
                        iconName = focused ? "business" : "business-outline";
                    } else if(routeName === tenants) {
                        iconName = focused ? "people" : "people-outline";
                    }else if(routeName === settings) {
                        iconName = focused ? "settings" : "settings-outline";
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            >
                <Tab.Screen name={homeName} component={HomeScreen} />
                <Tab.Screen name={property} component={Property} />
                <Tab.Screen name={tenants} component={Tenants} />
                <Tab.Screen name={settings} component={Settings} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}