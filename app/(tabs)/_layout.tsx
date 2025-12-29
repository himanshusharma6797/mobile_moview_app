import { ImageBackground, Image, Text, StyleSheet, View } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { icons } from '@/constants/icons';
import { images } from '@/constants/images';

const TabIcon = ({
  focused,
  icon,
  title,
}: {
  focused: boolean;
  icon: any;
  title: string;
}) => {
  if (focused) {
    return (
      <ImageBackground
        source={images.highlight}
        className="flex justify-center items-center rounded-full overflow-hidden mt-4"
        style={styles.tabIcon}
      >
        <Image source={icon} tintColor={'#151312'} className="size-5" />
        <Text className="text-secondary text-base font-semibold">{title}</Text>
      </ImageBackground>
    );
  }
  return (
    <View
      className="size-full flex justify-center items-center mt-4 rounded-full overflow-hidden"
      style={styles.inactiveTabIcon}
    >
      <Image source={icon} tintColor={'#A8B5DB'} className="size-5" />
      <Text className="color-[#A8B5DB] text-base font-semibold">{title}</Text>
    </View>
  );
};

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarStyle: {
          backgroundColor: '#0f0d23',
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 36,
          position: 'absolute',
          overflow: 'hidden',
          borderWidth:1,
          borderColor:'#0f0d23'
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.home} title="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.search} title="Search" />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: 'Saved',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.save} title="Saved" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.person} title="Profile" />
          ),
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  tabIcon: {
    minWidth: 112,
    minHeight: 64,
    borderRadius: 28,
    overflow: 'hidden',
    marginTop: 24,
  },
  inactiveTabIcon: {
    minWidth: 112,
    minHeight: 64,
    borderRadius: 28,
    // overflow: 'hidden',
    marginTop: 36,
  },
});

export default _layout;
