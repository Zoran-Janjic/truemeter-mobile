import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import * as MailComposer from 'expo-mail-composer';
import { LinearGradient } from 'expo-linear-gradient';
import { Theme } from './ui/Theme';

interface AboutScreenProps {
  onNavigateHome: () => void;
}

export default function AboutScreen({ onNavigateHome }: AboutScreenProps) {
  const openLink = (url: string) => {
    Linking.openURL(url);
  };

  const handleContact = async () => {
    const isAvailable = await MailComposer.isAvailableAsync();

    if (isAvailable) {
      await MailComposer.composeAsync({
        recipients: ['janjiczoran23@gmail.com'],
        subject: 'TrueMeter Saradnja',
        body: 'Poštovani,\n\nZainteresovan/a sam za saradnju...',
      });
    } else {
      // Fallback if mail app is not configured
      Linking.openURL('mailto:janjiczoran23@gmail.com');
    }
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
          <Text style={styles.heroTitle}>Napredna AI Dijagnostika</Text>
          <Text style={styles.heroDescription}>
            TrueMeter koristi <Text style={{ fontWeight: 'bold' }}>inferencijalnu statistiku</Text> i <Text style={{ fontWeight: 'bold' }}>mašinsko učenje</Text> modele za procjenu rizika, eliminišući potrebu za invazivnim prikupljanjem podataka.
          </Text>

          <View style={styles.comparisonContainer}>
            <View style={styles.comparisonBlock}>
              <Text style={styles.comparisonLabel}>Klasični Servisi</Text>
              <Text style={styles.comparisonText}>❌ Deterministički zapisi</Text>
              <Text style={styles.comparisonText}>❌ Visoka cijena (15€+)</Text>
              <Text style={styles.comparisonText}>❌ Zahtijevaju VIN</Text>
            </View>
            <View style={styles.verticalDivider} />
            <View style={styles.comparisonBlock}>
              <Text style={[styles.comparisonLabel, { color: Theme.colors.success }]}>TrueMeter AI</Text>
              <Text style={styles.comparisonText}>✅ Probabilistička analiza</Text>
              <Text style={styles.comparisonText}>✅ Besplatan pristup</Text>
              <Text style={styles.comparisonText}>✅ Potpuna anonimnost</Text>
            </View>
          </View>
        </LinearGradient>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Tehnička Metodologija</Text>
          <Text style={styles.description}>
            Tradicionalni servisi se oslanjaju na istorijske zapise koji su često nepotpuni. TrueMeter analizira anomalije u korelaciji između cijene, kilometraže i stanja vozila.
          </Text>

          <View style={styles.methodologyBox}>
            <Text style={styles.methodologyTitle}>🧠 Model Neuronske Mreže</Text>
            <Text style={styles.methodologyText}>
              Sistem je treniran na datasetu od <Text style={{ fontWeight: 'bold', color: Theme.colors.primaryLight }}>46,000+ referentnih tačaka</Text> tržišta.
            </Text>
            <Text style={[styles.methodologyText, { marginTop: 10 }]}>
              Algoritam identifikuje suptilna odstupanja (outliers) koja sugerišu manipulaciju kilometraže, čak i kada ne postoji "papirni trag".
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Ključni Benefiti</Text>

          <View style={styles.featureRow}>
            <View style={styles.iconBox}>
              <Text style={{ fontSize: 24 }}>🛡️</Text>
            </View>
            <View style={styles.featureContent}>
              <Text style={styles.featureTitle}>Potpuna Anonimnost</Text>
              <Text style={styles.featureDesc}>
                Analiza se vrši bez identifikacije konkretnog vozila. Nije potreban VIN broj niti kontakt sa prodavcem (Zero-Knowledge).
              </Text>
            </View>
          </View>

          <View style={styles.featureRow}>
            <View style={styles.iconBox}>
              <Text style={{ fontSize: 24 }}>⚡</Text>
            </View>
            <View style={styles.featureContent}>
              <Text style={styles.featureTitle}>Trenutna Evaluacija</Text>
              <Text style={styles.featureDesc}>
                Procesiranje u realnom vremenu (Real-time) bez čekanja na eksterne API upite.
              </Text>
            </View>
          </View>

          <View style={styles.featureRow}>
            <View style={styles.iconBox}>
              <Text style={{ fontSize: 24 }}>💰</Text>
            </View>
            <View style={styles.featureContent}>
              <Text style={styles.featureTitle}>Ekonomska Isplativost</Text>
              <Text style={styles.featureDesc}>
                Besplatna preliminarna detekcija anomalija prije alokacije sredstava za fizičku inspekciju.
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

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Kontakt i Saradnja</Text>
          <Text style={styles.description}>
            Zainteresovani ste za integraciju TrueMeter tehnologije ili poslovnu saradnju? Kontaktirajte nas direktno.
          </Text>

          <TouchableOpacity
            style={styles.contactButton}
            onPress={handleContact}
          >
            <Text style={styles.contactButtonIcon}>✉️</Text>
            <Text style={styles.contactButtonText}>Pošaljite poruku</Text>
          </TouchableOpacity>
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
  contactButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Theme.colors.surfaceHighlight,
    padding: 16,
    borderRadius: Theme.borderRadius.m,
    borderWidth: 1,
    borderColor: Theme.colors.primary,
  },
  contactButtonIcon: {
    fontSize: 20,
    marginRight: 12,
  },
  contactButtonText: {
    color: Theme.colors.textPrimary,
    fontSize: 16,
    fontWeight: '600',
  },
});
