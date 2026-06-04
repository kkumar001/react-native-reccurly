import { Link } from "expo-router";
import { Text } from "react-native";
import { styled } from "nativewind";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <Text className="text-5xl font-sans-extrabold">
        Home
      </Text>
      <Link href="/onboarding" className="text-white mt-4 font-sans-bold rounded bg-primary p-4">
        Get Started
      </Link>
      <Link href="/(auth)/sign-in" className="text-white mt-4 font-sans-bold rounded bg-primary p-4">
        Sign In
      </Link>
      <Link href="/(auth)/sign-up" className="text-white mt-4 font-sans-bold rounded bg-primary p-4">
        Sign Up
      </Link>
    </SafeAreaView>
  );
}