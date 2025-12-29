import { Link } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  return (
    <SafeAreaView
      className="flex-1 items-center justify-center bg-white"
    >
      <Text className="text-5xl text-primary font-bold mb-2">Welcome!</Text>
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
    </SafeAreaView>
  );
}
