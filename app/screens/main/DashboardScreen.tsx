import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const DashboardScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Mental Wellbeing Score</Text>
        <View style={styles.chartPlaceholder}>
          <Text style={styles.placeholderText}>
            Chart will be displayed here
          </Text>
          <Text style={styles.placeholderSubtext}>
            (Using react-native-chart-kit)
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Wellness Suggestions</Text>
        <View style={styles.suggestionCard}>
          <Text style={styles.suggestionTitle}>Take a 10-minute walk</Text>
          <Text style={styles.suggestionDescription}>
            Fresh air and movement can help clear your mind and boost mood.
          </Text>
        </View>
        <View style={styles.suggestionCard}>
          <Text style={styles.suggestionTitle}>Listen to lofi beats</Text>
          <Text style={styles.suggestionDescription}>
            Relaxing music can help reduce stress and anxiety.
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Job Recommendations</Text>
        <View style={styles.jobCard}>
          <Text style={styles.jobTitle}>Junior Developer - Tech Startup</Text>
          <Text style={styles.jobDescription}>
            Based on your profile and recent conversations
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 15,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#333",
  },
  chartPlaceholder: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 200,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  placeholderText: {
    fontSize: 14,
    color: "#666",
    marginBottom: 5,
  },
  placeholderSubtext: {
    fontSize: 12,
    color: "#999",
  },
  suggestionCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: "#4CAF50",
  },
  suggestionTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginBottom: 5,
  },
  suggestionDescription: {
    fontSize: 12,
    color: "#666",
  },
  jobCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: "#FF9800",
  },
  jobTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginBottom: 5,
  },
  jobDescription: {
    fontSize: 12,
    color: "#666",
  },
});

export default DashboardScreen;
