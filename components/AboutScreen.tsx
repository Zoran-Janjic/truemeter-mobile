import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Theme } from './ui/Theme';

interface AboutScreenProps {
  onNavigateHome: () => void;
}

export default function AboutScreen({ onNavigateHome }: AboutScreenProps) {
  const openLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>O Aplikaciji</Text>
          <Text style={styles.subtitle}>
            TrueMeter: Revolucija u provjeri vozila
          </Text>
        </View>

        {/* Hero Card - The main differentiator */}
        <LinearGradient
          colors={[Theme.colors.primaryDark, '#1e3a8a']}
          style={styles.heroCard}
        >
          <Text style={styles.heroTitle}>Zašto TrueMeter?</Text>
          <Text style={styles.heroDescription}>
            Za razliku od servisa poput CarVertical-a, TrueMeter <Text style={{ fontWeight: 'bold' }}>ne zahtijeva</Text> broj šasije (VIN) da bi detektovao prevaru.
          </Text>

          <View style={styles.comparisonContainer}>
            <View style={styles.comparisonBlock}>
              <Text style={styles.comparisonLabel}>Drugi Servisi</Text>
              <Text style={styles.comparisonText}>❌ Trebaju VIN broj</Text>
              <Text style={styles.comparisonText}>❌ Koštaju 15-20€</Text>
              <Text style={styles.comparisonText}>❌ Provjeravaju istoriju</Text>
            </View>
            <View style={styles.verticalDivider} />
            <View style={styles.comparisonBlock}>
              <Text style={[styles.comparisonLabel, { color: Theme.colors.success }]}>TrueMeter</Text>
              <Text style={styles.comparisonText}>✅ Bez broja šasije</Text>
              <Text style={styles.comparisonText}>✅ Potpuno besplatno</Text>
              <Text style={styles.comparisonText}>✅ Analizira anomalije</Text>
            </View>
          </View>
        </LinearGradient>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Kako je to moguće?</Text>
          <Text style={styles.description}>
            Većina prevara prati određene statističke obrasce. Umjesto da tražimo papirni trag konkretnog vozila (koji se može falsifikovati), naš AI analizira samo vozilo.
          </Text>

          <View style={styles.methodologyBox}>
            <Text style={styles.methodologyTitle}>🧠 Naš Pristup</Text>
            <Text style={styles.methodologyText}>
              Naš AI model je naučio "izgled" poštenog vs. manipulisanog vozila analizirajući <Text style={{ fontWeight: 'bold', color: Theme.colors.primaryLight }}>46,000+</Text> primjera sa njemačkog tržišta.
            </Text>
            <Text style={[styles.methodologyText, { marginTop: 10 }]}>
              On traži nelogičnosti u odnosu cijene, godišta, kilometraže, snage i tipa motora koje ljudsko oko ne može primijetiti.
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Glavne Prednosti</Text>

          <View style={styles.featureRow}>
            <View style={styles.iconBox}>
              <Text style={{ fontSize: 24 }}>🛡️</Text>
            </View>
            <View style={styles.featureContent}>
              <Text style={styles.featureTitle}>Privatnost</Text>
              <Text style={styles.featureDesc}>
                Provjerite bilo koji oglas anonimno. Ne morate zvati prodavca da vam pošalje broj šasije.
              </Text>
            </View>
          </View>

          <View style={styles.featureRow}>
            <View style={styles.iconBox}>
              <Text style={{ fontSize: 24 }}>⚡</Text>
            </View>
            <View style={styles.featureContent}>
              <Text style={styles.featureTitle}>Brzina</Text>
              <Text style={styles.featureDesc}>
                Rezultat dobijate za manje od sekunde. Nema čekanja na generisanje izvještaja.
              </Text>
            </View>
          </View>

          <View style={styles.featureRow}>
            <View style={styles.iconBox}>
              <Text style={{ fontSize: 24 }}>💰</Text>
            </View>
            <View style={styles.featureContent}>
              <Text style={styles.featureTitle}>Ušteda</Text>
              <Text style={styles.featureDesc}>
                Filtrirajte loše ponude besplatno prije nego što platite mehaničara ili detaljan izvještaj.
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.warningCard}>
          <Text style={styles.warningTitle}>⚠️ Važna Napomena</Text>
          <Text style={styles.warningText}>
            TrueMeter je alat za <Text style={{ fontWeight: 'bold' }}>procjenu rizika</Text>. Rezultat je vjerovatnoća (predikcija), a ne apsolutna garancija. Uvijek preporučujemo pregled vozila uživo.
          </Text>
        </View>

        <View style={styles.devBox}>
          <Text style={styles.devText}>
            Napravio:{' '}
            <Text style={styles.devLink} onPress={() => openLink('https://www.linkedin.com/in/janjiczoran/')}>
              Zoran Janjić
            </Text>
          </Text>
          <Text style={styles.versionText}>v1.0.0 • AI Model v2.1</Text>
        </View>
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
    marginBottom: 24,
    alignItems: 'center',
    marginTop: 10,
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
    fontSize: 16,
    color: Theme.colors.textSecondary,
    textAlign: 'center',
  },
  heroCard: {
    backgroundColor: Theme.colors.primary,
    borderRadius: Theme.borderRadius.l,
    padding: 24,
    marginBottom: 24,
    ...Theme.shadows.medium,
  },
  heroTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: 12,
  },
  heroDescription: {
    fontSize: 15,
    color: 'rgba(255,255,255,0.9)',
    lineHeight: 22,
    marginBottom: 20,
  },
  comparisonContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: Theme.borderRadius.m,
    padding: 16,
  },
  comparisonBlock: {
    flex: 1,
  },
  verticalDivider: {
    width: 1,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginHorizontal: 16,
  },
  comparisonLabel: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'rgba(255,255,255,0.7)',
    marginBottom: 12,
    textTransform: 'uppercase',
  },
  comparisonText: {
    color: '#ffffff',
    fontSize: 13,
    marginBottom: 8,
    fontWeight: '500',
  },
  card: {
    backgroundColor: Theme.colors.surface,
    borderRadius: Theme.borderRadius.l,
    padding: 24,
    marginBottom: 16,
    ...Theme.shadows.small,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: Theme.colors.textPrimary,
    marginBottom: 12,
  },
  description: {
    fontSize: 15,
    color: Theme.colors.textSecondary,
    lineHeight: 24,
    marginBottom: 20,
  },
  methodologyBox: {
    backgroundColor: Theme.colors.surfaceHighlight,
    borderRadius: Theme.borderRadius.m,
    padding: 16,
    borderLeftWidth: 4,
    borderLeftColor: Theme.colors.primary,
  },
  methodologyTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: Theme.colors.textPrimary,
    marginBottom: 8,
  },
  methodologyText: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
    lineHeight: 20,
  },
  featureRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  iconBox: {
    width: 48,
    height: 48,
    backgroundColor: Theme.colors.surfaceHighlight,
    borderRadius: Theme.borderRadius.m,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: Theme.colors.textPrimary,
    marginBottom: 4,
  },
  featureDesc: {
    fontSize: 14,
    color: Theme.colors.textSecondary,
    lineHeight: 20,
  },
  warningCard: {
    backgroundColor: 'rgba(245, 158, 11, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(245, 158, 11, 0.3)',
    borderRadius: Theme.borderRadius.m,
    padding: 20,
    marginBottom: 24,
  },
  warningTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: Theme.colors.warning,
    marginBottom: 8,
  },
  warningText: {
    fontSize: 14,
    color: Theme.colors.textSecondary,
    lineHeight: 20,
  },
  devBox: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  devText: {
    fontSize: 14,
    color: Theme.colors.textSecondary,
    marginBottom: 4,
  },
  devLink: {
    color: Theme.colors.primary,
    fontWeight: '700',
  },
  versionText: {
    fontSize: 12,
    color: Theme.colors.textMuted,
  },
});
