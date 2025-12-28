import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      className="flex-1 items-center justify-center bg-white"
    >
      <Text className="text-5xl text-primary font-bold mb-2">Welcoome!</Text>
      <Link href="/onboarding">Get Started</Link>
      <Link
        href={{
          pathname: "/movie/[id]",
          params: { id: "papaOfTheYear" }
        }}
      >
        New Moview Release
      </Link>
      <Link href="/movie/betaOfTheYear">New Moview Release 2026</Link>
    </View>
  );
}
