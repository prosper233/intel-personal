import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
} from "react-native";
import { Shield, Zap, Globe } from "lucide-react-native";
import { useRouter } from "expo-router";

const onboardingSteps = [
  {
    icon: Shield,
    title: "Stay Safe Together",
    description:
      "Join thousands of Nigerians sharing real-time safety information in your community",
    image: require("./(app)/images/Frame.jpg"),
  },
  {
    icon: Zap,
    title: "Instant Alerts",
    description:
      "Get notified immediately about suspicious activities and emergencies in your area",
    image: require("./(app)/images/Frame2.jpg"),
  },
  {
    icon: Globe,
    title: "Community Powered",
    description:
      "Help others stay informed by sharing intel about incidents you witness",
    image: require("./(app)/images/Frame3.jpg"),
  },
];

export default function Index() {
  const [currentStep, setCurrentStep] = useState(0);
  const router = useRouter();

  const step = onboardingSteps[currentStep];
  const Icon = step.icon;

  const handleNext = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      router.replace("/login");
    }
  };

  const handleSkip = () => {
    router.replace("/login");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
  <View style={styles.iconContainer}>
    <Icon size={64} color="#ffffff" />
  </View>

  <Text style={styles.appName}>Intel</Text>
  <Text style={styles.title}>{step.title}</Text>
  <Text style={styles.description}>{step.description}</Text>

  <Image
    source={step.image}
    style={styles.image}
    resizeMode="contain"
  />
</View>


      {/* PAGINATION */}
      <View style={styles.pagination}>
        {onboardingSteps.map((_, idx) => (
          <View
            key={idx}
            style={[
              styles.dot,
              idx === currentStep ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>

      {/* BUTTONS */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>
            {currentStep === onboardingSteps.length - 1
              ? "Get Started"
              : "Next"}
          </Text>
        </TouchableOpacity>

        {currentStep < onboardingSteps.length - 1 && (
          <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
            <Text style={styles.skipButtonText}>Skip</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  image: {
    width: 290,
    height: 290,
    marginTop: 24,
  },
  iconContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#FF3A3A",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
  },
  appName: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#020202",
    marginBottom: 12,
  },
  title: {
    fontSize: 26,
    fontWeight: "600",
    color: "#0E0C0C",
    textAlign: "center",
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: "#A0A0A0",
    textAlign: "center",
    lineHeight: 24,
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 32,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 6,
  },
  activeDot: {
    backgroundColor: "#FF3A3A",
    width: 24,
  },
  inactiveDot: {
    backgroundColor: "#333",
  },
  buttonContainer: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  nextButton: {
    backgroundColor: "#FF3A3A",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 12,
  },
  nextButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
  },
  skipButton: {
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  skipButtonText: {
    color: "#050505",
    fontSize: 16,
  },
});
