import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

export default function SignUpScreen() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const isEmailValid = email.includes('@');

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require('./assets/logo.png')} 
        style={styles.logo}
      />

      {/* Title */}
      <Text style={styles.title}>Sign Up</Text>
      <Text style={styles.subtitle}>Enter your credentials to continue</Text>

      {/* Username */}
      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Enter your name"
        placeholderTextColor="#aaa"
      />

      {/* Email */}
      <Text style={styles.label}>Email</Text>
      <View style={styles.inputWithIcon}>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          placeholderTextColor="#aaa"
          keyboardType="email-address"
        />
        {isEmailValid && (
          <Feather name="check" size={20} color="green" style={styles.checkIcon} />
        )}
      </View>

      {/* Password */}
      <Text style={styles.label}>Password</Text>
      <View style={styles.inputWithIcon}>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
          <Icon name={showPassword ? 'eye' : 'eye-off'} size={20} color="#999" />
        </TouchableOpacity>
      </View>

      {/* Terms & Privacy */}
      <Text style={styles.termsText}>
        By continuing you agree to our{' '}
        <Text style={styles.linkText}>Terms of Service</Text> and{' '}
        <Text style={styles.linkText}>Privacy Policy</Text>.
      </Text>

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.signUpText}>Sing Up</Text>
      </TouchableOpacity>

      {/* Already have account */}
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Already have an account? </Text>
        <TouchableOpacity>
          <Text style={styles.loginLink}>Singup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 25,
    justifyContent: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginBottom: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    color: '#000',
  },
  subtitle: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    marginBottom: 30,
  },
  label: {
    fontSize: 14,
    color: '#555',
    marginTop: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 8,
    fontSize: 16,
    color: '#000',
    paddingRight: 40,
  },
  inputWithIcon: {
    position: 'relative',
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: 12,
  },
  checkIcon: {
    position: 'absolute',
    right: 10,
    top: 12,
  },
  termsText: {
    fontSize: 13,
    color: '#777',
    marginTop: 20,
    textAlign: 'center',
  },
  linkText: {
    color: '#39B54A',
    fontWeight: '500',
  },
  signUpButton: {
    backgroundColor: '#39B54A',
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 25,
  },
  signUpText: {
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
    fontSize: 16,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  loginText: {
    color: '#444',
  },
  loginLink: {
    color: '#39B54A',
    fontWeight: '500',
  },
});
