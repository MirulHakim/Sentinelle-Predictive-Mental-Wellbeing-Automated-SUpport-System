import React, { useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const ProfileScreen: React.FC = () => {
  const [profile, setProfile] = useState({
    name: "Student Name",
    email: "student@example.com",
    major: "",
    skills: "",
    jobInterests: "",
  });

  const handleSave = () => {
    Alert.alert("Success", "Profile saved successfully!");
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.section}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          value={profile.name}
          onChangeText={(text) => setProfile({ ...profile, name: text })}
          editable={false}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={profile.email}
          onChangeText={(text) => setProfile({ ...profile, email: text })}
          editable={false}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Major/Field of Study</Text>
        <TextInput
          style={[styles.input, styles.editableInput]}
          value={profile.major}
          onChangeText={(text) => setProfile({ ...profile, major: text })}
          placeholder="e.g., Computer Science, Psychology"
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Skills</Text>
        <TextInput
          style={[styles.input, styles.editableInput, styles.multilineInput]}
          value={profile.skills}
          onChangeText={(text) => setProfile({ ...profile, skills: text })}
          placeholder="e.g., React, Python, Communication"
          multiline
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Job Interests</Text>
        <TextInput
          style={[styles.input, styles.editableInput, styles.multilineInput]}
          value={profile.jobInterests}
          onChangeText={(text) =>
            setProfile({ ...profile, jobInterests: text })
          }
          placeholder="e.g., Startup, Remote, Tech Industry"
          multiline
        />
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
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
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    color: "#333",
  },
  editableInput: {
    backgroundColor: "#fff",
  },
  multilineInput: {
    minHeight: 80,
    textAlignVertical: "top",
  },
  saveButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  logoutButton: {
    backgroundColor: "#FF3B30",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 30,
  },
  logoutButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProfileScreen;
