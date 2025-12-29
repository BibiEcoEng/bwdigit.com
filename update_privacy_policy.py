import json
import os

# Path to the translation files
base_path = r"d:\00-office\localization\bw-digit\src\locales"

# New Privacy Policy content (English)
privacy_policy_en = {
    "tocTitle": "Table of Contents",
    "sections": {
        "generalInformation": {
            "title": "1. General Information",
            "content": "Backpack Wander GmbH takes the protection of personal data seriously and processes personal data in accordance with applicable data protection laws, including the GDPR."
        },
        "responsibleEntity": {
            "title": "2. Responsible Entity",
            "content": "Backpack Wander GmbH\nKolonnenstrasse 8, 10827, Berlin\nGermany\nEmail: info@backpackwander.com"
        },
        "scopeOfApplication": {
            "title": "3. Scope of Application",
            "content": "This Privacy Policy applies to all services and brands operated by Backpack Wander GmbH, including the Pipeline Quality brand."
        },
        "legalBasis": {
            "title": "4. Legal Basis for Data Processing (Art. 6 GDPR)",
            "content": "- Art. 6(1)(b) GDPR – performance of a contract or pre-contractual measures\n- Art. 6(1)(f) GDPR – legitimate interest\n- Art. 6(1)(a) GDPR – consent, where applicable"
        },
        "contactForms": {
            "title": "5. Contact Forms & File Uploads",
            "content": "Personal data submitted via contact forms or file uploads is processed solely to handle inquiries and project-related communication."
        },
        "whatsapp": {
            "title": "6. WhatsApp Communication",
            "content": "Communication via WhatsApp is subject to WhatsApp's privacy policy and used exclusively for business purposes."
        },
        "analytics": {
            "title": "7. Analytics & Tools",
            "content": "We use Google Analytics to analyze website usage. Data processing is based on consent."
        },
        "dataRetention": {
            "title": "8. Data Retention",
            "content": "Data is stored only as long as necessary or required by statutory retention obligations."
        },
        "yourRights": {
            "title": "9. Your Rights",
            "content": "You have the right to access, rectification, erasure, restriction, data portability and objection.\n\nRequests: info@backpackwander.com"
        }
    }
}

# New Privacy Policy content (German)
privacy_policy_de = {
    "tocTitle": "Inhaltsverzeichnis",
    "sections": {
        "generalInformation": {
            "title": "1. Allgemeine Hinweise",
            "content": "Die Backpack Wander GmbH nimmt den Schutz personenbezogener Daten sehr ernst und verarbeitet diese gemäß DSGVO."
        },
        "responsibleEntity": {
            "title": "2. Verantwortliche Stelle",
            "content": "Backpack Wander GmbH\nKolonnenstrasse 8, 10827, Berlin\nDeutschland\nE-Mail: info@backpackwander.de"
        },
        "scopeOfApplication": {
            "title": "3. Geltungsbereich",
            "content": "Diese Datenschutzerklärung gilt für alle Leistungen und Marken der Backpack Wander GmbH, einschließlich Pipeline Quality."
        },
        "legalBasis": {
            "title": "4. Rechtsgrundlagen (Art. 6 DSGVO)",
            "content": "- Art. 6 Abs. 1 lit. b DSGVO – Vertragserfüllung\n- Art. 6 Abs. 1 lit. f DSGVO – berechtigtes Interesse\n- Art. 6 Abs. 1 lit. a DSGVO – Einwilligung"
        },
        "contactForms": {
            "title": "5. Kontaktformulare & Datei-Uploads",
            "content": "Übermittelte Daten werden ausschließlich zur Bearbeitung von Anfragen und Projekten verarbeitet."
        },
        "whatsapp": {
            "title": "6. WhatsApp-Kommunikation",
            "content": "Die Kommunikation über WhatsApp erfolgt gemäß der Datenschutzrichtlinie von WhatsApp."
        },
        "analytics": {
            "title": "7. Analyse-Tools",
            "content": "Wir nutzen Google Analytics auf Basis einer Einwilligung."
        },
        "dataRetention": {
            "title": "8. Speicherdauer",
            "content": "Daten werden nur so lange gespeichert, wie gesetzlich erforderlich."
        },
        "yourRights": {
            "title": "9. Ihre Rechte",
            "content": "Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung und Widerspruch.\n\nAnfragen: info@backpackwander.de"
        }
    }
}

# Update English translation
en_file_path = os.path.join(base_path, "en", "translation.json")
with open(en_file_path, 'r', encoding='utf-8') as f:
    en_data = json.load(f)

en_data["privacyPolicy"] = privacy_policy_en

with open(en_file_path, 'w', encoding='utf-8') as f:
    json.dump(en_data, f, ensure_ascii=False, indent=2)

print("✓ Updated English privacy policy")

# Update German translation
de_file_path = os.path.join(base_path, "de", "translation.json")
with open(de_file_path, 'r', encoding='utf-8') as f:
    de_data = json.load(f)

de_data["privacyPolicy"] = privacy_policy_de

with open(de_file_path, 'w', encoding='utf-8') as f:
    json.dump(de_data, f, ensure_ascii=False, indent=2)

print("✓ Updated German privacy policy")

# For Serbian, we'll use the English version as a placeholder
sr_file_path = os.path.join(base_path, "sr", "translation.json")
with open(sr_file_path, 'r', encoding='utf-8') as f:
    sr_data = json.load(f)

sr_data["privacyPolicy"] = privacy_policy_en  # Using English as placeholder

with open(sr_file_path, 'w', encoding='utf-8') as f:
    json.dump(sr_data, f, ensure_ascii=False, indent=2)

print("✓ Updated Serbian privacy policy (using English content)")
print("\nAll privacy policy translations updated successfully!")
