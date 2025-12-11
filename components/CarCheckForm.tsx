import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { LinearGradient } from 'expo-linear-gradient';
import { checkCarFraud, CarData } from '../services/api';
import { Theme } from './ui/Theme';

interface CarCheckFormProps {
  onResultsReceived: (results: any) => void;
}

export default function CarCheckForm({ onResultsReceived }: CarCheckFormProps) {
  const [formData, setFormData] = useState<CarData>({
    make: '',
    model: '',
    year: new Date().getFullYear(),
    reported_km: 0,
    fuelType: 'Diesel',
    gearbox: 'Manual',
    horsepower: 0,
    price: 0,
    offerType: 'Used'
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateField = (field: keyof CarData, value: string) => {
    if (field === 'year' || field === 'reported_km' || field === 'horsepower' || field === 'price') {
      // Remove any non-numeric characters (spaces, commas, dots, etc.)
      const cleanValue = value.replace(/[^0-9]/g, '');
      setFormData(prev => ({ ...prev, [field]: cleanValue === '' ? 0 : Number(cleanValue) }));
    } else {
      setFormData(prev => ({ ...prev, [field]: value }));
    }
  };

  const handleSubmit = async () => {
    setError(null);
    setLoading(true);

    try {
      const results = await checkCarFraud(formData);
      onResultsReceived(results);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to check car fraud');
    } finally {
      setLoading(false);
    }
  };

  const isFormValid = () => {
    return (
      formData.make.trim() !== '' &&
      formData.model.trim() !== '' &&
      formData.year > 1900 &&
      formData.reported_km >= 0 &&
      formData.horsepower > 0 &&
      formData.price > 0
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>Analiza Kilometraže</Text>
            <Text style={styles.subtitle}>AI sistem za detekciju manipulacije odometra</Text>
          </View>

          <View style={styles.form}>
            <View style={styles.fieldContainer}>
              <Text style={styles.label}>Marka</Text>
              <TextInput
                style={styles.input}
                placeholder="npr. Toyota"
                value={formData.make}
                onChangeText={(value) => updateField('make', value)}
                placeholderTextColor={Theme.colors.textMuted}
              />
            </View>

            <View style={styles.fieldContainer}>
              <Text style={styles.label}>Model</Text>
              <TextInput
                style={styles.input}
                placeholder="npr. Camry"
                value={formData.model}
                onChangeText={(value) => updateField('model', value)}
                placeholderTextColor={Theme.colors.textMuted}
              />
            </View>

            <View style={styles.row}>
              <View style={[styles.fieldContainer, styles.halfWidth]}>
                <Text style={styles.label}>Godina</Text>
                <TextInput
                  style={styles.input}
                  placeholder="2020"
                  value={String(formData.year)}
                  onChangeText={(value) => updateField('year', value)}
                  keyboardType="numeric"
                  placeholderTextColor={Theme.colors.textMuted}
                />
              </View>

              <View style={[styles.fieldContainer, styles.halfWidth]}>
                <Text style={styles.label}>Kilometraža</Text>
                <TextInput
                  style={styles.input}
                  placeholder="50000"
                  value={formData.reported_km ? String(formData.reported_km) : ''}
                  onChangeText={(value) => updateField('reported_km', value)}
                  keyboardType="numeric"
                  placeholderTextColor={Theme.colors.textMuted}
                />
              </View>
            </View>

            <View style={styles.row}>
              <View style={[styles.fieldContainer, styles.halfWidth]}>
                <Text style={styles.label}>Kubikaža</Text>
                <TextInput
                  style={styles.input}
                  placeholder="150"
                  value={formData.horsepower ? String(formData.horsepower) : ''}
                  onChangeText={(value) => updateField('horsepower', value)}
                  keyboardType="numeric"
                  placeholderTextColor={Theme.colors.textMuted}
                />
              </View>

              <View style={[styles.fieldContainer, styles.halfWidth]}>
                <Text style={styles.label}>Cijena (€)</Text>
                <TextInput
                  style={styles.input}
                  placeholder="15000"
                  value={formData.price ? String(formData.price) : ''}
                  onChangeText={(value) => updateField('price', value)}
                  keyboardType="numeric"
                  placeholderTextColor={Theme.colors.textMuted}
                />
              </View>
            </View>

            <View style={styles.fieldContainer}>
              <Text style={styles.label}>Tip goriva</Text>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={formData.fuelType}
                  onValueChange={(value) => updateField('fuelType', value)}
                  style={styles.picker}
                  dropdownIconColor={Theme.colors.textSecondary}
                >
                  <Picker.Item label="Benzin" value="Petrol" color={Theme.colors.textPrimary} />
                  <Picker.Item label="Dizel" value="Diesel" color={Theme.colors.textPrimary} />
                  <Picker.Item label="Hibrid" value="Hybrid" color={Theme.colors.textPrimary} />
                  <Picker.Item label="Električni" value="Electric" color={Theme.colors.textPrimary} />
                </Picker>
              </View>
            </View>

            <View style={styles.row}>
              <View style={[styles.fieldContainer, styles.halfWidth]}>
                <Text style={styles.label}>Mjenjač</Text>
                <View style={styles.pickerContainer}>
                  <Picker
                    selectedValue={formData.gearbox}
                    onValueChange={(value) => updateField('gearbox', value)}
                    style={styles.picker}
                    dropdownIconColor={Theme.colors.textSecondary}
                  >
                    <Picker.Item label="Manualni" value="Manual" color={Theme.colors.textPrimary} />
                    <Picker.Item label="Automatski" value="Automatic" color={Theme.colors.textPrimary} />
                  </Picker>
                </View>
              </View>

              <View style={[styles.fieldContainer, styles.halfWidth]}>
                <Text style={styles.label}>Tip ponude</Text>
                <View style={styles.pickerContainer}>
                  <Picker
                    selectedValue={formData.offerType}
                    onValueChange={(value) => updateField('offerType', value)}
                    style={styles.picker}
                    dropdownIconColor={Theme.colors.textSecondary}
                  >
                    <Picker.Item label="Polovni" value="Used" color={Theme.colors.textPrimary} />
                    <Picker.Item label="Novi" value="New" color={Theme.colors.textPrimary} />
                  </Picker>
                </View>
              </View>
            </View>
          </View>

          {error && (
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>{error}</Text>
            </View>
          )}

          <TouchableOpacity
            onPress={handleSubmit}
            disabled={!isFormValid() || loading}
            style={styles.buttonContainer}
          >
            <LinearGradient
              colors={
                !isFormValid() || loading
                  ? [Theme.colors.surfaceHighlight, Theme.colors.surfaceHighlight]
                  : [Theme.colors.primaryDark, Theme.colors.primary]
              }
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.submitButton}
            >
              {loading ? (
                <ActivityIndicator color="white" />
              ) : (
                <Text style={styles.submitButtonText}>POKRENI ANALIZU</Text>
              )}
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  content: {
    padding: 24,
  },
  header: {
    marginBottom: 32,
    alignItems: 'center',
    paddingVertical: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: Theme.colors.textPrimary,
    marginBottom: 8,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 14,
    color: Theme.colors.textSecondary,
    textAlign: 'center',
    maxWidth: '80%',
  },
  form: {
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  halfWidth: {
    flex: 1,
  },
  fieldContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: Theme.colors.textSecondary,
    marginBottom: 8,
    marginLeft: 4,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  input: {
    backgroundColor: Theme.colors.surface,
    borderRadius: Theme.borderRadius.m,
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 16,
    color: Theme.colors.textPrimary,
    borderWidth: 1,
    borderColor: Theme.colors.border,
  },
  pickerContainer: {
    backgroundColor: Theme.colors.surface,
    borderRadius: Theme.borderRadius.m,
    borderWidth: 1,
    borderColor: Theme.colors.border,
    overflow: 'hidden',
    height: 56, // Match input height
    justifyContent: 'center',
  },
  picker: {
    color: Theme.colors.textPrimary,
    marginLeft: -4, // Adjust for default picker padding
  },
  errorContainer: {
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
    borderWidth: 1,
    borderColor: Theme.colors.error,
    borderRadius: Theme.borderRadius.m,
    padding: 16,
    marginBottom: 24,
  },
  errorText: {
    color: Theme.colors.error,
    fontSize: 14,
    textAlign: 'center',
  },
  buttonContainer: {
    borderRadius: Theme.borderRadius.l,
    overflow: 'hidden',
    ...Theme.shadows.glow,
  },
  submitButton: {
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});
