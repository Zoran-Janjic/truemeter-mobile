import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Theme } from './ui/Theme';

interface FraudCheckResult {
  fraud_score: number;
  is_suspicious: boolean;
  expected_km: number;
  reasons: string[];
}

interface ResultsDisplayProps {
  results: FraudCheckResult;
  onCheckAnother: () => void;
}

export default function ResultsDisplay({ results, onCheckAnother }: ResultsDisplayProps) {
  const getFraudLevel = (score: number): { text: string; color: string; gradient: [string, string] } => {
    if (score >= 70) {
      return {
        text: 'VISOK RIZIK',
        color: '#EF4444',
        gradient: ['#EF4444', '#B91C1C']
      };
    } else if (score >= 40) {
      return {
        text: 'SREDNJI RIZIK',
        color: '#F59E0B',
        gradient: ['#F59E0B', '#B45309']
      };
    } else {
      return {
        text: 'NIZAK RIZIK',
        color: '#10B981',
        gradient: ['#10B981', '#059669']
      };
    }
  };

  const fraudLevel = getFraudLevel(results.fraud_score);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Rezultat Analize</Text>
          <Text style={styles.subtitle}>Detaljni izvještaj AI procjene</Text>
        </View>

        <View style={styles.scoreCard}>
          <Text style={styles.cardLabel}>INDEKS RIZIKA PREVARE</Text>

          <View style={styles.scoreDisplay}>
            <LinearGradient
              colors={fraudLevel.gradient}
              style={styles.scoreCircle}
            >
              <Text style={styles.scoreText}>
                {results.fraud_score.toFixed(0)}
                <Text style={styles.percentSymbol}>%</Text>
              </Text>
              <Text style={styles.riskLabel}>{fraudLevel.text}</Text>
            </LinearGradient>
          </View>

          <View style={styles.progressBarContainer}>
            <LinearGradient
              colors={fraudLevel.gradient}
              style={[
                styles.progressBar,
                { width: `${results.fraud_score}%` }
              ]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            />
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.rowContainer}>
            <View>
              <Text style={styles.rowLabel}>OČEKIVANA KILOMETRAŽA</Text>
              <Text style={styles.rowValueHighlight}>
                {Math.round(results.expected_km).toLocaleString()} km
              </Text>
            </View>
            <View style={styles.iconContainer}>
              <Text style={{ fontSize: 24 }}>🚗</Text>
            </View>
          </View>
        </View>

        {results.reasons && results.reasons.length > 0 && (
          <View style={styles.card}>
            <Text style={styles.cardLabel}>DETEKTOVANE NEPRAVILNOSTI</Text>

            <View style={styles.reasonsList}>
              {results.reasons.map((reason, index) => (
                <View key={index} style={styles.reasonItem}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.reasonText}>{reason}</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        <LinearGradient
          colors={[Theme.colors.surfaceHighlight, Theme.colors.surface]}
          style={styles.infoBox}
        >
          <Text style={styles.infoIcon}>💡</Text>
          <Text style={styles.infoText}>
            Ova analiza koristi mašinsko učenje na osnovu hiljada sličnih vozila. Rezultat je indikator vjerovatnoće, a ne apsolutna potvrda.
          </Text>
        </LinearGradient>

        <TouchableOpacity
          onPress={onCheckAnother}
          style={styles.buttonContainer}
        >
          <LinearGradient
            colors={[Theme.colors.primaryDark, Theme.colors.primary]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>NOVA ANALIZA</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background,
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
    marginTop: 10,
  },
  title: {
    fontSize: 24,
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
  },
  scoreCard: {
    backgroundColor: Theme.colors.surface,
    borderRadius: Theme.borderRadius.l,
    padding: 24,
    marginBottom: 16,
    alignItems: 'center',
    ...Theme.shadows.medium,
  },
  card: {
    backgroundColor: Theme.colors.surface,
    borderRadius: Theme.borderRadius.l,
    padding: 24,
    marginBottom: 16,
    ...Theme.shadows.small,
  },
  cardLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: Theme.colors.textSecondary,
    marginBottom: 20,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  scoreDisplay: {
    alignItems: 'center',
    marginBottom: 24,
  },
  scoreCircle: {
    width: 140,
    height: 140,
    borderRadius: 70,
    alignItems: 'center',
    justifyContent: 'center',
    ...Theme.shadows.glow,
  },
  scoreText: {
    fontSize: 48,
    fontWeight: '800',
    color: '#ffffff',
    lineHeight: 56,
  },
  percentSymbol: {
    fontSize: 24,
    fontWeight: '600',
    color: 'rgba(255,255,255,0.8)',
  },
  riskLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: '#ffffff',
    marginTop: 4,
    letterSpacing: 0.5,
  },
  progressBarContainer: {
    backgroundColor: Theme.colors.surfaceHighlight,
    borderRadius: Theme.borderRadius.round,
    height: 8,
    width: '100%',
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    borderRadius: Theme.borderRadius.round,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowLabel: {
    fontSize: 11,
    color: Theme.colors.textSecondary,
    fontWeight: '700',
    textTransform: 'uppercase',
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  rowValueHighlight: {
    fontSize: 24,
    fontWeight: '800',
    color: Theme.colors.primaryLight,
  },
  iconContainer: {
    width: 48,
    height: 48,
    backgroundColor: 'rgba(59, 130, 246, 0.1)',
    borderRadius: Theme.borderRadius.m,
    alignItems: 'center',
    justifyContent: 'center',
  },
  reasonsList: {
    marginTop: 8,
  },
  reasonItem: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  bullet: {
    color: Theme.colors.error,
    marginRight: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  reasonText: {
    flex: 1,
    fontSize: 14,
    color: Theme.colors.textPrimary,
    lineHeight: 22,
  },
  infoBox: {
    borderRadius: Theme.borderRadius.m,
    padding: 16,
    marginBottom: 24,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Theme.colors.border,
  },
  infoIcon: {
    marginRight: 12,
    fontSize: 16,
  },
  infoText: {
    flex: 1,
    fontSize: 13,
    color: Theme.colors.textSecondary,
    lineHeight: 20,
  },
  buttonContainer: {
    borderRadius: Theme.borderRadius.l,
    overflow: 'hidden',
    marginTop: 8,
    ...Theme.shadows.glow,
  },
  button: {
    paddingVertical: 20,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 1,
  },
});
